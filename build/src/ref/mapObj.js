"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createMap() {
    const result = {};
    for (var prop of Object.getOwnPropertyNames(Object.prototype)) {
        result[prop] = undefined;
    }
    return result;
}
exports.mapObj = createMap();
//# sourceMappingURL=mapObj.js.map