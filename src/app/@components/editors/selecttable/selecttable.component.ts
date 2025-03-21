import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'ngx-selecttable',
  templateUrl: './selecttable.component.html',
  styleUrls: ['./selecttable.component.scss']
})
export class SelecttableComponent implements OnInit {

  @Input() typeslist: any;
  @Input() rowData: any;
  @Input() select: string = '';

  //@Output() changestatus = new EventEmitter();
  text: string;
  constructor() { }

  ngOnInit() {
    this.initialize();
  }

  public initialize(){
    this.text = this.select;
  }

    //#region Metodos Privados
    public selectiontype(selected: any): void {
      console.log(selected);
      //this.changestatus.emit(selected);
      
    }
  
    //#endregion

}
