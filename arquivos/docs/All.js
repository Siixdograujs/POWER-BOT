const fs = require("fs")
const colors = require("colors");
const moment = require('moment-timezone');



const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}

const isJsonIncludes = (json, value) => {
if(JSON.stringify(json).includes(value)) return true
return false
}


const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};


const sendHours = (formato) => {moment.locale("pt")
return moment.tz('America/Sao_Paulo').format(formato)}

const contar = (frase, letraProcurada) => {
total = 0
for(i = 0; i < frase.length; i++) {
if(letraProcurada == frase[i]) total += 1
}
return total
}

const contarMin = (base_a) => {
if(contar(base_a, `:`) != 1) return `É necessário o uso dos : no horário, seguindo apenas horas e minutos`
var [a, b] = base_a.split(':')
return Number(Number(a) * 60) + Number(b)
}

function saveJSON(inter, caminho){
fs.writeFileSync(caminho, JSON.stringify(inter, null, 2))}

const converterMin = (base_b) => {
if(!Number(base_b)) return `Precisa ser um número`
nmr = Number(base_b)
b = nmr % 60
a = (nmr - b) / 60
return `${a < 10 ? `0` + a : a}:${b < 10 ? `0` + b : b}`
}

const ocgrouppath = `./arquivos/docs/openclosegp.json`

if(!fs.existsSync(ocgrouppath)) {fs.writeFileSync(ocgrouppath, JSON.stringify([]))}

const openclosegp = JSON.parse(fs.readFileSync(ocgrouppath))

function saveOpenCloseGP() {saveJSON(openclosegp, ocgrouppath)}

function rgGroupOCfunc(from) {
  if(!isJsonIncludes(openclosegp, from)) {
    openclosegp.push({groupId: from, horarios: []})
    saveOpenCloseGP()
  }
}

const getGroupOpenCloseFunc = (from) => {
  let group = openclosegp.find(g => g.groupId === from)
  if (!group) {
    rgGroupOCfunc(from)
    group = openclosegp.find(g => g.groupId === from)
  }
  return group.horarios
}
function addOpenCloseGP(from, horario, adm, af = `open`) {
  if(horario.includes(`:`)) {
    a = contarMin(horario)
    b = a % 1440
    day = (a - b) / 1440
    hr = converterMin(b)
  } else {
    letra = String(horario).slice(horario.length - 1, horario.length).toLowerCase()
    if(letra == `d`) mp = 60 * 24
    else if(letra == `h`) mp = 60
    else mp = 1
    nmr = Number(String(horario).slice(0, horario.length - 1)) || 1
    nmr *= mp
    ha = contarMin(sendHours("HH:mm")) + nmr
    parte = ha % 1440
    day = (ha - parte) / 1440
    hr = converterMin(parte)
  }
  if(day == 0 && contarMin(hr) < contarMin(sendHours("HH:mm"))) {
    day += 1
  }
  grupo = getGroupOpenCloseFunc(from)
  grupo.push({id: sendHours("DDMMYYHHmmss"), func: af, hora: hr, dias: day, save: sendHours("DD"), cobrado: false, adm: adm})
  saveOpenCloseGP()
}

const getLastOpenCloseGP = (from) => {
  grupo = getGroupOpenCloseFunc(from)
  return grupo[grupo.length - 1]
}

const isIDopenCloseGP = (from, id) => {
  grupo = getGroupOpenCloseFunc(from)
  AB = grupo.map(i => i.id).indexOf(id)
  return AB >= 0 ? true : false
}

function rmOpenCloseGP(from, id) {
  grupo = getGroupOpenCloseFunc(from)
  AB = grupo.map(i => i.id).indexOf(id)
  grupo.splice(AB, 1)
  saveOpenCloseGP()
}

async function ABRIR_E_FECHAR_GRUPO(client) {
  if(openclosegp.length > 0) {
    for(abrir of openclosegp) {
      if(abrir.horarios.length > 0) {
        for(fechar of abrir.horarios) {
          if(fechar.dias > 0) {
            if(Number(fechar.save) !== Number(sendHours("DD"))) {
              fechar.save = sendHours("DD")
              fechar.dias -= 1
              saveOpenCloseGP()
            }
          } else {
            if(contarMin(sendHours("HH:mm")) >= contarMin(fechar.hora) && !fechar.cobrado) {
              fechar.cobrado = true
              saveOpenCloseGP()
              grupo = abrir.groupId
              data = await client.groupMetadata(grupo)
              AB = openclosegp.map(ab => ab.groupId).indexOf(grupo)
              BC = openclosegp[AB].horarios.map(bc => bc.id).indexOf(fechar.id)
              if(fechar.func == `close`) {
                client.groupSettingUpdate(grupo, `announcement`)
                await sleep(2500)
                client.sendMessage(grupo, {text: `[❗] *O grupo ${data.subject || `"indefinido"`} foi fechado pelo ADM @${fechar.adm.split("@")[0]} em horário programado com sucesso* ❌`, mentions: [fechar.adm]})
                openclosegp[AB].horarios.splice(BC, 1)
                saveOpenCloseGP()
              } else {
                client.groupSettingUpdate(grupo, `not_announcement`)
                await sleep(2500)
                client.sendMessage(grupo, {text: `[❕] *O grupo ${data.subject || `"indefinido"`} foi aberto pelo ADM @${fechar.adm.split("@")[0]} em horário programado com sucesso* ✔`, mentions: [fechar.adm]})
                openclosegp[AB].horarios.splice(BC, 1)
                saveOpenCloseGP()
              }
            }
          }
        }
      }
    }
  }
}

module.exports = { openclosegp, saveOpenCloseGP, rgGroupOCfunc, getGroupOpenCloseFunc, addOpenCloseGP, rmOpenCloseGP, isIDopenCloseGP, ABRIR_E_FECHAR_GRUPO, getLastOpenCloseGP }

let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.bold(`\n\n• O arquivo "${__filename}" foi atualizado.\n`));
delete require.cache[file]
require(file)
});