function createSlug(string: string) {
  let slug = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  slug = slug
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

  slug = slug.replace(/-{2,}/g, "-");

  slug = slug.replace(/^-+|-+$/g, "");

  return slug;
}

export { createSlug };
