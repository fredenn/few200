import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/song.actions';
export interface SongEntity {
  id: string;
  title: string;
  artist: string;
  album: string;
}

export interface SongState extends EntityState<SongEntity> {

}

export const adapter = createEntityAdapter<SongEntity>();

const initialState = adapter.getInitialState();
// const initialState: SongState = {
//   ids: ['1', '2'],
//   entities: {
//     1: { id: '1', title: 'Row Row Row Your boat', artist: 'Anon', album: 'Annoying Kids Songs' }
//   }
// }

const reducerFunction = createReducer(
  initialState,
  on(actions.loadSongsSucceeded, (s, a) => adapter.setAll(a.payload, s))
);

export function reducer(state: SongState = initialState, action: Action): SongState {
  return reducerFunction(state, action);
}
