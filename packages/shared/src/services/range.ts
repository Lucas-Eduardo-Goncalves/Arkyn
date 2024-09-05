const normalizeRange = (
  range: number | [number, number],
  limit: number
): [number, number] => {
  if (Array.isArray(range)) return range;

  if (range >= 0) return [0, range];

  return [limit + 1 - Math.abs(range), limit];
};

const within = (range: [number, number], value: number): boolean =>
  value >= range[0] && value <= range[1];

export { normalizeRange, within };
