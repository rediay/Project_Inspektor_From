import {Component, OnInit} from '@angular/core';
import {ToggleComponent} from "../../../@components/editors/toggle/toggle.component";
import {InputComponent} from "../../../@components/editors/input/input.component";
import {LocalDataSource} from "ng2-smart-table";
import {SmartTableData} from "../../../@core/interfaces/common/smart-table";
import { NewsService } from '../backend/common/services/news.service';
import { NewsPaginationFilter } from '../interfaces/news-pagination-filter';
import { News } from '../interfaces/news';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiPaginationResponse } from '../../../utils/api-pagination-response';
import { NbToastrService } from '@nebular/theme';

@Component({
    selector: 'ngx-warning-signs',
    templateUrl: './warning-signs.component.html',
    styleUrls: ['./warning-signs.component.scss']
})
export class WarningSignsComponent implements OnInit {
    firstCard = {
        news: [],
        placeholders: [],
        loading: false,
        pageToLoadNext: 1,
    };
    pageSize = 10;
    paginationFilter = new NewsPaginationFilter();
    news = [];
    newFilters: News = {};
    formGroup: FormGroup;
    pagination: ApiPaginationResponse<News[]> = null;

    get title() {
        return this.formGroup.get('title');
    }

    get categoryId() {
        return this.formGroup.get('categoryId');
    }

    get countryId() {
        return this.formGroup.get('countryId');
    }

    get rangeDate() {
        return this.formGroup.get('rangeDate');
    }
    settings = {
        actions: {
            add: false,
            edit: false,
            delete: false,
        },
        columns: {
            contentCategory: {
                title: 'Categoria',
                type: 'string',
                valuePrepareFunction: (cell, row, autoRenewal) => {

                   return cell.name;
          
                  },      
                filter: false,
            },
            title: {
                title: 'Titulo',
                type: 'string',
                filter: false,
            },
            description: {
                title: 'Detalle',
                type: 'string',
                filter: false,
            },
            source: {
                title: 'Fuente',
                type: 'string',
                filter: false,
            },
            date: {
                title: 'Fecha',
                type: 'string',
                filter: false,
            },

        },
    };
    data: any;
    source: LocalDataSource = new LocalDataSource();

    constructor( private newsService: NewsService, private fb: FormBuilder,private service: SmartTableData,private toastrService: NbToastrService,) {

    }

    ngOnInit(): void {
        this.initForm();
        this.loadFilters();
    }

    // public getAll(query?: string){
    //     this.paginationFilter.query = query;
    //     this._notificationmonitoringService.getAll(this.paginationFilter).subscribe((response:any) =>{
    //       this.source.load(response.data);      
    //     })
    //   }
    initForm() {
        this.formGroup = this.fb.group({
            title: this.fb.control(null),
            categoryId: this.fb.control(null),
            countryId: this.fb.control(null),
            rangeDate: this.fb.control(null),

            
            //newsTypeId: this.fb.control(''),
        });
        
        this.paginationFilter.typeId=2;
        this.newsService.getNews(this.paginationFilter).subscribe(response => {
            this.paginationFilter.pageNumber++;
            this.pagination = response;                        
            this.data = response.data;
            this.source = new LocalDataSource(this.data as any);            

        })
    }

    search() {        

        const filter = this.formGroup.value;
        console.log('filter', filter);
        const rangeDate = filter.rangeDate;
        this.paginationFilter.title = filter.title==""? null:filter.title;
        this.paginationFilter.categoryId = filter.categoryId
        this.paginationFilter.countryId = filter.countryId
        this.paginationFilter.startDate = rangeDate != null && rangeDate.start != undefined ? rangeDate.start : null;
        this.paginationFilter.endDate = rangeDate != null && rangeDate.end != undefined ? rangeDate.end : null;
        this.newsService.getNews(this.paginationFilter).subscribe(response => {
            this.paginationFilter.pageNumber++;
            this.pagination = response;                        
            this.data = response.data;
            this.source = new LocalDataSource(this.data as any);
            

        })

    }
    loadFilters() {
        
        this.newsService.getSearchFilters()
            .subscribe(response => {
                const data = response.data;                
                this.newFilters = {...data};
                console.log(this.newFilters);
            }, error => {
                this.toastrService.danger('', error, {
                    icon: '',
                });
            });
    }

}
