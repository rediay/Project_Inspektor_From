import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-Lists-update-certification',
  templateUrl: './Lists-update-certification.component.html',
  styleUrls: ['./Lists-update-certification.component.scss']
})
export class ListsUpdateCertificationComponent implements OnInit {
  public settings = {    
    actions:{
      add:false,
      edit:false,
      delete:false,      
        
    },
   
    columns: {
      NTipoLista: {
        title: 'N° Tipo Lista',
        type: 'number',   
        filter:false,        
        width: '3%'
     },          
      NombreTipoLista: {
        title: 'Nombre Tipo Lista',
        type: 'string',
        filter:true   
      },          
      
      RegistrosActivos: {
        title: 'Registros Activos.',
        type: 'string',                       
                
      },
      
      FechaAct: {
        title: 'Fecha Última Actualización.',
        type: 'string',                       
                
      },
      Periodicidad: {
        title: 'Periodicidad.',
        type: 'string',                       
                
      },
      RegActualizados: {
        title: 'Registros Actualizados.',
        type: 'number',                       
                
      },
    } }

  public input: string = '<input type="checkbox"></input>';

  data = [
    
  ];
  source: LocalDataSource = new LocalDataSource();
  constructor() { }

  onDeleteConfirm(event): void {
    if (window.confirm('Esta seguro de eliminar el registro')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {
  }
  public onUserRowSelect(event) {
    var selectedRows = event.selected;
  }
}