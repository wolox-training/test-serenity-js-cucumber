"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const assertions_1 = require("@serenity-js/assertions");
const rest_1 = require("@serenity-js/rest");
const tasks_1 = require("../../tasks");
(0, cucumber_1.When)('{actor} requests evaluation of {}', (actor, expression) => actor.attemptsTo(tasks_1.RequestEvaluation.ofASingleExpression(expression)));
(0, cucumber_1.Then)('{pronoun} should get {float}', (actor, expectedResult) => actor.attemptsTo(assertions_1.Ensure.that(rest_1.LastResponse.body(), (0, assertions_1.equals)(expectedResult))));
(0, cucumber_1.When)('{actor} requests evaluation of:', (actor, expressionsTable) => actor.attemptsTo(tasks_1.RequestEvaluation.ofMultipleExpressions(column('expression', expressionsTable))));
(0, cucumber_1.Then)('{pronoun} should get following results:', (actor, expectedResultsTable) => actor.attemptsTo(assertions_1.Ensure.that(rest_1.LastResponse.body(), (0, assertions_1.property)('result', (0, assertions_1.equals)(column('expected_result', expectedResultsTable))))));
function column(columnName, dataTable) {
    return dataTable.hashes().map(entry => entry[columnName]);
}
//# sourceMappingURL=expressions.steps.js.map