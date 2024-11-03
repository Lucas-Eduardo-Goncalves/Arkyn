import { formatJsonObject } from "./formatJsonObject";
function formatJsonString(jsonString) {
    try {
        const jsonObject = JSON.parse(jsonString);
        return formatJsonObject(jsonObject, 0);
    }
    catch (error) {
        console.error("Invalid JSON string:", error);
        return "";
    }
}
export { formatJsonString };
