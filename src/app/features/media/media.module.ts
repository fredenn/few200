import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './components/media/media.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    MediaComponent,
    EntryComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MediaModule { }
