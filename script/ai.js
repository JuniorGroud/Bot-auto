const axios = require('axios');

const Prefixes = [
  '/ai',
  'bot',
  'salut',
  '+ai',
  'hum',
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("⚪TOMOURA く悔 🟢 \n.....................\n 𝒔𝒂𝒍𝒖𝒕 𝒂𝒍𝒍𝒆𝒛-𝒚 𝒑𝒐𝒔𝒆́ 𝒗𝒐𝒕𝒓𝒆 𝒒𝒖𝒆𝒔𝒕𝒊𝒐𝒏 🇨🇮  ");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: `🟢TOMOURA く悔 ⚪
 
     ━━━━━━ - ━━━━━━



${answer}



     ━━━━━━ - ━━━━━━ `,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
