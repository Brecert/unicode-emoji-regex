function regex({ raw: texts }, ...insertions) {
    const derivedFlags = new Set();
    const regex1 = [];
    for (let i = 0; i < insertions.length; i++) {
        const insertion = insertions[i];
        [
            ...insertion.flags
        ].forEach((flag) => derivedFlags.add(flag));
        regex1.push(texts[i], `(?:${insertion.source})`);
    }
    regex1.push(texts[texts.length - 1]);
    return (flags) => {
        if (!flags) {
            flags = [
                ...derivedFlags
            ].join("");
        }
        return new RegExp(regex1.join(""), flags);
    };
}
const EMOJI_CHARACTER1 = /\p{Emoji}/u;
const DEFAULT_EMOJI_PRESENTATION_CHARACTER1 = /\p{Emoji_Presentation}/u;
const DEFAULT_TEXT_PRESENTATION_CHARACTER1 = /\P{Emoji_Presentation}/u;
const TEXT_PRESENTATION_SELECTOR1 = /\u{FE0E}/u;
const TEXT_PRESENTATION_SEQUENCE1 = regex `${EMOJI_CHARACTER1}${TEXT_PRESENTATION_SELECTOR1}`();
const EMOJI_PRESENTATION_SELECTOR1 = /\u{FE0F}/u;
const EMOJI_PRESENTATION_SEQUENCE1 = regex `${EMOJI_CHARACTER1}${EMOJI_PRESENTATION_SELECTOR1}`();
const EMOJI_MODIFIER1 = /\p{Emoji_Modifier}/u;
const EMOJI_MODIFIER_BASE1 = /\p{Emoji_Modifier_Base}/u;
const EMOJI_MODIFIER_SEQUENCE1 = regex `${EMOJI_MODIFIER_BASE1}${EMOJI_MODIFIER1}`();
const REGIONAL_INDICATOR1 = /\p{Regional_Indicator}/u;
const EMOJI_FLAG_SEQUENCE1 = regex `${REGIONAL_INDICATOR1}${REGIONAL_INDICATOR1}`();
const TAG_BASE1 = regex `${EMOJI_PRESENTATION_SEQUENCE1}|${EMOJI_MODIFIER_SEQUENCE1}|${EMOJI_CHARACTER1}`();
const TAG_SPEC1 = /[\u{E0020}-\u{E007E}]+/u;
const TAG_END1 = /\u{E007F}/u;
const EMOJI_TAG_SEQUENCE1 = regex `${TAG_BASE1}${TAG_SPEC1}${TAG_END1}`();
const EMOJI_KEYCAP_SEQUENCE1 = /[0-9#*]\u{FE0F}\u{20E3}/u;
const EMOJI_CORE_SEQUENCE1 = regex `${EMOJI_FLAG_SEQUENCE1}|${EMOJI_MODIFIER_SEQUENCE1}|${EMOJI_KEYCAP_SEQUENCE1}|${EMOJI_PRESENTATION_SEQUENCE1}`();
const EMOJI_ZWJ_ELEMENT1 = regex `${EMOJI_MODIFIER_SEQUENCE1}|${EMOJI_PRESENTATION_SEQUENCE1}|${EMOJI_CHARACTER1}`();
const ZWJ1 = /\u{200d}/u;
const EMOJI_ZWJ_SEQUENCE1 = regex `${EMOJI_ZWJ_ELEMENT1}(?:${ZWJ1}${EMOJI_ZWJ_ELEMENT1})+`();
const EMOJI_SEQUENCE1 = regex `${EMOJI_TAG_SEQUENCE1}|${EMOJI_ZWJ_SEQUENCE1}|${EMOJI_CORE_SEQUENCE1}`();
export { EMOJI_CHARACTER1 as EMOJI_CHARACTER };
export { DEFAULT_EMOJI_PRESENTATION_CHARACTER1 as DEFAULT_EMOJI_PRESENTATION_CHARACTER };
export { DEFAULT_TEXT_PRESENTATION_CHARACTER1 as DEFAULT_TEXT_PRESENTATION_CHARACTER };
export { TEXT_PRESENTATION_SELECTOR1 as TEXT_PRESENTATION_SELECTOR };
export { TEXT_PRESENTATION_SEQUENCE1 as TEXT_PRESENTATION_SEQUENCE };
export { EMOJI_PRESENTATION_SELECTOR1 as EMOJI_PRESENTATION_SELECTOR };
export { EMOJI_PRESENTATION_SEQUENCE1 as EMOJI_PRESENTATION_SEQUENCE };
export { EMOJI_MODIFIER1 as EMOJI_MODIFIER };
export { EMOJI_MODIFIER_BASE1 as EMOJI_MODIFIER_BASE };
export { EMOJI_MODIFIER_SEQUENCE1 as EMOJI_MODIFIER_SEQUENCE };
export { REGIONAL_INDICATOR1 as REGIONAL_INDICATOR };
export { EMOJI_FLAG_SEQUENCE1 as EMOJI_FLAG_SEQUENCE };
export { TAG_BASE1 as TAG_BASE };
export { TAG_SPEC1 as TAG_SPEC };
export { TAG_END1 as TAG_END };
export { EMOJI_TAG_SEQUENCE1 as EMOJI_TAG_SEQUENCE };
export { EMOJI_KEYCAP_SEQUENCE1 as EMOJI_KEYCAP_SEQUENCE };
export { EMOJI_CORE_SEQUENCE1 as EMOJI_CORE_SEQUENCE };
export { EMOJI_ZWJ_ELEMENT1 as EMOJI_ZWJ_ELEMENT };
export { ZWJ1 as ZWJ };
export { EMOJI_ZWJ_SEQUENCE1 as EMOJI_ZWJ_SEQUENCE };
export { EMOJI_SEQUENCE1 as EMOJI_SEQUENCE };
