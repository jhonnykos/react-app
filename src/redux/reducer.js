import {DISHES} from '../shared/dishes';
import {COMMENTS} from "../shared/comments";
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leaders";

export const initialState ={
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
}

// = initialState это значение по умолчанию, когда state еще не инициализирован (Первый запуск)
export const Reducer = (state = initialState, action) => {
    return state;
}