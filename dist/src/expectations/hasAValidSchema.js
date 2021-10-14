"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasAValidSchema = void 0;
const assertions_1 = require("@serenity-js/assertions");
const validator = require('is-my-json-valid');
function hasAValidSchema(expected) {
    return assertions_1.Expectation.thatActualShould('match with schema', expected)
        .soThat((body, schema) => {
        const validate = validator(schema, { verbose: true });
        return validate(body);
    });
}
exports.hasAValidSchema = hasAValidSchema;
//# sourceMappingURL=hasAValidSchema.js.map