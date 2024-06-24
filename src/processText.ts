export function minifierText(text: string): string {
    const textArray : string[] = text.split('\n');
    let finalText : string = "";

    for (let i = 2, listLength = textArray.length; i < listLength; i += 4) {
        finalText += textArray[i] + '\n';
    }

    console.log("Number of characters saved : " + (text.length - finalText.length));

    return finalText;
}

export function mergeText(org: string, text: any): string {
    const textArray : string[] = text.split('\n');
    const orgArray : string[] = org.split('\n');
    let finalText : string = "";
    
    for (let i = 2, j = 0, oLen = orgArray.length, tLen = textArray.length; i < oLen && j < tLen; i += 4, ++j) {
        finalText += orgArray[i - 2] + '\n';
        finalText += orgArray[i - 1] + '\n';
        finalText += textArray[j] + '\n\n';
    }

    return finalText;
}