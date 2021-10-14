"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actors = void 0;
const core_1 = require("@serenity-js/core");
const rest_1 = require("@serenity-js/rest");
const tiny_types_1 = require("tiny-types");
class Actors {
    baseApiUrl;
    constructor(baseApiUrl) {
        this.baseApiUrl = baseApiUrl;
        (0, tiny_types_1.ensure)('apiUrl', baseApiUrl, (0, tiny_types_1.isNotBlank)());
    }
    prepare(actor) {
        return actor.whoCan(rest_1.CallAnApi.at(this.baseApiUrl), core_1.TakeNotes.usingAnEmptyNotepad());
    }
}
exports.Actors = Actors;
//# sourceMappingURL=Actors.js.map