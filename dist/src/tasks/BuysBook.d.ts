import { Question, Task } from '@serenity-js/core';
import { AlbumsResponse } from '../@types';
export declare const BuysBook: {
    byID: (id: string) => Task;
    fromTheList: (albumsListResponse: Question<AlbumsResponse[]>) => Task;
};
