export default function categoriesReducer(state = {}, action) {
  switch (action.type) {
    case 'ADD_BOOK': return {};
    case 'REMOVE_BOOK': return {};
    default: return state;
  }
}

export function checkStatus() {
  return { type: 'CHECK_STATUS' };
}
