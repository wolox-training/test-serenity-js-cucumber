"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAlbums = void 0;
const assertions_1 = require("@serenity-js/assertions");
const core_1 = require("@serenity-js/core");
const rest_1 = require("@serenity-js/rest");
const routes_1 = require("../constants/routes");
const hasAValidSchema_1 = require("../expectations/hasAValidSchema");
const getAlbums_schema_json_1 = __importDefault(require("../schemas/getAlbums.schema.json"));
const GetAlbums = () => core_1.Task.where(`#actor get list of albums`, rest_1.Send.a(rest_1.GetRequest.to(routes_1.ALBUMS_PATH)), assertions_1.Ensure.that(rest_1.LastResponse.status(), (0, assertions_1.equals)(200)), assertions_1.Ensure.that(rest_1.LastResponse.body(), (0, hasAValidSchema_1.hasAValidSchema)(getAlbums_schema_json_1.default)));
exports.GetAlbums = GetAlbums;
//# sourceMappingURL=GetAlbums.js.map