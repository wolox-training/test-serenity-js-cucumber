import { Question } from '@serenity-js/core';
import { AlbumsResponse } from '../@types';
export declare const GetRandomID: {
    from: (lr: Question<AlbumsResponse[]>) => Question<Promise<string>>;
};
