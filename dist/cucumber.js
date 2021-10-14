"use strict";
const ENVIRONMENT = process.env.NODE_ENV || 'development';
if (ENVIRONMENT !== 'production') {
    require('dotenv').config();
}
module.exports = {
    default: `
        --publish-quiet
        --require=src/features/**/*.ts
        --require-module=ts-node/register
        --format=@serenity-js/cucumber
        --world-parameters={"baseApiUrl":"${process.env.baseURL}"}
    `,
};
//# sourceMappingURL=cucumber.js.map