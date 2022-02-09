export function toCamel(string) {
    return string.replace(/([-_/][a-z])/gi, ($1) => $1.toUpperCase().replace(/\/|-|_/g, ''));
}

export function toSnake(string) {
    return string.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`).replace(/\/|-/g, '_');
}

export default {toSnake, toCamel};