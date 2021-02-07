import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ofType} from 'redux-observable';
import {Observable} from 'rxjs';
import {map, withLatestFrom} from 'rxjs/operators';
import {Foo} from '../../services/network/foo/models';
import {RootStoreType} from '../rootReducer';
import {MyEpic} from '../store';

type FooReducer = {
  globalValue: [Foo];
};

const initialState: any = {
  globalValue: [],
};

const fooSlice = createSlice({
  name: 'foo',
  initialState,
  reducers: {
    getFoo: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
  },
});

const fooEpic: MyEpic = (
  action$: Observable<PayloadAction<undefined>>,
  state$: Observable<RootStoreType>,
) =>
  action$.pipe(
    ofType(fooActions.getFoo.type),
    withLatestFrom(state$),
    map(([action, state]) => {
      console.log(state);
      //console.log(`fooEpic: I am reacting to ${state.foo.globalValue}`);

      // Epics are a stream of actions-in, actions-out
      return {type: 'useless_action'};
    }),
  );

export const fooReducer = fooSlice.reducer;
export const fooActions = fooSlice.actions;
export const fooEpics = [fooEpic];
