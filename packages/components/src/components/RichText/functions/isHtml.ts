const isHtml = (str: string): boolean => {
  const htmlRegex = /<\/?[a-z][\s\S]*>/i;
  return htmlRegex.test(str);
};

export { isHtml };
