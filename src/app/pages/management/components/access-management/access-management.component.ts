import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {UserManagementService} from '../../backend/common/services/user-management.service';
import {Subject} from 'rxjs';
import {PaginationFilter} from '../../../../utils/pagination-filter';
import {CustomServerDataSource} from '../../../../utils/custom-server.data-source';
import { TranslateService } from '@ngx-translate/core';
import { title } from 'process';
import { AccessService } from '../../backend/common/services/access.service';
import { Ng2SmartTableComponent } from 'ng2-smart-table';

@Component({
    selector: 'ngx-access-management',
    templateUrl: './access-management.component.html',
    styleUrls: ['./access-management.component.scss'],
})
export class AccessManagementComponent implements OnInit {
    
    public lang:string=localStorage.getItem ('lang').toUpperCase();
    public searchTextChanged = new Subject<string>();
    public users: Array<any> = [];
    public source: CustomServerDataSource;
    public search = '';
    public paginationFilter = new PaginationFilter();
    public settings;
    public mySettings = {
        actions:{
            add:false,
            delete:true,      
        },
        mode: 'external',
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmCreate: true
        },
        edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmSave: true
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },   
        columns: {
            name: {
                title: 'Nombres',
                type: 'string',
                filter: false,
            },
            createdAt: {
                title: 'Fecha de creación',
                type: 'string',
                filter: false,
                editable: false,
                addable: false,
            },    
        }, 
    
    };

    public lenguagetable = ["name","createdAt"]
    constructor(private router: Router,
                private accessService:AccessService,
                private translate: TranslateService)
    {
        this.funtionconstructor();
        
    }

    ngOnInit(): void {
        this.translatecomponent()
        this.searchTextChanged
            // .debounceTime(250)
            // .distinctUntilChanged()
            .subscribe((query) => {
                this.source.setSearchQuery(query);
        });
    }

    create() {
    this.router.navigate([`/pages/management/access/create`]);
    }

    onEdit($event: any) {
        const user = $event.data;
        this.router.navigate([`/pages/management/access/edit/${user.id}`]);
    }

    onDelete(event: any) {
        console.log(event);
        let data = event.data.id;
        this.accessService.DeleteNameAccess(data).subscribe(()=>{
            this.getAccessall();
        });
    }

    searchUser($event) {
        this.searchTextChanged.next($event.target.value);
    }

    onCreateConfirm($event){
        let data = {name:$event.newData.name}
        this.accessService.createNameAccess(data).subscribe(()=>{
            this.source.refresh();
        });
        console.log($event);
    }

    onRowSelect(event): void   {


    }
    public funtionconstructor(){
        this.getAccessall();
        /*this.source = this.AccessService.getServerDataSource();
        this.translatecomponent()
        this.settings = Object.assign({}, this.mySettings)*/
    }

    public translatecomponent(){
        this.lang = localStorage.getItem ('lang');
        let currentlang = this.translate.currentLang
        currentlang=this.lang
        this.translate.use(currentlang);
        this.refeshtitlestable();
    }

    public refeshtitlestable(){
        for (let index = 0; index < this.lenguagetable.length; index++) {
            this.translate.stream("GenericTable."+this.lenguagetable[index]).subscribe((res: string) => {
                this.mySettings.columns[this.lenguagetable[index]].title = res
                this.settings = Object.assign({}, this.mySettings);
            })
        }
    }

    public getAccessall(){
        this.accessService.getByCompany().subscribe((result)=>{
            this.source = result
            this.translatecomponent()
            this.settings = Object.assign({}, this.mySettings)
        })
    }
}
