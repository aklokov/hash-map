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
function populateMap(map, selector, items) {
    items.forEach(item => map[selector(item)] = item);
    return map;
}
function toStringMap(items, selector) {
    return populateMap(stringMap(), getSelector(selector), items);
}
exports.toStringMap = toStringMap;
function toNumberMap(items, selector) {
    return populateMap(numberMap(), getSelector(selector), items);
}
exports.toNumberMap = toNumberMap;
function toMap(items, selector) {
    return populateMap(map(), getSelector(selector), items);
}
exports.toMap = toMap;
function populateLookup(map, selector, items) {
    items.forEach(item => {
        const key = selector(item);
        const list = map[key] || (map[key] = []);
        list.push(item);
    });
    return map;
}
function toStringLookup(items, selector) {
    return populateLookup(stringMap(), getSelector(selector), items);
}
exports.toStringLookup = toStringLookup;
function toNumberLookup(items, selector) {
    return populateLookup(numberMap(), getSelector(selector), items);
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