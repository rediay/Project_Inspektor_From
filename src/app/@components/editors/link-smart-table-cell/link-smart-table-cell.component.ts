import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ViewCell} from "ng2-smart-table";

@Component({
  selector: 'ngx-link-smart-table-cell',
  templateUrl: './link-smart-table-cell.component.html',
  styleUrls: ['./link-smart-table-cell.component.scss']
})

export class LinkSmartTableCellComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}
