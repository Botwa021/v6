let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `uhm.. teksnya mana?\n\nexample:\n${usedPrefix + command} tes`
    let thumbLockmsg = `https://telegra.ph/file/e4c8b4c8b5ec67a73a4e4.jpg`
    let msgs = global.db.data.msgs
    if (!(text in msgs)) return await conn.sendFile(m.chat, wm, `'${text}' tidak terdaftar!`, thumbLockmsg, m)
    msgs[text].locked = !/^un/i.test(command)
    m.reply('berhasil dikunci!')
}
    handler.rowner = true
    handler.help = ['un', ''].map(v => v + 'lockmsg <teks>')
    handler.tags = ['database']
    handler.command = /^(un)?lock(vn|msg|video|audio|img|stic?ker|gif)$/i

module.exports = handler