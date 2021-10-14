import { Actor, Cast } from '@serenity-js/core';
export declare class Actors implements Cast {
    private readonly baseApiUrl;
    constructor(baseApiUrl: string);
    prepare(actor: Actor): Actor;
}
