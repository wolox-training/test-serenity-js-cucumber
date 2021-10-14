import { Question } from '@serenity-js/core';
interface Dic {
    [key: string]: any;
}
export declare const GetApiPath: {
    for: (urlEncodedExpression: Question<string>) => Question<Promise<string>>;
};
export declare const GetApiPathFor: Dic;
export {};
