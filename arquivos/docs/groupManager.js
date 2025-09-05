const fs = require('fs-extra');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');
const path = require('path');

const MessageCounter = require('./MessageCounter');

const messageCounter = new MessageCounter('./dados/global/message_counts.db');

class GroupManager {
constructor() {
this.collectedLinks = new Set();
this.activeUsers = new Set();
this.dbPath = path.join(__dirname, './global/groups.db');
this.db = this.initDB();
}

async sendMessagesToAdminRooms(links, adminRooms, groupName, himuru) {
const promisesRoms = adminRooms.map(romId => {
  const messagesRoms = links.map(link => {
  return himuru.sendMessage(romId, {
text: `*Link coletado do grupo:*\n\n*${groupName}*\n\n🔗 ${link.slice(0, 48)}`
});
});
return Promise.all(messagesRoms);
});
return Promise.allSettled(promisesRoms);
}

async collectAndSendMessage(body, from, sender, salaadms, linkfy, groupName, isGroup, isBotGroupAdmins, himuru){
if(isGroup){
const shouldCollectLink = body.includes("chat.whatsapp.com");
const isSetUser =this.activeUsers.has(sender);
try {
if (shouldCollectLink && !salaadms.includes(from) && !isSetUser) {
this.activeUsers.add(sender);
const groupLinks = linkfy.find(body).map(link => link.href).filter(link => link.startsWith('https://chat.whatsapp.com/') && !this.collectedLinks.has(link));
groupLinks.forEach(link => this.collectedLinks.add(link));
const groupLinkID = isBotGroupAdmins ? await himuru.groupInviteCode(from): null;
const isGrp = groupLinks.some(link=> link.includes(groupLinkID))
if(isGrp){
this.collectedLinks.clear();
this.activeUsers.delete(sender);
return;
}
const uniqueLinks = new Set(groupLinks);
if(uniqueLinks.size > 0) await this.sendMessagesToAdminRooms(Array.from(uniqueLinks), salaadms, groupName, himuru);
setTimeout(() => {
this.collectedLinks.clear();
this.activeUsers.delete(sender)}, 20000);
}
} catch (e) {
console.log('Erro ao coletar link:', e);
}
}
}

initDB() {
const db = new db(this.dbPath, (err) => {
if (err) {
console.error('Erro ao abrir o banco de dados:', err);
  } else {

db.run('PRAGMA synchronous = OFF;');
db.run('PRAGMA journal_mode = DELETE;');
db.run('PRAGMA cache_size = -2000;');
}
});

// Criação da tabela se não existir
db.run(`CREATE TABLE IF NOT EXISTS groups (id TEXT PRIMARY KEY, metadata TEXT)`);
return db;
}

resetDatabase() {
return new Promise((resolve, reject) => {
this.db.run(`DELETE FROM groups`, function (err) {
if (err) {
console.error('Erro ao resetar o banco de dados:', err);
return reject(err);
}
console.log('Banco de dados resetado com sucesso.');
resolve();
});
});
}

async getGroupMetadata(isGroup, from, himuru) {
if (!isGroup) return '';
try {
let groupMetadata = await this.findGroupMetadata(from);
if (!groupMetadata) {
const currentMetadata = await himuru.groupMetadata(from);
await this.insertGroupMetadata(from, currentMetadata);
return this.convertBooleanValues(currentMetadata);
}

const updatedMetadata = await himuru.groupMetadata(from);
if (updatedMetadata && !this.areEqual(groupMetadata, updatedMetadata)) {
await this.updateGroupMetadata(from, updatedMetadata);
return this.convertBooleanValues(updatedMetadata);
}
return this.convertBooleanValues(groupMetadata);
} catch (error) {
console.error('Erro ao obter metadados do grupo:', error);
return '';
}
}

findGroupMetadata(groupId) {
return new Promise((resolve, reject) => {
this.db.get(`SELECT metadata FROM groups WHERE id = ?`, [groupId], (err, row) => {
if (err) {
reject(err);
} else {
resolve(row ? JSON.parse(row.metadata) : null);
}
});
});
}

insertGroupMetadata(groupId, metadata) {
return new Promise((resolve, reject) => {
this.db.run(`INSERT INTO groups (id, metadata) VALUES (?, ?) ON CONFLICT(id) DO UPDATE SET metadata = excluded.metadata`, [groupId, JSON.stringify(metadata)], (err) => {
if (err) return reject(err);
resolve();
});
});
}

updateGroupMetadata(groupId, metadata) {
return this.insertGroupMetadata(groupId, metadata);
}

convertBooleanValues(metadata) {
Object.keys(metadata).forEach(key => {
const value = metadata[key];
if (typeof value === 'number') {
metadata[key] = value === 1;
}
});
return metadata;
}

areEqual(metadata1, metadata2) {
return JSON.stringify(metadata1) === JSON.stringify(metadata2);
}

async getName(from, user) {
try {
const countData = await messageCounter.getMessageCounts(from, user);
const foundNick = countData?.nick || "Sem nome";
return foundNick;
} catch (error) {
console.log(`Error: ${error}`);
return "Sem nome";
}
}

async limparGruposNaoIncluidos(himuru) {
const groups = Object.values(await himuru.groupFetchAllParticipating()).map(group => group.id);
const diretorios = ['./dados/grupos']; // Adicionando os novos diretórios
try {
for (const diretorio of diretorios) {
(await fs.readdir(diretorio)).filter(arquivo => /^[0-9]+@g\.us\.json$/.test(arquivo) && !groups.includes(arquivo.replace('.json', ''))).forEach(async arquivo => {
await fs.unlink(`${diretorio}/${arquivo}`);
});
}
} catch (error) {
console.error('Erro ao executar a operação:', error);
}
};

async ler_mensagem(himuru, info){
await himuru.readMessages([info.key]);
};

manageGroupSettings(from, sender, groupName, isGroup){
if (!isGroup) return;
const dirGroup = `./dirgroup/${from}.json`;
const defaultData = {
name: groupName,
groupId: from, x9: false, 
antiimg: false, antivideo: false,
antiaudio: false, antisticker: false,
antidoc: false, antictt: false,
antiloc: false, antilinkgp: false,
antilinkhard: false, antifake: false,
Odelete: false, antispam: false,
anticatalogo: false, 
sistemGold: false, visuUnica: false, 
registrarFIGUS: false, soadm: false,
rg_aluguel: false,
advtlink: [], advtlinkgp: [],
listanegra: [], advertir: [], 
prefixos: ["#"], comandosB: [],
advertir2: [], legenda_estrangeiro: "0", legenda_listanegra: "Eita, estava na lista negra, sinto muito, terei que remover.",
legenda_documento: "0", legenda_video: "0",
legenda_imagem: "0", multiprefix: false, recolherlinkgp: false,
forca_ofc: [{acertos: 0, erros: 0, palavra: [], escreveu: [], palavra_ofc: 0, dica: 0, tema: 0}],
Chances: [{ id: sender, ChanceG: null, ChanceR: [], Vinganca: null, cassino: 0, quiz: [{errou: 0, acertou: 0, numero: 0}], roletadasorte: false, Cachaca: 1, Escudo: [] }], 
ausentes: [], forca_inc: false, comandos_gold: [],
antipalavrao: {
active: false,
palavras: []
},
limitec: {
active: false,
quantidade: null
},
wellcome: [{
bemvindo1: false,
legendabv: "Olá #numerodele#, seja bem vindo (a)",
legendasaiu: 0
},
{
bemvindo2: false,
legendabv: "Olá #numerodele#, seja bem vindo (a)",
legendasaiu: 0
}],
simi1: false,
autosticker: false, autoresposta: false,
jogos: false, bangp: false,
adminPerms: {
owner_id: null,
active: false,
permissions: []
},
jg_eu_ja_eu_nunca: [],
take: {},
isTrm: false
};
try {
const existingData = fs.existsSync(dirGroup) ? JSON.parse(fs.readFileSync(dirGroup, 'utf-8')) : [];
const groupIndex = existingData.findIndex(group => group.groupId === from);
groupIndex !== -1 ? existingData[groupIndex] = { ...defaultData, ...existingData[groupIndex] } : existingData.push(defaultData);
fs.writeFileSync(dirGroup, JSON.stringify(existingData, null, 2) + '\n');
return existingData
} catch (error) {
console.error(`Erro ao manipular o arquivo ${dirGroup}:`, error);
}
};

readGroupSettings(from) {
const dirGroup =`./dirgroup/${from}.json`;
try {
if (fs.existsSync(dirGroup)) {
const existingData = JSON.parse(fs.readFileSync(dirGroup, 'utf-8'));
return existingData;
} else {
console.log(`O arquivo ${dirGroup} não foi encontrado.`);
return null;
}
} catch (error) {
console.error(`Erro ao ler o arquivo ${dirGroup}:`, error);
return null;  // Retorna null em caso de erro
}
};

}

module.exports = GroupManager;