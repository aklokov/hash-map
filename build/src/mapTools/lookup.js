"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function lookup(array, keySelector, valSelector) {
    const result = new Map();
    if (valSelector) {
        for (let item of array) {
            const key = keySelector(item);
            let list = result.get(key);
            if (!list) {
                result.set(key, list = []);
            }
            list.push(valSelector(item));
        }
    }
    else {
        for (let item of array) {
            const key = keySelector(item);
            let list = result.get(key);
            if (!list) {
                result.set(key, list = []);
            }
            list.push(item);
        }
    }
    return result;
}
exports.lookup = lookup;
//# sourceMappingURL=lookup.js.map