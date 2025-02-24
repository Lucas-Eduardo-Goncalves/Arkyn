import { regex } from "../validations/regex";
function formatBrazilianDateHour(date, hour) {
    if (regex.HOUR.test(hour) === false)
        throw new Error("Invalid hour format");
    const [day, month, year] = date.split("/").map(Number);
    const dateHour = new Date(`${year}-${month}-${day}`);
    const [hours, minutes] = hour.split(":").map(Number);
    dateHour.setUTCHours(hours);
    dateHour.setUTCMinutes(minutes);
    return dateHour;
}
export { formatBrazilianDateHour };
