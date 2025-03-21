import { Component, Input, OnInit } from '@angular/core';
import { NbCheckboxModule } from '@nebular/theme';
import { ViewCell } from 'ng2-smart-table';
import { Cell } from 'ng2-smart-table';

@Component(
  {
    selector: 'nb-checkbox-status',templateUrl:'checkbox.component.html',   
   
  }
)
export class CheckboxComponent implements OnInit {
 
  @Input() value: any;
  @Input() rowData: any;

  checked: boolean;


  constructor() { }

  ngOnInit() {
    this.checked = this.value;
  }

  changeBoolean() {
    this.checked = !this.checked;
    //console.log(this.value);
    
  }
  onChange(event: any) {
   
    this.value = event.target.checked ? true : false;
    console.log(event.target);

  }
}
