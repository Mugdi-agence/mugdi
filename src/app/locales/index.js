import en from "./en.json";
import fr from "./fr.json";

const dictionaries = { en, fr };

export function getContent(lang) {
    return dictionaries[lang] ?? dictionaries.en;
}