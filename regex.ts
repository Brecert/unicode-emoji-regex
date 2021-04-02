export function regex(
  { raw: texts }: TemplateStringsArray,
  ...insertions: RegExp[]
) {
  const derivedFlags = new Set();
  const regex: string[] = [];
  for (let i = 0; i < insertions.length; i++) {
    const insertion = insertions[i];
    [...insertion.flags].forEach((flag) => derivedFlags.add(flag));
    regex.push(texts[i], `(?:${insertion.source})`);
  }
  regex.push(texts[texts.length - 1]);
  return (flags?: string) => {
    if (!flags) {
      flags = [...derivedFlags].join("");
    }
    return new RegExp(regex.join(""), flags);
  };
}
