//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Dar Es Salam,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Frecyber/Frecyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1d4a42b28790d0f7a7195.jpg";
global.devs = "255620814108,255764182801,255776663848,255752593977";
global.sudo = process.env.SUDO || "255620814108,255764182801,255776663848,255752593977";
global.owner = process.env.OWNER_NUMBER || "254757153052";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "LUCKY-XFORCE••<=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUxLN2pvWnJ1MGw2UEpHQkhRYXVUWmhZMm04M2licExrUEZHaXgxMDgzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmV3dHlNSHdnNzBsUkJOT1FZSHlJVVJpcTRFdXY3T1c4UDVHMnA0THR3cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBT0N6OU1yV1hVcGlmaHVCQkR2VGRlMHRjTTVZVUtDSjU1bHNZZ2NiVW53PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2N01laXlwOUhSc0RqTkxGSWpiK3BidXhDK0dGT0pzd1ovL25OWUJLbWdvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndNVjNicHFVa25PSkxOMXNJWjM5c3RyeXJ6K1hUN3hybG9vejVsRWZRVjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtwR0ZxMFlzVElKclpGSGZIMGNPemFKYXFuNXBEZ2ovR1ZPWW5rNlJ0QzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlBDdGtuVkYzZ2NSbnJvVE00bWJndXVpaUlHUWR6empFd3BkbTdsZ0FWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3hDZktDTDdwNXNUUU4xbHd5bm5nQUdTS1Vsa2Q5b2tVNm1mejdObERrbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ink1cGt5RHZFOTFHNUJaR0k1Tzc3RWZlTW5RM1NYVEJ1aFlDM2dhSTEvajI3MFlzUzZVK3kwMUJwTlQ0Sy9aM255M2QvS1FaRGduUXltRkNxQ3JHVURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU0LCJhZHZTZWNyZXRLZXkiOiJma3BLOTVhYVJIMitxVDJ6WTBFQTRBcEljc05rcXBaS0o5QUwwRjVuN3VRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc1NzE1MzA1MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzRjU3Rjc2MjA1OTVFMTg2MzVFQjIzRUQwMThDNENDMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUyMjI3NzY4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3NTcxNTMwNTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTdEQjFGMkZERDJFNzBGQ0IxNDNGRTg3RkU5NEQyRkUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MjIyNzc2OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMmxNYWVyaDdUOFMwQTNDcWpxRzM4dyIsInBob25lSWQiOiI0NTUxYjdmYy1kNzEwLTRhYzQtYjQ2MC04YjU1NGYwNDRkZWEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVBTK3NKQlJ2N0NqbUMyci93Uk55cjhrSGVrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdjeGVkdWtmZ2hSc3B4eGJNWC9FZThQWk55UT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJGUkVERVpSQSIsIm1lIjp7ImlkIjoiMjU0NzU3MTUzMDUyOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiaWNlcyIsImxpZCI6IjgxODQ5ODEyNTI5MTc4OjJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOYmRsUEVGRUtXL3c4TUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIxU1dWd29uQnNuaTdQa05xMVhQMjdKUXNCSWZVZWJ0eFVCZTRESm5xdWdBPSIsImFjY291bnRTaWduYXR1cmUiOiJTNGl4cXozdjF6bmNhcllzQ2VySXZFNTN5M0tJZGhPRGNHMG5ZMzRNSTVCZFc2TzN5Zk9TZjN5eEw2cGp4MWNyKzY4OUdnWjNrVjNOR1FrSE5KVmVBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWWQ3azBobGUwUEtqU0xTVFlFcWFjbC9wakwzS21UVlBlSUZ0Z0VDamc5VHdpSjdoeHFnRUhobVM2blJSZ1Nvd1IrU0hwT0VLaU9IY09UNHMzU25oQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NTcxNTMwNTI6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkVWxsY0tKd2JKNHV6NURhdFZ6OXV5VUxBU0gxSG03Y1ZBWHVBeVo2cm9BIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTIyMjc3NjMsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLZTkifQ===="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐅𝚪𝚵𝐂𝐘𝚩𝚵𝚪 𝚳𝐃",
  author: process.env.PACK_AUTHER || "FRECYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FRECYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "FRECYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "FRECYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
