import { createAction, props } from "@ngrx/store";
import { SongEntity } from "../reducers/songs.reducer";

// initiator (command)
export const loadSongs = createAction(
  '[music] load the songs'
);


// success
export const loadSongsSucceeded = createAction(
  '[music] loading the songs succeeded',
  props<{ payload: SongEntity[] }>()
);



export const songCreated = createAction(
  '[music] song created',
  props<{ payload: NewSongInfo }>()
);
export const tempSongCreated = createAction(
  '[music] temporary song created',
  props<{ payload: SongEntity }>()
);

export const songAdded = createAction(
  '[music] song add from api',
  props<{ temporaryId: string, payload: SongEntity }>()
);

interface NewSongInfo {
  title: string;
  artist: string;
  album: string;
}
