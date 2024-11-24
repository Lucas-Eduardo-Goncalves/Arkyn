function generateColorByString(string) {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    var red = (hash & 0xff0000) >> 16;
    var green = (hash & 0x00ff00) >> 8;
    var blue = hash & 0x0000ff;
    var redHex = red.toString(16).padStart(2, "0");
    var greenHex = green.toString(16).padStart(2, "0");
    var blueHex = blue.toString(16).padStart(2, "0");
    return "#" + redHex + greenHex + blueHex;
}
export { generateColorByString };
