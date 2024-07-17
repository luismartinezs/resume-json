export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export function isSubarray(arr, subarr) {
  return subarr.every((item) => arr.includes(item));
}

export function filterBySkill(items, skillList) {
  return items.filter(({ skills }) => skills&& skills.length > 0 && isSubarray(skills.map(slugify), skillList));
}
