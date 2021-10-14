"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuysBook = void 0;
const assertions_1 = require("@serenity-js/assertions");
const core_1 = require("@serenity-js/core");
const rest_1 = require("@serenity-js/rest");
const questions_1 = require("../questions");
const routes_1 = require("../constants/routes");
const modules_1 = require("../constants/modules");
exports.BuysBook = {
    byID: (id) => core_1.Task.where(`#actor buys an album by id`, rest_1.Send.a(rest_1.PostRequest.to(routes_1.BUYALBUMS_PATH.replace(/{idAlbum}/, id))), assertions_1.Ensure.that(rest_1.LastResponse.status(), (0, assertions_1.equals)(201))),
    fromTheList: (albumsListResponse) => core_1.Task.where('#actor buys an album from the last response', rest_1.Send.a(rest_1.PostRequest.to(questions_1.GetApiPathFor[modules_1.ALBUMS].toBuyUsing(questions_1.GetRandomID.from(albumsListResponse)))), assertions_1.Ensure.that(rest_1.LastResponse.status(), (0, assertions_1.equals)(201))),
};
//# sourceMappingURL=BuysBook.js.map