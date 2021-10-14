"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    baseURL: process.env.baseURL,
    adminUser: {
        email: process.env.adminUser,
        password: process.env.adminPass
    },
    regularUser: {
        email: process.env.regularUser,
        password: process.env.regularPass
    }
};
//# sourceMappingURL=index.js.map