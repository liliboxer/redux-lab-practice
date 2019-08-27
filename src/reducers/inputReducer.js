import { CREATE_TITLE, CREATE_SUBTITLE } from '../actions/inputActions';

const initialState = {
  title: '',
  subtitle: ''
};

export default function inputReducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_TITLE:
      return { ...state, title: action.payload };
    case CREATE_SUBTITLE:
      return { ...state, subtitle: action.payload };
    default:
      return state;
  }
}
