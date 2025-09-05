const fs = require('fs-extra');
const colors = require("colors");
function menuzz(prefix, groupName,isPremium,isOwner,groupMembers,isGroupAdmins,nome,numerodono, nomebot, sender_ou_n, hora, data, tempo, runtime,  nomedono) {
return `

╭・・・・☆☆ ・・・・
││|°•★ *USUÁRIO(A)* ★•°.
││|
││|°⋅⊰ *Nome:* ${nome}
││|°⋅⊰ *Bot:* ${nomebot}
││|°⋅⊰ *Criador:*  SiixModz
││|°⋅⊰ *Status:* Online
││|°⋅⊰ *Premium:*  ${isPremium? "✅️": "❌️"}
││|°⋅⊰ *Usuario:* @${sender_ou_n.split("@")[0]}
╰・・・・☆☆ ・・・・
┌────────── 
└┐    *MENUS* 
┌┤|
┌┤|${prefix}menu
││|${prefix}menuadm
││|${prefix}menudono
││|${prefix}menuhentai
││|${prefix}menupremium
││|${prefix}menubrincadeira 
││|${prefix}menudownload
││|${prefix}menufigu
││|
└┬────────── 
┌┤   *BRINCADEIRAS*
││|
││|${prefix}eununca 
││|${prefix}gay 
││|${prefix}casal 
││|${prefix}gtts 
││|${prefix}sn 
││|${prefix}quanto 
││|${prefix}Chance 
││|${prefix}feio 
││|${prefix}feia 
││|${prefix}vesgo 
││|${prefix}rankpau 
││|${prefix}rankgay 
││|${prefix}rankcorno 
││|${prefix}jogodavelha
││|${prefix}casar 
││|${prefix}cancelar 
││|${prefix}divorcio 
││|${prefix}minhadupla 
││|${prefix}gostoso 
││|${prefix}gostosa 
││|${prefix}ranknazista 
││|${prefix}rankotaku 
││|${prefix}rankgostosos 
││|${prefix}chute 
││|${prefix}surubao 
││|${prefix}death 
││|${prefix}rankgado
││|${prefix}abraço
││|${prefix}lesbica
││|${prefix}socar
││|${prefix}bct
││|${prefix}mano
││|${prefix}idiota
││|${prefix}pobre
││|${prefix}rankxrc
││|${prefix}rankbeta
││|${prefix}ranksigma
││|${prefix}noia
││|${prefix}ranknoia
││|${prefix}rico
││|${prefix}rankrico
││|${prefix}sigma
││|${prefix}rankbunduda
││|${prefix}rankbv
││|${prefix}rankbi
││|${prefix}anjo
││|${prefix}magico
││|${prefix}espiao
││|${prefix}mago
││|${prefix}maquina
││|${prefix}samurai
││|${prefix}inteligente
││|${prefix}rankcu
││|${prefix}mendigo
││|${prefix}mendiga
││|${prefix}dogolpe
││|${prefix}comer
││|${prefix}vasco
└──⊷
└┬────────── 
┌┤    *ALEATORIOS* 
││|
││|${prefix}fakemsg 
││|${prefix}imgpralink 
││|${prefix}videopralink
││|${prefix}audiopralink 
││|${prefix}metadinha 
││|${prefix}encurtalink 
││|${prefix}perfil 
││|${prefix}avalie 
││|${prefix}ppt 
││|${prefix}dono 
││|${prefix}getperfil 
│└──⊷
└┬────────── 
┌┤   *DOWNLOADS* 
││|
││|${prefix}play 
││|${prefix}tiktok_video
││|${prefix}tiktok_audio
││|${prefix}mediafire 
││|${prefix}pinterest [nome]
││|${prefix}pinterest2 [link]
││|${prefix}playmp4 
││|${prefix}imgpralink 
││|${prefix}videopralink 
││|${prefix}ytmp3 [link]
││|${prefix}ytmp4 [link]
││|${prefix}playvideo
│└──⊷
└┬────────── 
┌┤    *FIGURINHAS*
││|
││|${prefix}s 
││|${prefix}sticker
││|${prefix}toimg 
││|${prefix}togif 
││|${prefix}take
││|${prefix}rgtake
││|${prefix}rntake
││|${prefix}rename
││|${prefix}emojimix
││|
│└──⊷
└┬──────────  
└┬────────── 
┌┤   *ADMS* 
││|
││|${prefix}d 
││|${prefix}delete 
││|${prefix}marcar 
││|${prefix}modobrincadeira 0/1 
││|${prefix}antilink 
││|${prefix}linkgp 
││|${prefix}bemvindo 
││|${prefix}legendabv 
││|${prefix}legendasaiu 
││|${prefix}grupo a/f 
││|${prefix}promover 
││|${prefix}rebaixar 
││|${prefix}ban 
││|${prefix}kick 
││|${prefix}antifake 
││|${prefix}x9visuunica 1/0 
││|${prefix}banghost 
││|${prefix}leveling 1/0 
││|${prefix}antiflood 
││|${prefix}limitecaracteres 
││|${prefix}banghost 
││|${prefix}autoresposta 
││|${prefix}checkativo 
││|${prefix}inativos 
││|${prefix}addlistanegra 
││|${prefix}dellistanegra 
││|${prefix}antiimg
││|${prefix}antivideo
││|${prefix}antiaudio
││|${prefix}antisticker
││|${prefix}antidocumento
││|${prefix}anticontato
││|${prefix}antiloc
││|${prefix}so_adm
││|${prefix}antinotas
││|${prefix}resetlink
││|${prefix}ausente
││|${prefix}mute
││|${prefix}desmute
││|${prefix}autofigu
││|${prefix}addautoban
││|${prefix}delautoban
││|${prefix}listban
││|${prefix}antifloodsticker
││|${prefix}desativarantifloodsticker
││|${prefix}nsfw 1/0
││|
│└──⊷
└┬──────────  
└┬────────── 
┌┤   *MODIFICAÇOES*
││|
││|${prefix}audiolento 
││|${prefix}audiorapido 
││|${prefix}esquilo 
││|${prefix}vozmenino 
││|${prefix}bass 
││|${prefix}bass2 
││|${prefix}bass3 
││|${prefix}grave 
││|${prefix}grave2 
││|${prefix}grave3 
││|
│└──⊷
└┬──────────
└┬────────── 
┌┤   *DONO* 
││|
││|${prefix}nuke 
││|${prefix}arquivargp 
││|${prefix}numero-dono 
││|${prefix}nick-dono 
││|${prefix}set-prefix 
││|${prefix}reiniciar 
││|${prefix}transmitir 
││|${prefix}seradm 
││|${prefix}sermembro 
││|${prefix}antipv 
││|${prefix}antipv2 
││|${prefix}antipv3 
││|${prefix}audiomenu 
││|${prefix}addpremium 
││|${prefix}delpremium 
││|${prefix}addlevel
││|${prefix}addxp
││|${prefix}tirarxp
││|${prefix}tirarlevel
││|${prefix}blocklevel
││|${prefix}unblocklevel
││|${prefix}npm
││|${prefix}reviverqr
││|${prefix}reviver
││|${prefix}!transmitir_midia
││|${prefix}transmitir2
││|${prefix}blockcmd
││|${prefix}unblockcmd
││|
│└──⊷
└┬────────── 
└┬────────── 
┌┤    *IAS* 
││|
││|${prefix}simih 
││|${prefix}chatgpt 
││|
│└──⊷
└┬────────── 
└┬────────── 
┌┤   *MEMBROS*
││|
││|${prefix}rankativos
││|${prefix}patente
││|${prefix}inativos
││|${prefix}checkativo
││|${prefix}Ptvmsg
││|${prefix}tagme
││|${prefix}ping
││|
│└──⊷
└┬────────── 
└┬────────── 
┌┤   *HENTAIS*
││|
││|${prefix}hentaimp4
││|${prefix}xvideos 
││|${prefix}hentai 
││|${prefix}milf 
││|${prefix}oral 
││|${prefix}plaq 
││|${prefix}ass 
││|
│└──⊷
└┬────────── 
└┬────────── 
┌┤   *TINDER* 
││|
││|${prefix}tinder
││|${prefix}rgtinder
││|${prefix}infotinder
││|
│└──⊷
└┬────────── 
└┬────────── 
┌┤  *JOGOS* 
││|
││|${prefix}jogodavelha 
││|${prefix}forca
││|${prefix}quizanimais 
││|${prefix}vsd
││|
│└──⊷
└─────────── `
    }
    
 function menuadm(prefix, groupName,isPremium,isOwner,groupMembers,isGroupAdmins,nome,numerodono, nomebot, sender_ou_n, hora, data, tempo, runtime,  nomedono) {
return `

╭・・・・☆☆ ・・・・
││|°•★ *USUÁRIO(A)* ★•°.
││|
││|°⋅⊰ *Nome:* ${nome}
││|°⋅⊰ *Bot:* ${nomebot}
││|°⋅⊰ *Criador:*  SiixModz
││|°⋅⊰ *Status:* Online
││|°⋅⊰ *Premium:*  ${isPremium? "✅️": "❌️"}
││|°⋅⊰ *Usuario:* @${sender_ou_n.split("@")[0]}
╰・・・・☆☆ ・・・・

╭───∘⟬ *ADMS* ⟭∘───⪨
││|${prefix}d
││|${prefix}delete
││|${prefix}marcar
││|${prefix}modobrincadeira 0/1
││|${prefix}antilink
││|${prefix}linkgp
││|${prefix}bemvindo
││|${prefix}grupo a/f
││|${prefix}promover
││|${prefix}rebaixar
││|${prefix}ban
││|${prefix}kick
││|${prefix}antifake
││|${prefix}x9visuunica 1/0
││|${prefix}banghost
││|${prefix}leveling 1/0
││|${prefix}antiflood
││|${prefix}limitecaracteres
││|${prefix}banghost
││|${prefix}autoresposta
││|${prefix}checkativo
││|${prefix}antiimg
││|${prefix}antivideo
││|${prefix}antiaudio
││|${prefix}antisticker
││|${prefix}antidocumento
││|${prefix}anticontato
││|${prefix}antiloc
││|${prefix}so_adm
││|${prefix}antinotas
││|${prefix}resetlink
││|${prefix}ausente
││|${prefix}mute
││|${prefix}desmute
││|${prefix}addlistanegra 
││|${prefix}dellistanegra 
││|${prefix}autofigu
││|${prefix}antifloodsticker
││|${prefix}desativarantifloodsticker
││|${prefix}nsfw 1/0
╰─────────────────⪨
`
    }
    
    function menudono(prefix, groupName,isPremium,isOwner,groupMembers,isGroupAdmins,nome,numerodono, nomebot, sender_ou_n, hora, data, tempo, runtime,  nomedono) {
return `
╭・・・・☆☆ ・・・・
││|°•★ *USUÁRIO(A)* ★•°.
││|
││|°⋅⊰ *Nome:* ${nome}
││|°⋅⊰ *Bot:* ${nomebot}
││|°⋅⊰ *Criador:*  SiixModz
││|°⋅⊰ *Status:* Online
││|°⋅⊰ *Premium:*  ${isPremium? "✅️": "❌️"}
││|°⋅⊰ *Usuario:* @${sender_ou_n.split("@")[0]}
╰・・・・☆☆ ・・・・

╭───∘⟬ *PARA DONO* ⟭∘───⪨
││|${prefix}nuke
││|${prefix}arquivargp
││|${prefix}numero-dono
││|${prefix}nick-dono
││|${prefix}set-prefix
││|${prefix}reiniciar
││|${prefix}transmitir 
││|${prefix}seradm
││|${prefix}sermembro 
││|${prefix}antipv
││|${prefix}antipv2
││|${prefix}antipv3
││|${prefix}audiomenu
││|${prefix}addpremium 
││|${prefix}delpremium 
││|${prefix}npm
││|${prefix}reviverqr
││|${prefix}reviver
││|${prefix}!transmitir_midia
││|${prefix}transmitir2
││|${prefix}blockcmd
││|${prefix}unblockcmd
╰─────────────────⪨
`
    }
    
        function menubrincadeira(prefix, groupName,isPremium,isOwner,groupMembers,isGroupAdmins,nome,numerodono, nomebot, sender_ou_n, hora, data, tempo, runtime,  nomedono) {
return `

╭・・・・☆☆ ・・・・
││|°•★ *USUÁRIO(A)* ★•°.
││|
││|°⋅⊰ *Nome:* ${nome}
││|°⋅⊰ *Bot:* ${nomebot}
││|°⋅⊰ *Criador:*  SiixModz
││|°⋅⊰ *Status:* Online
││|°⋅⊰ *Premium:*  ${isPremium? "✅️": "❌️"}
││|°⋅⊰ *Usuario:* @${sender_ou_n.split("@")[0]}
╰・・・・☆☆ ・・・・

╭───∘⟬ *BRINCADEIRAS* ⟭∘───⪨
││|${prefix}eununca 
││|${prefix}gay
││|${prefix}casal
││|${prefix}gtts
││|${prefix}sn
││|${prefix}quanto 
││|${prefix}Chance
││|${prefix}feio
││|${prefix}feia
││|${prefix}vesgo
││|${prefix}rankpau
││|${prefix}rankgay
││|${prefix}rankcorno
││|${prefix}jogodavelha
││|${prefix}casar
││|${prefix}cancelar
││|${prefix}divorcio
││|${prefix}minhadupla
││|${prefix}gostoso
││|${prefix}gostosa
││|${prefix}ranknazista
││|${prefix}rankotaku
││|${prefix}rankgostosos
││|${prefix}chute
││|${prefix}surubao
││|${prefix}death
││|${prefix}rankgado
││|${prefix}abraço
││|${prefix}lesbica
││|${prefix}socar
││|${prefix}bct
││|${prefix}mano
││|${prefix}idiota
││|${prefix}pobre
││|${prefix}rankxrc
││|${prefix}rankbeta
││|${prefix}ranksigma
││|${prefix}noia
││|${prefix}ranknoia
││|${prefix}rico
││|${prefix}rankrico
││|${prefix}sigma
││|${prefix}rankbunduda
││|${prefix}rankbv
││|${prefix}rankbi
││|${prefix}anjo
││|${prefix}magico
││|${prefix}espiao
││|${prefix}mago
││|${prefix}maquina
││|${prefix}samurai
││|${prefix}inteligente
││|${prefix}rankcu
││|${prefix}mendigo
││|${prefix}mendiga
││|${prefix}comer
││|${prefix}dogolpe
││|${prefix}vasco
╰─────────────────⪨
`
    }
    
     function menulogos(prefix, groupName,isPremium,isOwner,groupMembers,isGroupAdmins,nome,numerodono, nomebot, sender_ou_n, hora, data, tempo, runtime,  nomedono) {
return `
╭・・・・☆☆ ・・・・
││|°•★ *USUÁRIO(A)* ★•°.
││|
││|°⋅⊰ *Nome:* ${nome}
││|°⋅⊰ *Bot:* ${nomebot}
││|°⋅⊰ *Criador:*  SiixModz
││|°⋅⊰ *Status:* Online
││|°⋅⊰ *Premium:*  ${isPremium? "✅️": "❌️"}
││|°⋅⊰ *Usuario:* @${sender_ou_n.split("@")[0]}
╰・・・・☆☆ ・・・・

╭───∘⟬ *LOGOS* ⟭∘───⪨
││|${prefix}glitch
││|${prefix}write
││|${prefix}advancedglow
││|${prefix}typography
││|${prefix}pixelglitch
││|${prefix}neonglitch
││|${prefix}flag
││|${prefix}flag3d
││|${prefix}deleting
││|${prefix}blackpink
││|${prefix}glowing
││|${prefix}underwater
││|${prefix}logomaker
││|${prefix}cartoon
││|${prefix}papercut
││|${prefix}watercolor
││|${prefix}effectclouds
││|${prefix}blackpinklogo
││|${prefix}gradient
││|${prefix}summerbeach
││|${prefix}luxurygold
││|${prefix}multicoloredneon
││|${prefix}sandsummer
││|${prefix}galaxywallpaper
││|${prefix}1917
││|${prefix}makingneon
││|${prefix}royal
││|${prefix}freecreate
││|${prefix}galaxy
││|${prefix}darkgreen
││|${prefix}lighteffects
││|${prefix}dragonball
││|${prefix}neondevil
││|${prefix}frozen
││|${prefix}wooden3d
││|${prefix}metal3d
││|${prefix}ligatures
││|${prefix}3druby
││|${prefix}sunset
││|${prefix}cemetery
││|${prefix}halloween
││|${prefix}horror
││|${prefix}blood
││|${prefix}joker
││|${prefix}clouds
│
│
│ *LOGO VIDEO*
│
││|${prefix}pubgvideo
││|${prefix}newyear
││|${prefix}tiger
╰─────────────────⪨
`
    }
    
  function menuhentai(prefix, groupName,isPremium,isOwner,groupMembers,isGroupAdmins,nome,numerodono, nomebot, sender_ou_n, hora, data, tempo, runtime,  nomedono) {
return `

╭・・・・☆☆ ・・・・
││|°•★ *USUÁRIO(A)* ★•°.
││|
││|°⋅⊰ *Nome:* ${nome}
││|°⋅⊰ *Bot:* ${nomebot}
││|°⋅⊰ *Criador:*  SiixModz
││|°⋅⊰ *Status:* Online
││|°⋅⊰ *Premium:*  ${isPremium? "✅️": "❌️"}
││|°⋅⊰ *Usuario:* @${sender_ou_n.split("@")[0]}
╰・・・・☆☆ ・・・・

╭───∘⟬🥵 *HENTAI* 🥵⟭∘───⪨
││|${prefix}nsfwloli
││|${prefix}ahegao
││|${prefix}ass
││|${prefix}bdsm
││|${prefix}blowjob
││|${prefix}cuckold
││|${prefix}cum
││|${prefix}ero
││|${prefix}femdom
││|${prefix}foot
││|${prefix}gangbang
││|${prefix}glasses
││|${prefix}hentai
││|${prefix}jahy
││|${prefix}manga
││|${prefix}neko
││|${prefix}neko2
││|${prefix}orgy
││|${prefix}panties
││|${prefix}pussy
││|${prefix}tentacles
││|${prefix}thighs
││|${prefix}yuri
││|${prefix}zettairyouiki
││|${prefix}tetas
╰─────────────────⪨
╭∘⟬📽 *ONLYFANS* 📽⟭∘⪨
││|${prefix}amadorvideo
││|${prefix}egrilvideo
││|${prefix}videozinhos
╰─────────────────⪨
`
    }
    
    function modificações(prefix, groupName,isPremium,isOwner,groupMembers,isGroupAdmins,nome,numerodono, nomebot, sender_ou_n, hora, data, tempo, runtime,  nomedono) {
return `
╭・・・・☆☆ ・・・・
││|°•★ *USUÁRIO(A)* ★•°.
││|
││|°⋅⊰ *Nome:* ${nome}
││|°⋅⊰ *Bot:* ${nomebot}
││|°⋅⊰ *Criador:*  SiixModz
││|°⋅⊰ *Status:* Online
││|°⋅⊰ *Premium:*  ${isPremium? "✅️": "❌️"}
││|°⋅⊰ *Usuario:* @${sender_ou_n.split("@")[0]}
╰・・・・☆☆ ・・・・

╭───∘⟬ *MODiFICAÇOES* ⟭∘───⪨
││|${prefix}audiolento 
││|${prefix}audiorapido 
││|${prefix}esquilo 
││|${prefix}vozmenino 
││|${prefix}bass 
││|${prefix}bass2 
││|${prefix}bass3 
││|${prefix}grave 
││|${prefix}grave2 
││|${prefix}grave3 
╰─────────────────⪨
`
    }
    
    function download(prefix, groupName,isPremium,isOwner,groupMembers,isGroupAdmins,nome,numerodono, nomebot, sender_ou_n, hora, data, tempo, runtime,  nomedono) {
return `
╭・・・・☆☆ ・・・・
││|°•★ *USUÁRIO(A)* ★•°.
││|
││|°⋅⊰ *Nome:* ${nome}
││|°⋅⊰ *Bot:* ${nomebot}
││|°⋅⊰ *Criador:*  SiixModz
││|°⋅⊰ *Status:* Online
││|°⋅⊰ *Premium:*  ${isPremium? "✅️": "❌️"}
││|°⋅⊰ *Usuario:* @${sender_ou_n.split("@")[0]}
╰・・・・☆☆ ・・・・

╭───∘⟬ *DONWLOADS* ⟭∘───⪨
││|${prefix}play 
││|${prefix}tiktok_video
││|${prefix}tiktok_audio
││|${prefix}mediafire 
││|${prefix}pinterest  
││|${prefix}pinterest2 [link]
││|${prefix}playmp4 
││|${prefix}imgpralink 
││|${prefix}videopralink 
││|${prefix}audiopralink
││|${prefix}ytmp3 [link]
││|${prefix}ytmp4 [link]
││|${prefix}playvideo
╰─────────────────⪨`

}


