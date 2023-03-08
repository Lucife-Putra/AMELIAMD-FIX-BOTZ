import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.zahwazein.xyz/creator/maketweet?text2=${response[0]}&text=${response[1]}&apikey=85345ee3d9de`
  conn.sendFile(m.chat, res, 'maketweet.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['makertweet'].map(v => v + ' <text>')
handler.tags = ['logo']
handler.command = /^(makertweet)$/i
handler.limit = false
//buatan zyko-md, jgn hapus atuh 😊
export default handler