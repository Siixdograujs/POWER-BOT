const fs = require("fs-extra")

const colors = require("colors")

let vsdvdd = [
"E verdade que você ja namorou escondido de seus pais?",
"E verdade que você ja ficou sem roupas escondido?",
"E verdade que voce roubou dinheiro dos pais escondido?",
"E verdade que voce ja fumou escondido dos seus pais?",
"E verdade que voce ja mandou uma foto nua para a pessoa errada?"]

let vsddsf = [
"Eu te desafio a fazer um desenho bem bonito e mostrar para os seus amigos.",
"Eu te desafio a enviar uma foto mais constrangedora que você tem.",
"Eu te desafio a enviar um audio gritando", "Eu te desafio a enviar um audio cantando",
"Eu te desafio a enviar um video de voce dançando para todos verem.",
"Eu te desafio a fazer um video de você fazendo malabarismos com qualquer objetos que voce tiver na sua casa e mandar para todos verem."]



module.exports = {vsdvdd, vsddsf}


let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.bold(`\n\n• O arquivo "${__filename}" foi atualizado.\n`));
delete require.cache[file]
require(file)
});