function menufig(prefix, groupName,isPremium,isOwner,isGroupAdmins,nome,numerodono, nomebot, sender_ou_n, hora, data, tempo, runtime, nomedono) {
return `
╭・・・・☆☆ ・・・・
││|°•★ *USUÁRIO(A)* ★•°.
││|
││|°⋅⊰ *Nome:* ${nome}
││|°⋅⊰ *Bot:* ${nomebot}
││|°⋅⊰ *Criador:*  SiixModz
││|°⋅⊰ *Status:* Online
││|°⋅⊰ *Premium:*  ${isPremium? "✅️": "❌️"}
││|°⋅⊰ *Usuario:* @${sender_ou_n.split("@")[0]}
╰・・・・☆☆ ・・・・

╭───∘⟬ *FIGURINHAS* ⟭∘───⪨
││|${prefix}s
││|${prefix}sticker
││|${prefix}roubar
││|${prefix}rename
││|${prefix}take
││|${prefix}rgtake
││|${prefix}rntake
││|${prefix}rename
││|${prefix}emojimix
╰─────────────────⪨`

}

function menupremium(prefix, groupName,isPremium,isOwner,groupMembers,isGroupAdmins,nome,numerodono, nomebot, sender_ou_n, hora, data, tempo, runtime,  nomedono) {
return `
╭・・・・☆☆ ・・・・
││|°•★ *USUÁRIO(A)* ★•°.
││|
││|°⋅⊰ *Nome:* ${nome}
││|°⋅⊰ *Bot:* ${nomebot}
││|°⋅⊰ *Criador:*  SiixModz
││|°⋅⊰ *Status:* Online
││|°⋅⊰ *Premium:*  ${isPremium? "✅️": "❌️"}
││|°⋅⊰ *Usuario:* @${sender_ou_n.split("@")[0]}
╰・・・・☆☆ ・・・・

╭∘⟬ *PUXADAS/PUXAR DADOS* ⟭∘─⪨
││|${prefix}tel [numero]
││|${prefix}tel2 [numero]
││|${prefix}cpf [cpf]
││|${prefix}nome [nome]
││|${prefix}score
││|${prefix}placa
╰─────────────────⪨
╭∘⟬ *COMANDOS SIMPLES* ⟭∘⪨
││|${prefix}gerarcpf
╰─────────────────⪨
╭───∘⟬ *+18*  😈 ⟭∘───⪨
││|${prefix}nsfwloli
││|${prefix}ahegao
││|${prefix}ass
││|${prefix}bdsm
││|${prefix}blowjob
││|${prefix}cuckold
││|${prefix}cum
││|${prefix}ero
││|${prefix}femdom
││|${prefix}foot
││|${prefix}gangbang
││|${prefix}glasses
││|${prefix}hentai
││|${prefix}jahy
││|${prefix}manga
││|${prefix}neko
││|${prefix}neko2
││|${prefix}orgy
││|${prefix}panties
││|${prefix}pussy
││|${prefix}tentacles
││|${prefix}thighs
││|${prefix}yuri
││|${prefix}zettairyouiki
││|${prefix}tetas
╰─────────────────⪨`
}

