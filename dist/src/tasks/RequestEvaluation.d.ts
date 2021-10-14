import { Task } from '@serenity-js/core';
export declare const RequestEvaluation: {
    ofASingleExpression: (expression: string) => Task;
    ofMultipleExpressions: (expressions: string[]) => Task;
};
