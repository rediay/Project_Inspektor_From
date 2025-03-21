import {Component, Input, OnInit} from '@angular/core';
import {NbCheckboxModule} from '@nebular/theme';
import {ViewCell} from 'ng2-smart-table';
import {Cell} from 'ng2-smart-table';

@Component(
    {
        selector:'nb-custom-input',
        templateUrl: 'input.component.html',
    },
)

export class InputComponent implements OnInit {

    @Input() value: any;
    @Input() Isdisabled: any;
    // @Input() value: any;
    @Input() rowData: any;
    disabled: boolean;
    val: string;


    constructor() {
    }

    ngOnInit() {
        this.disabled = this.Isdisabled;

            this.val = this.value;
        console.log(this.value);
        //console.log(this.rowData);
    }

    // changeBoolean() {
    //     this.checked = !this.checked;
    //     //console.log(this.value);
    //
    // }

    // onChange(event: any) {
    //
    //     this.value = event.target.checked ? true : false;
    //     console.log(event.target);
    //
    // }
}
