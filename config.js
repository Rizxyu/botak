global.DeveloperMode = 'false' //true Or false
global.linkGC = ['u', 'u']
global.owner = ['6282328303332', '62823283033323'] // Owner
global.mods = ['6282328303332', '6285783417029'] // moderator
global.prems = ['6282328303332']  //premium
global.wait = '[ ⚠️ ] SEDANG DIPROSES...'

global.botwm = 'ʀᴀɪɴ ʙᴏᴛ'

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  dhnjing: 'https://dhnjing.xyz',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'c2c200ae76c1c557',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ' 
}

// Sticker WM
global.packname = 'Rain Bot'
global.author = '©Rizxyu'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&doScale=true&scaleWidth=800&scaleHeight=400&fontsize=90&fillTextType=1&text='

global.multiplier = 39 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
