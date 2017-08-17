"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isFunction_1 = require("./isFunction");
function getSelector(selector) {
    return isFunction_1.isFunction(selector) ? selector : item => item[selector];
}
const map = createMap();
function createMap() {
    const result = {};
    for (var prop of Object.getOwnPropertyNames(Object.prototype)) {
        result[prop] = undefined;
    }
    return result;
}
function toStringMap(items, selector) {
    const s = getSelector(selector);
    const result = stringMap();
    items.forEach(item => result[s(item)] = item);
    return result;
}
exports.toStringMap = toStringMap;
function toNumberMap(items, selector) {
    const s = getSelector(selector);
    const result = numberMap();
    items.forEach(item => result[s(item)] = item);
    return result;
}
exports.toNumberMap = toNumberMap;
function toStringLookup(items, selector) {
    const s = getSelector(selector);
    const result = stringMap();
    items.forEach(item => {
        const key = s(item);
        const list = result[key] || (result[key] = []);
        list.push(item);
    });
    return result;
}
exports.toStringLookup = toStringLookup;
function toNumberLookup(items, selector) {
    const s = getSelector(selector);
    const result = numberMap();
    items.forEach(item => {
        const key = s(item);
        const list = result[key] || (result[key] = []);
        list.push(item);
    });
    return result;
}
exports.toNumberLookup = toNumberLookup;
function stringMap() {
    return Object.assign({}, map);
}
exports.stringMap = stringMap;
function numberMap() {
    return Object.assign({}, map);
}
exports.numberMap = numberMap;
function objectToStringMap(src) {
    return Object.assign({}, map, src);
}
exports.objectToStringMap = objectToStringMap;
function objectToNumberMap(src) {
    return Object.assign({}, map, src);
}
exports.objectToNumberMap = objectToNumberMap;
//# sourceMappingURL=toMap.js.map