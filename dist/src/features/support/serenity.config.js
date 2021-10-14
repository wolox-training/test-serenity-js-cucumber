"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const console_reporter_1 = require("@serenity-js/console-reporter");
const core_1 = require("@serenity-js/core");
const __1 = require("../..");
(0, cucumber_1.BeforeAll)(function () {
    (0, core_1.configure)({
        crew: [
            console_reporter_1.ConsoleReporter.withDefaultColourSupport(),
            core_1.ArtifactArchiver.storingArtifactsAt(__dirname, '../../target/site/serenity'),
        ]
    });
});
(0, cucumber_1.Before)(function () {
    (0, core_1.engage)(new __1.Actors(this.parameters.baseApiUrl));
});
(0, cucumber_1.defineParameterType)({
    regexp: /[A-Z][a-z]+/,
    transformer(name) {
        return (0, core_1.actorCalled)(name);
    },
    name: 'actor',
});
(0, cucumber_1.defineParameterType)({
    regexp: /he|she|they|his|her|their/,
    transformer() {
        return (0, core_1.actorInTheSpotlight)();
    },
    name: 'pronoun',
});
//# sourceMappingURL=serenity.config.js.map