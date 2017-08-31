"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ref_1 = require("./ref");
function populateMap(map, key, items) {
    if (Array.isArray(items)) {
        items.forEach(item => map[key(item)] = item);
    }
    return map;
}
function toStringMap(items, key) {
    return populateMap(Object.assign({}, ref_1.mapObj), key, items);
}
exports.toStringMap = toStringMap;
function toNumberMap(items, key) {
    return populateMap(Object.assign({}, ref_1.mapObj), key, items);
}
exports.toNumberMap = toNumberMap;
function toMap(items, key) {
    return populateMap(Object.assign({}, ref_1.mapObj), key, items);
}
exports.toMap = toMap;
function map() {
    return Object.assign({}, ref_1.mapObj);
}
exports.map = map;
function stringMap() {
    return Object.assign({}, ref_1.mapObj);
}
exports.stringMap = stringMap;
function numberMap() {
    return Object.assign({}, ref_1.mapObj);
}
exports.numberMap = numberMap;
function objectToMap(src) {
    return Object.assign({}, ref_1.mapObj, src);
}
exports.objectToMap = objectToMap;
function objectToStringMap(src) {
    return Object.assign({}, ref_1.mapObj, src);
}
exports.objectToStringMap = objectToStringMap;
function objectToNumberMap(src) {
    return Object.assign({}, ref_1.mapObj, src);
}
exports.objectToNumberMap = objectToNumberMap;
//# sourceMappingURL=toMap.js.map