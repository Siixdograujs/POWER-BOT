const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

class MessageCounter {
constructor(dbPath) {
this.db = new db(dbPath, (err) => {
if (err) {
console.error('Erro ao abrir o banco de dados:', err);
} else {

this.db.run('PRAGMA synchronous = OFF;');
this.db.run('PRAGMA journal_mode = DELETE;');
this.db.run('PRAGMA cache_size = -2000;');
}
});

// Criar a tabela se não existir
this.db.run(`CREATE TABLE IF NOT EXISTS message_counts (groupId TEXT NOT NULL, id TEXT NOT NULL, messages INTEGER DEFAULT 0, cmd_messages INTEGER DEFAULT 0, audios INTEGER DEFAULT 0, videos INTEGER DEFAULT 0, images INTEGER DEFAULT 0, figus INTEGER DEFAULT 0, aparelho TEXT, nick TEXT, PRIMARY KEY (groupId, id))`);
}

updateMessageCount(groupId, userId, adivinha, pushname, isCmd, type) {
const cmdValue = isCmd ? 1 : 0;
const aparelho = adivinha || 'desconhecido';
const nick = pushname || 'desconhecido';
const messageCounts = {
messages: 1, cmd_messages: cmdValue, audios: type === "audioMessage" ? 1 : 0, videos: type === "videoMessage" ? 1 : 0, images: type === "imageMessage" ? 1 : 0, figus: type === "stickerMessage" ? 1 : 0
};

this.db.run(`INSERT INTO message_counts (groupId, id, messages, cmd_messages, audios, videos, images, figus, aparelho, nick) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(groupId, id) DO UPDATE SET messages = messages + ?, cmd_messages = cmd_messages + ?, audios = audios + ?, videos = videos + ?, images = images + ?, figus = figus + ?, aparelho = ?, nick = ?`, [groupId, userId, messageCounts.messages, messageCounts.cmd_messages, messageCounts.audios, messageCounts.videos, messageCounts.images, messageCounts.figus, aparelho, nick, messageCounts.messages, messageCounts.cmd_messages, messageCounts.audios, messageCounts.videos, messageCounts.images, messageCounts.figus, aparelho, nick], (err) => {
if (err) {
console.error('Erro ao atualizar o contador de mensagens:', err);
}
}
);
}

getMessageCounts(groupId, userId = null) {
return new Promise((resolve, reject) => {
this.db.all(`SELECT * FROM message_counts WHERE groupId = ?`, [groupId], (err, rows) => {
if (err) return reject(err);
const result = {
groupId: groupId,
numbers: rows.map(row => ({
id: row.id,
messages: row.messages,
cmd_messages: row.cmd_messages,
audios: row.audios,
videos: row.videos,
images: row.images,
figus: row.figus,
aparelho: row.aparelho,
nick: row.nick
}))
};

if (userId) {
const filteredNumbers = result.numbers.filter(number => number.id === userId);
resolve(filteredNumbers[0]);
} else resolve(result);
});
});
}

removeGroupObject(groupId) {
return new Promise((resolve, reject) => {
this.db.run(`DELETE FROM message_counts WHERE groupId = ?`, [groupId], function(err) {
if (err) return reject(err);
resolve(this.changes > 0);
});
});
}

removeUserFromGroup(groupId, userId) {
return new Promise((resolve, reject) => {
this.db.run(`DELETE FROM message_counts WHERE groupId = ? AND id = ?`, [groupId, userId], function(err) {
if (err) return reject(err);
resolve(this.changes > 0);
});
});
}


}

module.exports = MessageCounter;
