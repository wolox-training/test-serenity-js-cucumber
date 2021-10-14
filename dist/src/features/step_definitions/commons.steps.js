"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const rest_1 = require("@serenity-js/rest");
const assertions_1 = require("@serenity-js/assertions");
const tasks_1 = require("../../tasks");
(0, cucumber_1.When)('{actor} log in the application as an {}', (actor, type) => actor.attemptsTo(tasks_1.Login.as(type)));
(0, cucumber_1.Given)('{actor} is logged in the application as an {}', (actor, type) => actor.attemptsTo(tasks_1.Login.as(type)));
(0, cucumber_1.Then)('{pronoun} should get a token and the user id to use that', (actor) => actor.attemptsTo(assertions_1.Ensure.that(rest_1.LastResponse.header('authorization'), (0, assertions_1.not)((0, assertions_1.equals)(""))), assertions_1.Ensure.that(rest_1.LastResponse.body(), (0, assertions_1.property)('user_id', (0, assertions_1.not)((0, assertions_1.equals)(0))))));
//# sourceMappingURL=commons.steps.js.map