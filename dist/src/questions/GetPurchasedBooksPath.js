"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPurchasedBooksPath = void 0;
const core_1 = require("@serenity-js/core");
const routes_1 = require("../constants/routes");
exports.GetPurchasedBooksPath = core_1.Question.about(`purchased books routes by users`, actor => actor.answer(core_1.Note.of('user_id')).then((user_id) => routes_1.BOOKS_PATH.replace(/{user_id}/, user_id)));
//# sourceMappingURL=GetPurchasedBooksPath.js.map