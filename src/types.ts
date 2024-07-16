import {store} from './store';

export type Student = {
    "id": number;
    "email": string,
    "name": string,
    "sex": string,
    "specialty": string,
    "group": string,
    "color": string,
    "rating": number,
    "birthday": string,
    "avatar": string,
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type SortingType = {
    byName: boolean,
    byNameReverse: boolean, byAge: boolean, byAgeReverse: boolean, byRating: boolean, byRatingReverse: boolean
}
