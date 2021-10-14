"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlEncodedExpression = void 0;
const core_1 = require("@serenity-js/core");
const querystring_1 = require("querystring");
exports.UrlEncodedExpression = {
    from: (expression) => core_1.Question.about(`URL-encoded expression: ${expression}`, actor => {
        return (0, querystring_1.escape)(removeWhitespace(expression));
    }),
};
function removeWhitespace(text) {
    return text.replace(/\s/g, '');
}
//# sourceMappingURL=UrlEncodedExpression.js.map