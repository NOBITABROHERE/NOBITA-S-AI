const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
config: {
  name: "ownerv3",
  aurthor:"Bhuban", 
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "admin",
  guide: "{pn}"
},

  onStart: async function ({ api, event }) {
  try {
    const ownerInfo = {
      name: '𝗥𝗔𝗞𝗜𝗕 𝗛𝗢𝗦𝗦𝗔𝗜𝗡 ♡',
      gender: '𝗠𝗔𝗟𝗘',
      age: '𝟭𝟳',
      Facebook: 'https://www.facebook.com/profile.php?id=100086029508571',
      status: '𝗦𝗜𝗡𝗚𝗟𝗘',
      nickname: '𝗥𝗮𝗸𝗶𝗯𝗯𝗮'
    };

    const bold = 'https://i.imgur.com/n6aiyt9.jpeg'

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_video.png');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const response = `
𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 💝

𝐍𝐀𝐌𝐄: ${ownerInfo.name}

𝐆𝐄𝐍𝐃𝐄𝐑: ${ownerInfo.gender}

𝐀𝐆𝐄: ${ownerInfo.age}

𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 : ${ownerInfo.Facebook}

𝐒𝐓𝐀𝐓𝐔𝐒: ${ownerInfo.status}

𝐍𝐈𝐂𝐊𝐍𝐀𝐌𝐄: ${ownerInfo.nickname}
`;


    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('🚀', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
},
};
