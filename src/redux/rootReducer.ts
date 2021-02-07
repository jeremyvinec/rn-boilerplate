import {combineReducers} from 'redux';
import {fooReducer} from './slices/fooSlice';

export const rootReducer = combineReducers({
  foo: fooReducer,
});

export type RootStoreType = ReturnType<typeof rootReducer>;
