"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestEvaluation = void 0;
const assertions_1 = require("@serenity-js/assertions");
const core_1 = require("@serenity-js/core");
const rest_1 = require("@serenity-js/rest");
const questions_1 = require("../questions");
exports.RequestEvaluation = {
    ofASingleExpression: (expression) => core_1.Task.where(`#actor requests evaluation of "${expression}"`, rest_1.Send.a(rest_1.GetRequest.to(questions_1.GetApiPath.for(questions_1.UrlEncodedExpression.from(expression)))), assertions_1.Ensure.that(rest_1.LastResponse.status(), (0, assertions_1.equals)(200))),
    ofMultipleExpressions: (expressions) => core_1.Task.where(`#actor requests evaluation of multiple expressions`, rest_1.Send.a(rest_1.PostRequest.to('/v4').with({ expr: expressions })), assertions_1.Ensure.that(rest_1.LastResponse.status(), (0, assertions_1.equals)(200))),
};
//# sourceMappingURL=RequestEvaluation.js.map