import { regex } from "../validations/regex";
function formatDateHour(date, hour) {
    if (regex.HOUR.test(hour) === false)
        throw new Error("Invalid hour format");
    const dateHour = new Date(date);
    const [hours, minutes] = hour.split(":").map(Number);
    dateHour.setUTCHours(hours);
    dateHour.setUTCMinutes(minutes);
    return dateHour.toISOString();
}
export { formatDateHour };
