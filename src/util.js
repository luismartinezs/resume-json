export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export function isSubarray(arr, subarr) {
  return subarr.every((item) => arr.includes(item));
}

function doSkillsMatch(skills, skillList) {
  return (
    skills && skills.length > 0 && isSubarray(skills.map(slugify), skillList)
  );
}

export function filterBySkill(items, skillList) {
  return items.filter(({ skills }) => doSkillsMatch(skills, skillList));
}

export function starItemBySkill(items, skillList) {
  return items.map((item) => {
    if (doSkillsMatch(item.skills, skillList)) {
      return { ...item, star: true };
    }
    return item;
  });
}
