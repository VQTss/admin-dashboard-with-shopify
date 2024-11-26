
import createStore from 'teaful';
import { produce } from 'immer';

const initialState = {
  auth: {
    isAuthenticated: false,
    user: null,
  },
};

export const { useStore } = createStore(initialState, {
  immer: produce,
});
