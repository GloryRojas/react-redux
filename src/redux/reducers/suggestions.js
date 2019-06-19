import items from '../../data/items'
import { type as findSuggestions } from '../actions/findSuggestions';
const defaultState = [];

const reducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case (findSuggestions): {
            const regex = new RegExp(`^${payload}`, 'i');

            return items.filter(n=> regex.test(n.title));
        }
        default:
            return state;
    }
}

export default reducer;