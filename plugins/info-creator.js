var name = global.nameowner
var numberowner = global.numberowner
var gmail = global.mail
const { 
default: 
makeWASocket,
BufferJSON,
WA_DEFAULT_EPHEMERAL, 
generateWAMessageFromContent, 
downloadContentFromMessage, 
downloadHistory, 
proto,
getMessage, 
generateWAMessageContent, 
prepareWAMessageMedia 
} = require("@adiwajshing/baileys");
var handler = async (m, {
conn
}) => {
const vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${global.nameowner}\nitem1.TEL;waid=${numberowner}:${numberowner}\nitem1.X-ABLabel:Busy.\nURL;My Web: https://hi.rlxfly.my.id\nEMAIL;Email Owner: me@rlxfly.my.id\nORG: NOT A BOT + NO SAVE\nTEL;My number bot;waid=6287776600135\nEND:VCARD`

const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'CN', 
            contacts: [{ vcard }] 
        }
    }
)
await conn.reply(m.chat, "Itu Adalah nomor owner Bot", sentMsg)}
handler.command = handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.limit = true;
module.exports = handler;