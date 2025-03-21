import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserManagementService} from '../../backend/common/services/user-management.service';
import {Subject} from 'rxjs';
import {PaginationFilter} from '../../../../utils/pagination-filter';
import {CustomServerDataSource} from '../../../../utils/custom-server.data-source';
import { NbToastrService } from '@nebular/theme';

@Component({
    selector: 'ngx-user-management',
    templateUrl: './user-management.component.html',
    styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {

    constructor(private router: Router, private userManagementService: UserManagementService, private toasterService: NbToastrService) {
    }

    searchTextChanged = new Subject<string>();
    users: Array<any> = [];
    source: CustomServerDataSource;
    search = '';
    paginationFilter = new PaginationFilter();
    settings = {
        actions: {
            add: false,
            delete: false
        },
        mode: 'external',
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
        },
        edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },
        columns: {
            /*id: {
                title: 'Id',
                type: 'number',
                filter: false,
            },*/
            identification: {
                title: 'Numero Documento',
                type: 'string',
                filter: false,
            },
            name: {
                title: 'Nombres',
                type: 'string',
                filter: false,
            },
            lastName: {
                title: 'Apellidos',
                type: 'string',
                filter: false,
            },
            email: {
                title: 'E-mail',
                type: 'string',
                filter: false,
            },
            createdAt: {
                title: 'Fecha de creación',
                type: 'string',
                filter: false,
            },
        },
    };

    ngOnInit(): void {
        this.getDataSource();
        this.searchText();
    }

    searchText(){
        this.searchTextChanged
        // .debounceTime(250)
        // .distinctUntilChanged()
        .subscribe((query) => {
            this.source.setSearchQuery(query);
        });        
    }

    getDataSource(){
        this.source = this.userManagementService.getServerDataSource(this.paginationFilter);
    }

    create() {
        this.router.navigate([`/pages/management/users/create`]);
    }

    onEdit($event: any) {
        const user = $event.data;
        this.router.navigate([`/pages/management/users/edit/${user.id}`]);
    }

    onDelete($event: any) {
        this.userManagementService.delete($event.data.id).subscribe(data => {
            this.toasterService.success('', `Ususario eliminado con exitoso!`, {
                icon: '',
            });
            this.getDataSource();            
        });
    }

    searchUser($event) {
        this.searchTextChanged.next($event.target.value);
    }
}
