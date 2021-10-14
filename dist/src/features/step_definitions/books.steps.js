"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const assertions_1 = require("@serenity-js/assertions");
const core_1 = require("@serenity-js/core");
const rest_1 = require("@serenity-js/rest");
const tasks_1 = require("../../tasks");
(0, cucumber_1.When)('{pronoun} requests the purchased books', (actor) => actor.attemptsTo((0, tasks_1.GetPurchasedBooks)()));
(0, cucumber_1.When)('{pronoun} buys some book of the list of availables', (actor) => actor.attemptsTo((0, tasks_1.GetAlbums)(), tasks_1.BuysBook.fromTheList(rest_1.LastResponse.body())));
(0, cucumber_1.Then)('{pronoun} should see a list with all his purchased books', (actor) => actor.attemptsTo(assertions_1.Ensure.that(rest_1.LastResponse.body(), (0, assertions_1.containItemsWhereEachItem)((0, assertions_1.property)('user_id', (0, assertions_1.equals)(core_1.Note.of('user_id')))))));
//# sourceMappingURL=books.steps.js.map