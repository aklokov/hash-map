"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ref_1 = require("./ref");
function populateLookup(map, key, val, items) {
    if (Array.isArray(items)) {
        items.forEach(item => {
            const k = key(item);
            const list = map[k] || (map[k] = []);
            list.push(val(item));
        });
    }
    return map;
}
function toStringLookup(items, key, val) {
    return populateLookup(ref_1.createMapObj(), key, val, items);
}
exports.toStringLookup = toStringLookup;
function toNumberLookup(items, key, val) {
    return populateLookup(ref_1.createMapObj(), key, val, items);
}
exports.toNumberLookup = toNumberLookup;
//# sourceMappingURL=toLookup.js.map