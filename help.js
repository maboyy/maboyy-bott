
var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no) => {
return`
ββββ² ππππ½ππ-ππΏ βββ

 π¨π¦ππ₯ ππ‘ππ’
 ID : @${sender.split('@')[0]}
 Nama : ${namenya}
 Premium : ${premnya}

 ππ’π§ ππ‘ππ’
 Library : Baileys-MD
 Time : ${jam} WIB
 Date : ${tanggal}
 Terdaftar : ${usernya}
 Room Chat : ${romnya}

 ππΌππ ππππ 
 ${no++} β³ ${prefix}menu

 ππππ ππππ 
 ${no++} β³ ${prefix}verify
 ${no++} β³ ${prefix}buatroom
 ${no++} β³ ${prefix}secretchat
 ${no++} β³ ${prefix}cekprem
 ${no++} β³ ${prefix}daftarprem
 ${no++} β³ ${prefix}changename

 πππππ ππππ 
 ${no++} β³ ${prefix}kali 1 2
 ${no++} β³ ${prefix}bagi 1 2
 ${no++} β³ ${prefix}kurang 1 2
 ${no++} β³ ${prefix}tambah 1 2
 ${no++} β³ ${prefix}dellist key
 ${no++} β³ ${prefix}addlist key@response
 ${no++} β³ ${prefix}update key@response
 ${no++} β³ ${prefix}done <reply orderan>
 ${no++} β³ ${prefix}proses <reply orderan>
 ${no++} β³ ${prefix}list <only group>
 ${no++} β³ ${prefix}shop <only group>
 
 πππππ ππππ 
 ${no++} β³ ${prefix}fitnah
 ${no++} β³ ${prefix}delete
 ${no++} β³ ${prefix}revoke
 ${no++} β³ ${prefix}tagall
 ${no++} β³ ${prefix}hidetag
 ${no++} β³ ${prefix}setdesc
 ${no++} β³ ${prefix}linkgrup
 ${no++} β³ ${prefix}infogroup
 ${no++} β³ ${prefix}setppgrup
 ${no++} β³ ${prefix}setnamegrup
 ${no++} β³ ${prefix}group open
 ${no++} β³ ${prefix}group close
 ${no++} β³ ${prefix}antilink on
 ${no++} β³ ${prefix}antilink off
 ${no++} β³ ${prefix}welcome on
 ${no++} β³ ${prefix}welcome off
 ${no++} β³ ${prefix}tiktokauto on
 ${no++} β³ ${prefix}tiktokauto off
 ${no++} β³ ${prefix}kick @tag
 ${no++} β³ ${prefix}demote @tag
 ${no++} β³ ${prefix}promote @tag
 `
}

exports.rulesBot = () =>{
return`*ββγ RULES-BOT γββ*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *#menu* untuk memulai bot`
}

exports.donasiBot = (cekName,ucapanWaktu) =>{
return`ββγ *MENU DONATE* γββ

Hi *${cekName}* ${ucapanWaktu} ππ»

*Payment Ovo*
Number: 085789004732
A/N: LEXXY STORE

*Payment Dana*
Number: 085789004732
A/N: LEXXY OFFICIAL

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

ββγ *THX FOR YOU* γββ`
}

exports.infoOwner = () =>{
return`ββγ *INFO OWNER* γββ

 *Data Profil*
 β’ *Nama:* Lexxy Official
 β’ *Umur:* 18 tahun
 β’ *Hoby:* Turu/Game
 β’ *Askot:* Palembang
 β’ *Konten:* Creator

_iam developer bot whatsapp._

 *Sosial Media*
 β’ *Whatsapp:* 083834558105
 β’ *Youtube:* Lexxy Official
 β’ *Github:* Lexxy24
 `
}