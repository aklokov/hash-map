"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("./create");
function map(array, keySelector, valSelector) {
    const result = create_1.create();
    if (!array) {
        return result;
    }
    if (valSelector) {
        for (let item of array) {
            result[keySelector(item)] = valSelector(item);
        }
    }
    else {
        for (let item of array) {
            result[keySelector(item)] = item;
        }
    }
    return result;
}
exports.map = map;
//# sourceMappingURL=map.js.map