function menuvip(prefix, groupName,isPremium,isOwner,groupMembers,isGroupAdmins,nome,numerodono, nomebot, sender_ou_n, hora, data, tempo, runtime,  nomedono) {
return `

╭・・・・☆☆ ・・・・
││|°•★ *USUÁRIO(A)* ★•°.
││|
││|°⋅⊰ *Nome:* ${nome}
││|°⋅⊰ *Bot:* ${nomebot}
││|°⋅⊰ *Criador:*  SiixModz
││|°⋅⊰ *Status:* Online
││|°⋅⊰ *Premium:*  ${isPremium? "✅️": "❌️"}
││|°⋅⊰ *Usuario:* @${sender_ou_n.split("@")[0]}
╰・・・・☆☆ ・・・・


╭───∘⟬ *PARA DONO* ⟭∘───⪨
││|${prefix}modovip 1/0
╰─────────────────⪨
╭───∘⟬ *MENU VIP!* ⟭∘───⪨
││|${prefix}trava [numero/quantidade]
╰─────────────────⪨`
}

function menuxp(prefix, groupName,isPremium,isOwner,groupMembers,isGroupAdmins,nome,numerodono, nomebot, sender_ou_n, hora, data, tempo, runtime,  nomedono) {
return `

╭・・・・☆☆ ・・・・
││|°•★ *USUÁRIO(A)* ★•°.
││|
││|°⋅⊰ *Nome:* ${nome}
││|°⋅⊰ *Bot:* ${nomebot}
││|°⋅⊰ *Criador:*  SiixModz
││|°⋅⊰ *Status:* Online
││|°⋅⊰ *Premium:*  ${isPremium? "✅️": "❌️"}
││|°⋅⊰ *Usuario:* @${sender_ou_n.split("@")[0]}
╰・・・・☆☆ ・・・・


╭───∘⟬ *MENU XP* ⟭∘───⪨
││|${prefix}xp
││|${prefix}estatisticas
││|${prefix}sorteioxp
││|${prefix}dadoapostado
││|${prefix}minerarxp
││|${prefix}cassino
││|${prefix}roubar
││|${prefix}
││|${prefix}
││|${prefix}
││|${prefix}
╰─────────────────⪨`
}

    module.exports = { menuzz, menuadm, menudono, menubrincadeira, menulogos, menuhentai, modificações, download, menufig, menuvip,  menupremium, menuxp} 
    
fs.watchFile(require.resolve(__filename), () => {
fs.unwatchFile(require.resolve(__filename));
console.log(colors.blue(`Alterações salvas - ${__filename}`));
delete require.cache[require.resolve(__filename)]
require(require.resolve(__filename))
})
