export function toTitleCase(strToTransform: string, textToReplace: string): string {
    const arr = strToTransform.split(textToReplace);
    const titleCasedArr = arr.map(str => str[0].toUpperCase() + str.substring(1));
    return titleCasedArr.join(" ");
}

export function removeExtension(strToTransform: string): string {
    const extensionIndex = strToTransform.lastIndexOf(".");
    return strToTransform.substring(0, extensionIndex);
}