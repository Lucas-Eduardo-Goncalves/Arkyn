import { v4, v7 } from "uuid";
function hexToBin(hex) {
    hex = hex.replace(/-/g, "");
    const buffer = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
        buffer[i / 2] = parseInt(hex.substring(i, i + 2), 16);
    }
    return buffer;
}
function uuidV4() {
    const uuid = v4();
    return { text: uuid, binary: hexToBin(uuid) };
}
function uuidV7() {
    const uuid = v7();
    return { text: uuid, binary: hexToBin(uuid) };
}
function generateId(type, format) {
    if (type === "text" && format === "v4")
        return uuidV4().text;
    if (type === "binary" && format === "v4")
        return uuidV4().binary;
    if (type === "text" && format === "v7")
        return uuidV7().text;
    if (type === "binary" && format === "v7")
        return uuidV7().binary;
    throw new Error("Invalid type or format");
}
export { generateId };
