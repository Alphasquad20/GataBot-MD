import MessageType from '@adiwajshing/baileys'

let pajak = 0
let handler = async (m, { conn, text, usedPrefix, command, groupMetadata }) => {
let _user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;

let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
let user = global.db.data.users
if (global.db.data.users[user] == undefined)
if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender);
if (!m.mentionedJid.length) m.mentionedJid.push(m.sender);
if (!who) throw `${ag}𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙍 𝘼𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 *@tag*\n\n𝙔𝙊𝙐 𝙈𝙐𝙎𝙏 𝙏𝘼𝙂 𝙏𝙃𝙀 𝙐𝙎𝙀𝙍 *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙇𝘼 𝘾𝘼𝙉𝙏𝙄𝘿𝘼𝘿 𝘿𝙀 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎\n\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙉𝙐𝙈𝘽𝙀𝙍 𝙊𝙁 𝘿𝙄𝘼𝙈𝙊𝙉𝘿𝙎`
if (isNaN(txt)) throw `${mg}𝙎𝙄𝙉 𝙎𝙄𝙈𝘽𝙊𝙇𝙊𝙎, 𝙎𝙊𝙇𝙊 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙉𝙐𝙈𝙀𝙍𝙊𝙎\n\n𝙉𝙊 𝙎𝙔𝙈𝘽𝙊𝙇𝙎, 𝙅𝙐𝙎𝙏 𝙀𝙉𝙏𝙀𝙍 𝙉𝙐𝙈𝘽𝙀𝙍𝙎`
let dmt = parseInt(txt)
let limit = dmt
let pjk = Math.ceil(dmt * pajak)
limit += pjk
if (limit < 1) throw `${mg}𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙈𝙄𝙉𝙄𝙈𝙊 𝙋𝘼𝙍𝘼 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎 𝙀𝙎 *1*\n\n𝙏𝙃𝙀 𝙈𝙄𝙉𝙄𝙈𝙐𝙈 𝙉𝙐𝙈𝘽𝙀𝙍 𝙁𝙊𝙍 𝘿𝙄𝘼𝙈𝙊𝙉𝘿𝙎 𝙄𝙎 *1*`

let dian =`╭[ 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎 | 𝘿𝙄𝘼𝙈𝙊𝙉𝘿 💎 ]⬣\n┃\n┃ღ *PARA | FOR:*\n┃ღ @${_user.split("@s.whatsapp.net")[0]}\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ | NOW YOU HAVE*\n┃ღ *${dmt} Diamante(s)* 💎\n┃\n╰━━━━━━━━━━━━━━⬣`.trim()
conn.sendHydrated(m.chat, dian, wm, 'a', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['💗 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 | 𝙍𝙋𝙂 💗', '.rpgmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘́', '.menu']
], m,)}

user[who].limit += dmt

await conn.dian(
    m.chat,
    { text: sendHydrated, mentions: [_user, m.sender] },
    { quoted: m }
  );
  conn.sendMessage(
    _user,
    {
      text: `*❕@${m.sender.split("@")[0]} TE DIO ${xp} DE  EXP*`,
      mentions: [m.sender],
    },
    { quoted: m }
  );
  }
handler.help = ['adddi <@user>']
handler.tags = ['xp']
handler.command = ['añadirdiamantes', 'dardiamantes', 'dardiamante'] 
handler.rowner = true
export default handler
