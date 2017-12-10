"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("./create");
function lookup(array, keySelector, valSelector) {
    const result = create_1.create();
    if (!array) {
        return result;
    }
    if (valSelector) {
        for (let item of array) {
            const key = keySelector(item);
            const list = result[key] || (result[key] = []);
            list.push(valSelector(item));
        }
    }
    else {
        for (let item of array) {
            const key = keySelector(item);
            const list = result[key] || (result[key] = []);
            list.push(item);
        }
    }
    return result;
}
exports.lookup = lookup;
//# sourceMappingURL=lookup.js.map