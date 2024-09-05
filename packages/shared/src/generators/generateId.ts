import { v4, v7 } from "uuid";

function hexToBin(hex: string) {
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

function generateId(type: "text" | "binary") {
  return {
    v4: uuidV4()[type],
    v7: uuidV7()[type],
  };
}

export { generateId };
