import { ActionTypes } from '../const';

const initialState = {
  visibleKYC:false
};

export default function MenuState (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_PAGE: {
      return Object.assign({}, state, {
     
        visibleKYC = !visibleKYC

      });
    }
    default:
      return state;
  }
}
