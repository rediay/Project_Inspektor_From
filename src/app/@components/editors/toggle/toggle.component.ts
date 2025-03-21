import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
    selector: 'nb-toggle-status',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements ViewCell, OnInit {

    @Input() value: any;
    @Input() rowData: any;
    @Input() textData: any;

    @Output() save = new EventEmitter<any>();
    
    checked: boolean;
    text: string;

    constructor() {
    }

    ngOnInit() {
        
        this.checked = this.value;
        this.text = !this.textData ? "" : this.textData;
    }

    changeBoolean() {
        this.checked = !this.checked;
        //console.log(this.value);

    }

    onChange(event: any) {

        // this.value = event.target.checked ? true : false;
        // const val = {value: this.value, row: this.rowData};
        
        // this.changestatus.emit(this.value);
        // console.log(val);
        this.save.emit(this.rowData);

    }

    ChangeStatus(event: any){
        const val = {value: this.value, row: this.rowData};
        this.save.emit(val);
    }

    onClick() {
        // this.save.emit(this.rowData);
    }
    
}
