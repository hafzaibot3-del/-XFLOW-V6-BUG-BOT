const fs = require('fs')

const config = {
    owner: "-",
    botNumber: "-",
    setPair: "XFLOWRIK",
    thumbUrl: "https://github.com/kiuur.png",
    session: "sessions",
    status: {
        public: true,
        terminal: true,
        reactsw: false
    },
    message: {
        owner: "no, this is for owners only",
        group: "this is for groups only",
        admin: "this command is for admin only",
        private: "this is specifically for private chat"
    },
    settings: {
        title: "The@Xflow",
        packname: 'RikzzZhiro',
        description: "this script was created by RikzzZhiro",
        author: 'https://www.rikzzzhiro.tech',
        footer: "zhiro_1978`"
    },
    newsletter: {
        name: "Rikzz Offcial",
        id: "120363384087173434@newsletter"
    },
    socialMedia: {
        YouTube: "https://youtube.com/@rikzzoffcial",
        GitHub: "https://github.com/Rikzzmodz",
        Telegram: "https://t.me/Rikzzback",
        ChannelWA: "https://whatsapp.com/channel/0029Vaw8ZQ4F1YlVEkcXri1a"
    }
}
global.owner = "6285745520816"
global.mess = {
    owner: "Fitur ini khusus untuk owner!", 
    group: "Fitur ini untuk dalam grup!", 
    private: "Fitur ini untuk dalam private chat!", 
}

module.exports = config;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
