"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPurchasedBooks = void 0;
const assertions_1 = require("@serenity-js/assertions");
const core_1 = require("@serenity-js/core");
const rest_1 = require("@serenity-js/rest");
const modules_1 = require("../constants/modules");
const questions_1 = require("../questions");
const GetPurchasedBooks = () => core_1.Task.where(`#actor get purchased books`, core_1.Log.the(questions_1.GetApiPathFor[modules_1.USERS].toListPurchased()), rest_1.Send.a(rest_1.GetRequest.to(questions_1.GetApiPathFor[modules_1.USERS].toListPurchased())), assertions_1.Ensure.that(rest_1.LastResponse.status(), (0, assertions_1.equals)(200)));
exports.GetPurchasedBooks = GetPurchasedBooks;
//# sourceMappingURL=GetPurchasedBooks.js.map