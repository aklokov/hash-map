"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ref_1 = require("./ref");
function populateDict(map, key, val, items) {
    if (Array.isArray(items)) {
        items.forEach(item => map[key(item)] = val(item));
    }
    return map;
}
function toStringDict(items, key, val) {
    return populateDict(ref_1.createMapObj(), key, val, items);
}
exports.toStringDict = toStringDict;
function toNumberDict(items, key, val) {
    return populateDict(ref_1.createMapObj(), key, val, items);
}
exports.toNumberDict = toNumberDict;
//# sourceMappingURL=toDict.js.map