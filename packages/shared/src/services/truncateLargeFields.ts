function truncateLargeFields(jsonString: string, maxLength = 1000): string {
  function truncateValue(key: string, value: any): any {
    if (typeof value === "string" && value.length > maxLength) {
      return `To large information: field as ${value.length} characters`;
    }
    return value;
  }

  function recursiveTruncate(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map(recursiveTruncate);
    } else if (obj !== null && typeof obj === "object") {
      return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [
          key,
          truncateValue(key, recursiveTruncate(value)),
        ])
      );
    }
    return obj;
  }

  try {
    const parsedJson = JSON.parse(jsonString);
    const truncatedJson = recursiveTruncate(parsedJson);
    return JSON.stringify(truncatedJson);
  } catch (error) {
    throw new Error("Invalid JSON string");
  }
}

export { truncateLargeFields };
