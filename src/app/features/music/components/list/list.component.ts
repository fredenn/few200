import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SongListItem } from '../../models';
import { MusicState, selectSongListItems } from '../../reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  songs$!: Observable<SongListItem[]>;
  constructor(private store: Store<MusicState>) { }

  ngOnInit(): void {
    this.songs$ = this.store.select(selectSongListItems);
  }

}
