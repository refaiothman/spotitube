import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  templateUrl: './edit-playlist.dialog.component.html'
})
export class EditPlaylistDialogComponent {

  public name: string;

  constructor(private dialogRef: MdDialogRef<EditPlaylistDialogComponent>) {
  }

  public onOk(): void {
    this.dialogRef.close(this.name);
  }
}
