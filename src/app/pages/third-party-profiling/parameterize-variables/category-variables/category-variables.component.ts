import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ParameterizeVariableService} from "../../backend/common/services/parameterize-variable.service";
import {CustomServerDataSource} from "../../../../utils/custom-server.data-source";
import {PaginationFilter} from "../../../../utils/pagination-filter";
import {Subject} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {NbDialogService, NbWindowService} from "@nebular/theme";
import {CategoryVariablesFormComponent} from "./components/category-variables-form/category-variables-form.component";

@Component({
    selector: 'ngx-category-variables',
    templateUrl: './category-variables.component.html',
    styleUrls: ['./category-variables.component.scss']
})
export class CategoryVariablesComponent implements OnInit {

    searchTextChanged = new Subject<string>();
    source: CustomServerDataSource;
    search = '';
    paginationFilter = new PaginationFilter();

    settings = {
        mode: 'external',
        actions: {
            add: false,
            edit: true,
            delete: false,
        },
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
            id: {
                title: 'Código',
                type: 'string',
                filter: false,
            },
            name: {
                title: 'Nombre',
                type: 'string',
                filter: false,
            },
            weight: {
                title: 'Peso',
                type: 'string',
                filter: false,
            },
        },
    };

    constructor(private location: Location,
                private route: ActivatedRoute,
                private windowService: NbWindowService,
                private dialogService: NbDialogService,
                private parameterizeVariableService: ParameterizeVariableService) {
    }

    ngOnInit(): void {
        this.searchTextChanged
            // .debounceTime(250)
            // .distinctUntilChanged()
            .subscribe((query) => {
                this.source.setSearchQuery(query);
            });
    }

    back($event: MouseEvent) {
        $event.preventDefault();
        this.location.back();
    }

    onEdit($event: any) {
        const variable = $event.data;
        //this.windowService.open(CategoryVariablesFormComponent, {title: 'Categorías de variable'});
        /*this.windowService.open(CategoryVariablesFormComponent, {
            context: {
                title: 'Categorías de variable',
                categoryVariables: variable
            }
        });*/

        const dialogRef = this.dialogService.open(CategoryVariablesFormComponent, {
            context: {
                categoryVariables: variable,
            },
        });

        dialogRef.onClose.subscribe(() => {
            this.source.refresh()
        })
    }

    onPersonTypeChange(personTypeId: any) {
        const riskProfileVariableId = this.route.snapshot.paramMap.get('id');
        this.source = this.parameterizeVariableService.getCategoryVariablesServerDataSource(+riskProfileVariableId, personTypeId)
        /*this.source = this.ge
        console.log('id', id);
        console.log('event', value);*/
    }

    searchCategoryVariables($event: any) {
        this.searchTextChanged.next($event.target.value);
    }
}
