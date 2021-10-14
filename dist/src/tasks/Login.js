"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const assertions_1 = require("@serenity-js/assertions");
const core_1 = require("@serenity-js/core");
const rest_1 = require("@serenity-js/rest");
const routes_1 = require("../constants/routes");
const config_1 = require("../config");
const hasAValidSchema_1 = require("../expectations/hasAValidSchema");
exports.Login = {
    as: (type) => core_1.Task.where(`#actor login with the credentials of an ${type}`, rest_1.Send.a(rest_1.PostRequest.to(routes_1.LOGIN_PATH).with(config_1.config[type])), assertions_1.Ensure.that(rest_1.LastResponse.status(), (0, assertions_1.equals)(200)), assertions_1.Ensure.that(rest_1.LastResponse.body(), (0, hasAValidSchema_1.hasAValidSchema)(require('../schemas/login.schema.json'))), rest_1.ChangeApiConfig.setHeader('Authorization', rest_1.LastResponse.header('authorization')), core_1.TakeNote.of(core_1.Transform.the(rest_1.LastResponse.body(), body => body.user_id)).as('user_id'))
};
//# sourceMappingURL=Login.js.map