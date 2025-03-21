import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToggleComponent } from '../../../../@components/editors/toggle/toggle.component';


@Component({
  selector: 'ngx-manageprocuracy',
  templateUrl: './manageprocuracy.component.html',
  styleUrls: ['./manageprocuracy.component.scss']
})
export class ManageprocuracyComponent implements OnInit {

  public settings = {
    hideSubHeader:true,
    actions: {      
      delete: false,
      edit:false,
      add:false

    },
   
    columns: {     
      Rol: {
        title: 'Rol',
        type: 'list',
        editor: {
          type: 'list',
          config:{list: [
            { title: 'Administrador', value: 'Administrador' },
            { title: 'Consultor', value: 'Consultor' },
            { title: 'Informador', value: 'Informador' },
            { title: 'Reporte', value: 'Reporte' },
          
          ]}
        },
        filter: false,
        
      },
      AccesoProcuraduria: {
        title: 'Acceso Procuraduría',
        type: 'custom',
        renderComponent: ToggleComponent,
        editor: {
          type: 'checkbox'
        },
        filter: false,
        width: '3%'
      },
      FechaActivacion: {
        title: 'Fecha Activación',
        type: 'string',
        filter: false,
      },

      FechaDesactivacion: {
        title: 'Fecha Desactivación',
        type: 'string',
        filter: false,
      },
    }
  }

  public settingsUsers = {
    hideSubHeader:true,
    actions: {      
      delete: false,
      edit:false,
      add:false

    },
   
    columns: {     
      Rol: {
        title: 'Rol',
        type: 'list',
        editor: {
          type: 'list',
          config:{list: [
            { title: 'Administrador', value: 'Administrador' },
            { title: 'Consultor', value: 'Consultor' },
            { title: 'Informador', value: 'Informador' },
            { title: 'Reporte', value: 'Reporte' },
          
          ]}
        },
        filter: false,
        
      },

      NDocumento:{
        title:'Numero Documento',
        type:'string'
      },
      Nombres:{
        title:'Nombres',
        type:'string'
      },
      Apellidos:{
        title:'Apellidos',
        type:'string'
      },
      Usuario:{
        title:'Usuario',
        type:'string'
      },
      Estado: {
        title: 'Estado',
        type: 'custom',
        renderComponent: ToggleComponent,
        editor: {
          type: 'checkbox'
        },
        filter: false,
        width: '3%'
      },
      AccesoProcuraduria: {
        title: 'Acceso Procuraduría',
        type: 'custom',
        renderComponent: ToggleComponent,
        editor: {
          type: 'checkbox'
        },
        filter: false,
        width: '3%'
      },
      FechaActivacion: {
        title: 'Fecha Activación',
        type: 'string',
        filter: false,
      },

      FechaDesactivacion: {
        title: 'Fecha Desactivación',
        type: 'string',
        filter: false,
      },
    }
  }



  data = [
    {

      Rol: 'Administrador',
      AccesoProcuraduria: true,
      FechaActivacion:'1/07/2020 9:57:05 a. m.',
      FechaDesactivacion:''      

    }
  ];
  dataUsers = [
    {

      Rol: 'Administrador',
      NDocumento:'7876545',
      Nombres:'Alejandro',
      Apellidos:'Castellanos',
      Usuario:'c.castellanos',
      Estado:true,
      AccesoProcuraduria: true,
      FechaActivacion:'1/07/2020 9:57:05 a. m.',
      FechaDesactivacion:''      

    }
  ];
  public lang:string;
    constructor(private translate: TranslateService) {
    }

 
  ngOnInit() {
    this.traductorlocal();
  }
  public traductorlocal(){
    this.lang = localStorage.getItem ('lang');
    let currentlang = this.translate.currentLang
    currentlang=this.lang
    this.translate.use(currentlang);
  }
  
  public onUserRowSelect(event) {
    var selectedRows = event.selected;
  }
}
