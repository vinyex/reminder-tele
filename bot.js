const { ID_GROUP, BOT_TOKEN } = require('dotenv').config().parsed
const cron = require('node-cron')
const Telegraf = require('telegraf')

const bot = new Telegraf(BOT_TOKEN)
console.log(bot ? 'Startingggg' : 'Bot failed init')

const timezoneCron = {
    scheduled: true,
    timezone: "Asia/Bangkok"
}

cron.schedule('30 9 * * Monday-Friday', function(){
    bot.telegram.sendMessage(ID_GROUP, "gitar ku petik bass ku betot, ini dah jam 9 30 mari kita report");
}, timezoneCron)

cron.schedule('0 13 * * Monday-Friday', function(){
    bot.telegram.sendMessage(ID_GROUP, "WAYAHE WAYAHEEE, WAYAHEE PUNCH IN");
}, timezoneCron)

cron.schedule('0 17 * * Monday-Friday', function(){
    bot.telegram.sendMessage(ID_GROUP, "WAYAHE WAYAHEEE, WAYAHEE PUNCH OUTT");
}, timezoneCron)

bot.start((ctx) => {
    console.log({ ctx })
    ctx.reply('alah sia boy udah distart')
})

bot.hears('ipin', (ctx) => {
    console.log({ ctx })
    ctx.reply('Ngopo')
})

bot.launch()