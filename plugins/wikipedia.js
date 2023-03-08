import fetch from "node-fetch"
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} Minecraft`
  let res = await fetch(`https://api.zahwazein.xyz/information/wikipedia?query=${text}&apikey=85345ee3d9de`)
  let data = await res.json()
let json = data.result
  m.reply(`
*Judul:* ${json.judul}
*Isi:* ${json.isi}

`.trim())
}
handler.help = ['wikipedia'].map(v => v + ' <apa>')
handler.tags = ['internet']
handler.command = /^(wiki|wikipedia)$/i

export default handler
