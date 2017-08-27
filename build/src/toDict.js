"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ref_1 = require("./ref");
function populateDict(map, key, val, items) {
    items.forEach(item => map[key(item)] = val(item));
    return map;
}
function toStringDict(items, key, val) {
    return populateDict(Object.assign({}, ref_1.mapObj), key, val, items);
}
exports.toStringDict = toStringDict;
function toNumberDict(items, key, val) {
    return populateDict(Object.assign({}, ref_1.mapObj), key, val, items);
}
exports.toNumberDict = toNumberDict;
//# sourceMappingURL=toDict.js.map