module.exports = {
 config: {
	 name: "prefix",
         alias: ["chiyoko","sonu"]
	 version: "1.4",
	 author: "Tokodori_Frtiz",//remodified by Bhuban
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `
𝗔𝗦𝗦𝗔𝗟𝗔𝗠𝗨~𝗔𝗟𝗔𝗜𝗞𝗨𝗠\n 𝗠𝗬 𝗣𝗥𝗘𝗙𝗜𝗫 𝗜𝗦 [ # ]\n\n
𝗦𝗢𝗠𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗧𝗛𝗔𝗧 𝗠𝗔𝗬 𝗛𝗘𝗟𝗣 𝗬𝗢𝗨:
➥ #help [number of page] -> see commands
➥ #sim [message] -> talk to bot
➥ #callad [message] -> report any problem encountered
➥ #help [command] -> information and usage of command\n\nHave fun using it enjoy!❤️\nBot Developer: https://www.facebook.com/swordigo.swordslush`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/LJhJJ4E.jpeg")
 });
 }
 }
	 }
