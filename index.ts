const deepl = require("deepl-node");
const dotenv = require("dotenv");
const fs = require('fs/promises');

dotenv.config();

const authKey = process.env.API_KEY || ""; // Replace with your key
const translator = new deepl.Translator(authKey);

async function readFileAsync() {
    try {
        const data = await fs.readFile('./resource/target.srt', 'utf8');
        const result = await translator.translateText(data, null, 'ko');
        console.log(result.text);
    } catch (err) {
        throw err;
    }
}

readFileAsync();

