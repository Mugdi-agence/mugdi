import en from '../locales/en.json';
import fr from '../locales/fr.json';

const resources = { en, fr };

function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

export function getT(lang) {
    const dict = resources[lang] || resources.en;

    function t(key, options) {
        const value = getNestedValue(dict, key);
        if (value === undefined) return key;

        // Supporte l'interpolation {{year}} comme dans footer.copyright
        if (typeof value === 'string' && options) {
            return value.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, k) => options[k] ?? '');
        }

        // Si la valeur est un objet/array (ex: t('projects.items', { returnObjects: true })),
        // elle est retournée telle quelle, comme le fait i18next
        return value;
    }

    return { t };
}