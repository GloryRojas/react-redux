export const type = 'findSuggestion'; 

const findSuggestions = (text) => {
    return {
        type,
        payload: text, 
    };
};

export default findSuggestions;