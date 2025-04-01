type Format = "DD/MM/YYYY" | "MM-DD-YYYY" | "YYYY-MM-DD";

type Config = {
  minYear?: number;
  maxYear?: number;
};

function validateDate(date: string, format: Format, config?: Config): boolean {
  let day: string, month: string, year: string;

  const minYear = config?.minYear || 0;
  const maxYear = config?.maxYear || 3000;

  if (format === "DD/MM/YYYY") {
    const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!dateRegex.test(date)) return false;
    [, day, month, year] = date.match(dateRegex) || [];
  } else if (format === "MM-DD-YYYY") {
    const dateRegex = /^(\d{2})-(\d{2})-(\d{4})$/;
    if (!dateRegex.test(date)) return false;
    [, month, day, year] = date.match(dateRegex) || [];
  } else if (format === "YYYY-MM-DD") {
    const dateRegex = /^(\d{4})-(\d{2})-(\d{2})$/;
    if (!dateRegex.test(date)) return false;
    [, year, month, day] = date.match(dateRegex) || [];
  } else {
    throw new Error("Invalid date format");
  }

  const dayNum = parseInt(day, 10);
  const monthNum = parseInt(month, 10);
  const yearNum = parseInt(year, 10);

  if (dayNum < 1 || dayNum > 31) return false;
  if (monthNum < 1 || monthNum > 12) return false;

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (monthNum === 2) {
    const isLeapYear =
      (yearNum % 4 === 0 && yearNum % 100 !== 0) || yearNum % 400 === 0;
    if (dayNum > (isLeapYear ? 29 : 28)) return false;
  } else if (dayNum > daysInMonth[monthNum - 1]) {
    return false;
  }

  if (yearNum < minYear || yearNum > maxYear) return false;

  const isValidDate =
    new Date(yearNum, monthNum - 1, dayNum).getDate() === dayNum;

  return isValidDate;
}

export { validateDate };
