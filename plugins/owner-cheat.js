let handler = async (m, { conn, args }) => {
   if (!args[0]) return m.reply('Masukan Item Yang Mau Di Cheat !')
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes !*`, m)
        global.db.data.users[m.sender].${args[0]} = 10000000000
}
handler.help = ['cheat2']
handler.tags = ['owner']
handler.command = /^(cheat2)$/i

handler.mods = false

module.exports = handler