"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function map(array, key, val) {
    const result = new Map();
    if (!array) {
        return result;
    }
    if (val) {
        for (let item of array) {
            result.set(key(item), val(item));
        }
    }
    else {
        for (let item of array) {
            result.set(key(item), item);
        }
    }
    return result;
}
exports.map = map;
//# sourceMappingURL=map.js.map