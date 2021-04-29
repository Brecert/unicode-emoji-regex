"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMOJI_SEQUENCE = exports.EMOJI_ZWJ_SEQUENCE = exports.ZWJ = exports.EMOJI_ZWJ_ELEMENT = exports.EMOJI_CORE_SEQUENCE = exports.EMOJI_KEYCAP_SEQUENCE = exports.EMOJI_TAG_SEQUENCE = exports.TAG_END = exports.TAG_SPEC = exports.TAG_BASE = exports.EMOJI_FLAG_SEQUENCE = exports.REGIONAL_INDICATOR = exports.EMOJI_MODIFIER_SEQUENCE = exports.EMOJI_MODIFIER_BASE = exports.EMOJI_MODIFIER = exports.EMOJI_PRESENTATION_SEQUENCE = exports.EMOJI_PRESENTATION_SELECTOR = exports.TEXT_PRESENTATION_SEQUENCE = exports.TEXT_PRESENTATION_SELECTOR = exports.DEFAULT_TEXT_PRESENTATION_CHARACTER = exports.DEFAULT_EMOJI_PRESENTATION_CHARACTER = exports.EMOJI_CHARACTER = exports.regex = void 0;
function regex({ raw: texts }, ...insertions) {
    const derivedFlags = new Set();
    const regex = [];
    for (let i = 0; i < insertions.length; i++) {
        const insertion = insertions[i];
        [...insertion.flags].forEach((flag) => derivedFlags.add(flag));
        regex.push(texts[i], `(?:${insertion.source})`);
    }
    regex.push(texts[texts.length - 1]);
    return (flags) => {
        if (!flags) {
            flags = [...derivedFlags].join("");
        }
        return new RegExp(regex.join(""), flags);
    };
}
exports.regex = regex;
// 1.4.1 Emoji Characters
exports.EMOJI_CHARACTER = /\p{Emoji}/u;
// 1.4.2 Emoji Presentation
exports.DEFAULT_EMOJI_PRESENTATION_CHARACTER = /\p{Emoji_Presentation}/u;
exports.DEFAULT_TEXT_PRESENTATION_CHARACTER = /\P{Emoji_Presentation}/u;
// 1.4.3 Emoji and Text Presentation Sequences
exports.TEXT_PRESENTATION_SELECTOR = /\u{FE0E}/u;
exports.TEXT_PRESENTATION_SEQUENCE = regex `${exports.EMOJI_CHARACTER}${exports.TEXT_PRESENTATION_SELECTOR}`();
exports.EMOJI_PRESENTATION_SELECTOR = /\u{FE0F}/u;
exports.EMOJI_PRESENTATION_SEQUENCE = regex `${exports.EMOJI_CHARACTER}${exports.EMOJI_PRESENTATION_SELECTOR}`();
// 1.4.4 Emoji Modifiers
exports.EMOJI_MODIFIER = /\p{Emoji_Modifier}/u;
exports.EMOJI_MODIFIER_BASE = /\p{Emoji_Modifier_Base}/u;
exports.EMOJI_MODIFIER_SEQUENCE = regex `${exports.EMOJI_MODIFIER_BASE}${exports.EMOJI_MODIFIER}`();
// 1.4.5 Emoji Sequences
exports.REGIONAL_INDICATOR = /\p{Regional_Indicator}/u;
exports.EMOJI_FLAG_SEQUENCE = regex `${exports.REGIONAL_INDICATOR}${exports.REGIONAL_INDICATOR}`();
exports.TAG_BASE = regex `${exports.EMOJI_PRESENTATION_SEQUENCE}|${exports.EMOJI_MODIFIER_SEQUENCE}|${exports.EMOJI_CHARACTER}`();
exports.TAG_SPEC = /[\u{E0020}-\u{E007E}]+/u;
exports.TAG_END = /\u{E007F}/u;
exports.EMOJI_TAG_SEQUENCE = regex `${exports.TAG_BASE}${exports.TAG_SPEC}${exports.TAG_END}`();
exports.EMOJI_KEYCAP_SEQUENCE = /[0-9#*]\u{FE0F}\u{20E3}/u;
// EMOJI_CORE_SEQUENCE DOES NOT HAVE ${EMOJI_CHARACTER} DUE TO NOT BEING WHAT THE USER (I) WANTS
// PLEASE OPEN AN ISSUE IF YOU NEED THIS FIXED
exports.EMOJI_CORE_SEQUENCE = regex `${exports.EMOJI_FLAG_SEQUENCE}|${exports.EMOJI_MODIFIER_SEQUENCE}|${exports.EMOJI_KEYCAP_SEQUENCE}|${exports.EMOJI_PRESENTATION_SEQUENCE}`();
exports.EMOJI_ZWJ_ELEMENT = regex `${exports.EMOJI_MODIFIER_SEQUENCE}|${exports.EMOJI_PRESENTATION_SEQUENCE}|${exports.EMOJI_CHARACTER}`();
exports.ZWJ = /\u{200d}/u;
exports.EMOJI_ZWJ_SEQUENCE = regex `${exports.EMOJI_ZWJ_ELEMENT}(?:${exports.ZWJ}${exports.EMOJI_ZWJ_ELEMENT})+`();
exports.EMOJI_SEQUENCE = regex `${exports.EMOJI_TAG_SEQUENCE}|${exports.EMOJI_ZWJ_SEQUENCE}|${exports.EMOJI_CORE_SEQUENCE}`();
