"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRandomID = void 0;
const core_1 = require("@serenity-js/core");
exports.GetRandomID = {
    from: (lr) => core_1.Question.about(`ksaldakldakmlsd ${lr}`, actor => actor.answer(lr).then((array) => {
        return getRandomItemFrom(array).id.toString();
    }))
};
function getRandomItemFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
//# sourceMappingURL=GetRandomID.js.map