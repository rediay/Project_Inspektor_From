import {Component, OnInit} from '@angular/core';
import {CustomServerDataSource} from "../../../../utils/custom-server.data-source";
import {PaginationFilter} from "../../../../utils/pagination-filter";
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {RiskProfileVariablesFormComponent} from "./components/risk-profile-variables-form/risk-profile-variables-form.component";
import {NbDialogService, NbWindowService} from "@nebular/theme";
import {ParameterizeVariableService} from "../../backend/common/services/parameterize-variable.service";
import {CustomIconSmartTableCellComponent} from "../../../../@components/editors/custom-icon-smart-table-cell/custom-icon-smart-table-cell.component";

@Component({
    selector: 'ngx-risk-profile-variables',
    templateUrl: './risk-profile-variables.component.html',
    styleUrls: ['./risk-profile-variables.component.scss']
})
export class RiskProfileVariablesComponent implements OnInit {

    constructor(private router: Router,
                private windowService: NbWindowService,
                private dialogService: NbDialogService,
                private parameterizeVariableService: ParameterizeVariableService) {
        this.source = this.parameterizeVariableService.getRiskProfileVariableServerDataSource();
    }

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
            categories: {
                title: 'Categorías',
                type: 'custom',
                filter: false,
                renderComponent: CustomIconSmartTableCellComponent,
                onComponentInitFunction: (instance) => {
                    instance.save.subscribe(row => {
                        this.onOpenCategoryVariables(row)
                    });
                }
            },
        },
    };

    ngOnInit(): void {
        this.searchTextChanged
            // .debounceTime(250)
            // .distinctUntilChanged()
            .subscribe((query) => {
                this.source.setSearchQuery(query);
            });
    }

    onEdit($event: any) {
        const variable = $event.data;
        /*const windowRef = this.windowService.open(RiskProfileVariablesFormComponent, {context: {
                title: 'Editar variable de perfiles de riesgo cali',
                riskProfileVariables: variable
            }});

        windowRef.onClose.subscribe((result) => {
            console.log('result', result);
        })*/

        const dialogRef = this.dialogService.open(RiskProfileVariablesFormComponent, {
            context: {
                riskProfileVariables: variable,
            },
        });

        dialogRef.onClose.subscribe((result) => {
            this.source.refresh()
        })
    }

    onOpenCategoryVariables(data: any) {
        this.router.navigate([`/pages/third-party-profiling/parameterize-variables/category-variables/${data.id}`]);
    }

    searchRiskProfileVariables($event: any) {
        this.searchTextChanged.next($event.target.value);
    }
}
