"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapObj = createMap();
function createMap() {
    const result = {};
    for (var prop of Object.getOwnPropertyNames(Object.prototype)) {
        result[prop] = null;
    }
    return result;
}
function createMapObj() {
    return Object.assign({}, mapObj);
}
exports.createMapObj = createMapObj;
//# sourceMappingURL=mapObj.js.map