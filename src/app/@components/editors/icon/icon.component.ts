import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() rowData: any;
  @Output() iconClick: EventEmitter<any> = new EventEmitter<any>();

  constructor( ) { }

  ngOnInit(): void {
  }

  openInNewTab() {
    
    this.iconClick.emit(this.rowData);
  }

}
