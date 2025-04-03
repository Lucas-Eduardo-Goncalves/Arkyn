import { regex } from "../validations/regex";

function formatDateHour(date: string, hour: string = "00:00") {
  if (regex.HOUR.test(hour) === false) throw new Error("Invalid hour format");

  const dateHour = new Date(date);
  const [hours, minutes] = hour.split(":").map(Number);

  dateHour.setUTCHours(hours);
  dateHour.setUTCMinutes(minutes);

  return dateHour;
}

export { formatDateHour };
