require("./doc/module.js")

global.prefix = ['','!','.',',','#','/']
global.owner = ['242069283966']
global.ownMain = '242069284966'
global.NamaOwner = 'mh la melo' //
global.sessionName = 'session'
global.connect = true // 
global.namabot = 'MH la melo' //
global.author = '🦄드림 가이 Xeon' //
global.packname = 'Xeon-Bug-API' //
global.url1 = 'https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20' //
global.url2 = 'https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20' //
global.linkgc = 'https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20'
global.delayjpm = 3500
 





let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
