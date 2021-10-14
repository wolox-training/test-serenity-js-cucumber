"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetApiPathFor = exports.GetApiPath = void 0;
const core_1 = require("@serenity-js/core");
const modules_1 = require("../constants/modules");
exports.GetApiPath = {
    for: (urlEncodedExpression) => core_1.Question.about(`/v4?expr endpoint for ${urlEncodedExpression}`, actor => actor.answer(urlEncodedExpression).then(expression => `/v4?expr=${expression}`))
};
exports.GetApiPathFor = {
    [modules_1.ALBUMS]: {
        toBuyUsing: (randomId) => core_1.Question.about(`albums endpoint `, actor => actor.answer(randomId).then(id => `/albums/${id}`))
    },
    [modules_1.USERS]: {
        toListPurchased: () => core_1.Question.about(`purchased books routes by users`, actor => actor.answer(core_1.Note.of('user_id')).then((user_id) => `/users/${user_id}/albums`))
    }
};
//# sourceMappingURL=GetApiPath.js.map