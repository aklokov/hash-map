"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isFunction_1 = require("./isFunction");
function getSelector(selector) {
    return isFunction_1.isFunction(selector) ? selector : item => item[selector];
}
const mapObj = createMap();
function createMap() {
    const result = {};
    for (var prop of Object.getOwnPropertyNames(Object.prototype)) {
        result[prop] = undefined;
    }
    return result;
}
function populateMap(map, key, items) {
    items.forEach(item => map[key(item)] = item);
    return map;
}
function populateDict(map, key, val, items) {
    items.forEach(item => map[key(item)] = val(item));
    return map;
}
function populateLookup(map, key, items) {
    items.forEach(item => {
        const k = key(item);
        const list = map[k] || (map[k] = []);
        list.push(item);
    });
    return map;
}
function toStringDict(items, key, val) {
    return populateDict(stringMap(), getSelector(key), getSelector(val), items);
}
exports.toStringDict = toStringDict;
function toNumberDict(items, key, val) {
    return populateDict(numberMap(), getSelector(key), getSelector(val), items);
}
exports.toNumberDict = toNumberDict;
function toStringMap(items, key) {
    return populateMap(stringMap(), getSelector(key), items);
}
exports.toStringMap = toStringMap;
function toNumberMap(items, key) {
    return populateMap(numberMap(), getSelector(key), items);
}
exports.toNumberMap = toNumberMap;
function toMap(items, key) {
    return populateMap(map(), getSelector(key), items);
}
exports.toMap = toMap;
function toStringLookup(items, key) {
    return populateLookup(stringMap(), getSelector(key), items);
}
exports.toStringLookup = toStringLookup;
function toNumberLookup(items, key) {
    return populateLookup(numberMap(), getSelector(key), items);
}
exports.toNumberLookup = toNumberLookup;
function map() {
    return Object.assign({}, mapObj);
}
exports.map = map;
function stringMap() {
    return Object.assign({}, mapObj);
}
exports.stringMap = stringMap;
function numberMap() {
    return Object.assign({}, mapObj);
}
exports.numberMap = numberMap;
function objectToMap(src) {
    return Object.assign({}, mapObj, src);
}
exports.objectToMap = objectToMap;
function objectToStringMap(src) {
    return Object.assign({}, mapObj, src);
}
exports.objectToStringMap = objectToStringMap;
function objectToNumberMap(src) {
    return Object.assign({}, mapObj, src);
}
exports.objectToNumberMap = objectToNumberMap;
//# sourceMappingURL=toMap.js.map