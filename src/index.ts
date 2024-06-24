import * as deepl from 'deepl-node';
import dotenv from "dotenv";
import fs from 'fs/promises';
import {minifierText, mergeText} from './processText';

dotenv.config();

const authKey = process.env.API_KEY || ""; // Replace with your key
const translator = new deepl.Translator(authKey);

async function readFileAsync() {
    try {
        const data: string = await fs.readFile('./resource/target.srt', 'utf8');
        const mData: string = minifierText(data);
        const tData: any = await translator.translateText(mData, 'ja', 'ko'); // (data, from, to)
        const result: string = mergeText(data, tData.text);

        fs.writeFile('./resource/output.srt', result, 'utf8'); // Saved file path
    } catch (err) {
        throw err;
    }
}

readFileAsync();