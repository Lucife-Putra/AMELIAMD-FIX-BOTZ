let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
โฆ @${nomorown.split`@`[0]} โฆ
------- ${nameown} -------

๐ฎ *Note:*
โข Owner tidak menerima save contact
โข Owner berhak blockir tanpa alasan
โข Berbicaralah yang sopan & tidak spam
โข Owner Hanya merespon yang berkaitan dengan BOT
โข No Telp`

  let teks = 'Pilih Dibawah kak Model Runtime Nya ! o(ใ๏ผพโฝ๏ผพใ)o'
const sections = [
   {
	title: `${htjava} Runtime โโโโโโโโโยทโข`,
	rows: [
    {title: "Runtime V1", rowId: ".runtime1"},
    {title: "Runtime V2", rowId: ".runtime2"},
    {title: "Runtime V3", rowId: ".runtime3"},
    {title: "Runtime V4", rowId: ".runtime4"},
    {title: "Runtime V5", rowId: ".runtime5"},
    {title: "Runtime V6", rowId: ".runtime6"},
    {title: "Runtime V7", rowId: ".runtime7"},
    ]
    },{
	title: `${htjava} SUPPORT ME โโโโโโโยทโข`,
	rows: [
	    {title: "๐น โข Donasi", rowId: ".owner nomor"},
	{title: "๐ โข Sewa", rowId: ".sewa"},
	{title: "๐ โข Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *RUNTIME* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(runtime)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: fvn, mentions: await conn.parseMention(teks), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`โฎโฐ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['runtime']
handler.tags = ['info']
handler.command = ['runtime', 'rt']


export default handler
