import fs from 'fs'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let Poto = fs.readFileSync('./media/menu.jpg')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let zykomd = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let krtu = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
Nama lengkap:
Nama panggilan:
Hobi:
Umur:
Gender:
Kelas:
Tinggi badan:
Berat badan :
Agama:
Golongan darah:
Status:
Nama pacar:
Jumlah mantan:
Nama mantan:
Nama bapak : 
Nama ibu :
Nama kakak:
Kakak online:
Kakak kandung/tiri:
Jumlah kakak:
Nama adek:
Adek online:
Adek kandung/tiri: 
Jumlah adek:
Nama kakek:
Kakek dari ayah :
Kakek dari ibu  :
Nama nenek:
Nenek dari ayah :
Nenek dari ibu :
Nama bibi:
Bibi dari ayah :
Bibi dari ibu :
Nama paman
Bibi dari ayah :
Bibi dari ibu :
KTP:
SIM: 
STNK:
BPKB:
KK: 
Alamat rumah:
RT: 
RW:
KELURAHAN:
KECAMATAN: 
KABUPATEN: 
KOTA: 
PROVINSI:
PLANET:
GALAXY:
UNIVERSE:
LANGIT:
DARATAN: 
LAUTAN: 
KEPULAUAN:
SAMUDRA:
UKURAN SEPATU:
UKURAN BAJU: 
UKURAN CELANA:
LEBAR PINGGANG:
PANJANG TANGAN:
PANJANG KAKI:
MAKANAN FAVORIT:
MINUMAN FAVORIT:
FILM FAVORIT: 
SINETRON FAVORIT:
GAME FAVORIT:
ANIME FAVORIT:
MANGA FAVORIT:
MANHUA FAVORIT:
MANHWA FAVORIT:
CHANNEL YOUTUBE:
INSTAGRAM:
TWITTER: 
FACEBOOK:
MUSIC FAVORIT:
SIFAT:
SIKAP:
ZODIAK:
TANGGAL LAHIR: 
MERK HP:
MERK MOTOR:
MERK MOBIL:
TINGKAT RUMAH:
ALAMAT SEKOLAH:
Ukuran daleman:
Ukuran atasan :
Diameter kepala :
Statistik tubuh 
Diameter perut :
Diameter lengan :
Diameter paha :
Diameter lutut :
Diameter betis:
Panjang tangan :
Panjang kaki :
Panjang kepala :
Lebar hidung :
Cita cita :
Hobi :
Jenis hewan peliharaan :
Nama hewan:
Diameter rumah:
Waifu:
Husbu:
Loli kesukaan :
Shota kesukaan :
Punya brp teman :
Teman online :
Teman offline :
Teman main game:
Teman sekolah:
Nemu link grup ini dari mana :
Kenal sama siapa aj d grup ini :
Org paling cantik yg lu kenal :
Org paling ganteng yg lu kenal :
Nama wali kelas:
Nama kepala sekolah :
Nma ketua kelas:
Wakil ketua kls:
Sekertaris :
Sekertaris 2:
Bendahara:
Bendahara 2:
Nama presiden:
Nama wakil:
Nma org yg lu kejar:
Planet yg lu ingin:
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`
let weem = `📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner`
conn.send2ButtonImg(m.chat, Poto, krtu, weem, 'Menu', '.menu', 'List Menu', '.tesm', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://www.instagram.com/l4c1f2r',
    mediaType: 2, 
    description: sgc,
    title: 'Jᴏɪɴ Sɪɴɪ Cᴜʏ',
    body: bottime,
    thumbnail: await(await fetch(zykomd)).buffer(),
    sourceUrl: sig
}}
  }) // Tambah sendiri kalo mau
}   
handler.command = /^(intro)$/i

export default handler

