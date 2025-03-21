import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ngx-custom-icon-smart-table-cell',
  templateUrl: './custom-icon-smart-table-cell.component.html',
  styleUrls: ['./custom-icon-smart-table-cell.component.scss']
})
export class CustomIconSmartTableCellComponent implements OnInit {

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
