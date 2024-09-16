import { regex } from "../validations/regex";
function formatBrazilianDateToDate(brazilianData) {
    if (regex.DATE.test(brazilianData) === false)
        throw new Error("Invalid date format");
    const [day, month, year] = brazilianData.split("/").map(Number);
    const formattedDate = `${year}-${month}-${day}`;
    return new Date(formattedDate);
}
export { formatBrazilianDateToDate };
