import { Component, ElementRef, ViewChild } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-query-detailedview',
  templateUrl: './query-detailedview.component.html',
  styleUrls: ['./query-detailedview.component.scss']
})
export class QueryDetailedviewComponent {
  detaileInfo: any;
  // urlImagen = 'https://inspektor.datalaft.com:84/541643.gif';
  @ViewChild('imageElement', { static: false }) imageElement: ElementRef;

  constructor( private dialogRef: NbDialogRef<QueryDetailedviewComponent>) {
  }

  closeModal() {
    this.dialogRef.close();
  }

  toggleImageSize() {
    const imageElement = document.querySelector('.left-card');

    if (imageElement) {
      imageElement.classList.toggle('fullscreen-image');
    }
  }

}
