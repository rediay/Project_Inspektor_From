import {Component, OnInit} from '@angular/core';
import {NotificationSentService} from '../../backend/common/services/notification-sent.service';
import {PaginationFilter} from '../../../../utils/pagination-filter';
import {CustomServerDataSource} from '../../../../utils/custom-server.data-source';
import {NbWindowService} from "@nebular/theme";
import {NotificationDetailComponent} from "./components/notification-detail/notification-detail.component";
import {CustomIconSmartTableCellComponent} from "../../../../@components/editors/custom-icon-smart-table-cell/custom-icon-smart-table-cell.component";
import { HttpResponse } from '@angular/common/http';
import {Subject} from "rxjs";

@Component({
    selector: 'ngx-sent',
    templateUrl: './sent.component.html',
    styleUrls: ['./sent.component.scss'],
})
export class SentComponent implements OnInit {

    constructor(private notificationSentService: NotificationSentService,
                private windowService: NbWindowService
    ) {
        this.source = this.notificationSentService.getServerDataSource();
    }

    filters = {};
    query: string;
    startDate = '';
    endDate = '';
    search: any;
    notifications: Array<any> = [];
    searchTextChanged = new Subject<string>();
    paginationFilter = new PaginationFilter();
    source: CustomServerDataSource;
    settings = {
        mode: 'external',
        actions: {
            add: false,
            edit: false,
            delete: false,
        },
        columns: {
            subject: {
                title: 'Asunto',
                type: 'string',
                filter: false,
            },
            to: {
                title: 'Para',
                type: 'string',
                filter: false,
            },
            createdAt: {
                title: 'Fecha Envío',
                type: 'string',
                filter: false,
            },
            userName: {
                title: 'Nombre usuario',
                type: 'string',
                filter: false,
            },
            user: {
                title: 'Usuario',
                type: 'string',
                filter: false,
            },
            detail: {
                title: 'Detalle',
                type: 'custom',
                filter: false,
                renderComponent: CustomIconSmartTableCellComponent,
                onComponentInitFunction: (instance) => {
                    instance.save.subscribe(row => {
                        this.onDetail(row)
                    });
                }
            },
        },
    };

    ngOnInit() {
        
        
        
        this.searchTextChanged
            // .debounceTime(250)
            .subscribe((query) => {
                this.query = query
                this.filters = {
                    query: query,
                    startDate:this.startDate !=''?new Date(this.startDate).toISOString().split('T')[0]:'',
                    endDate: this.endDate!=''?new Date(this.endDate).toISOString().split('T')[0]:'',
                }
                console.log(this.filters);
        
                 
                this.source.setSearchFilters(this.filters);
            });
    }

    searchNotifications($event) {        
        this.searchTextChanged.next($event.target.value);
        
    }

    onDetail(item: any) {
        console.log(item);
        this.windowService.open(NotificationDetailComponent, {
            context: {
                title: 'Detalle',
                notificationId: item.id
            }
        });
    }
    onSearch($event) {
        let q = this.search!=undefined?this.search:'';
        this.searchTextChanged.next(q);

      }

      exportExcel()
      {
        this.paginationFilter.query = this.search!=undefined?this.search:'';
    this.paginationFilter.startDate = this.startDate !=''?new Date(this.startDate).toISOString().split('T')[0]:'',
    this.paginationFilter.endDate = this.endDate!=''?new Date(this.endDate).toISOString().split('T')[0]:'',

      this.notificationSentService.getExcel(this.paginationFilter).subscribe(
        (response: HttpResponse<Blob>) => {
            console.log(response.headers.get('content-type'));
            console.log(response);
          let filename: string = this.getFileName(response)
          let binaryData = [];
          binaryData.push(response.body);
          let downloadLink = document.createElement('a');
          downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: 'blob' }));
          downloadLink.setAttribute('download', filename);
          document.body.appendChild(downloadLink);
          downloadLink.click();
        }
      );
      }

      getFileName(response: HttpResponse<Blob>) {
        
        let filename: string;
        try {
          const contentDisposition: string = response.headers.get('content-disposition');
          const r = /(?:filename=")(.+)(?:;")/
          filename = r.exec(contentDisposition)[1];
        }
        catch (e) {
          filename = `NotMonitoreo_${''}.xlsx`;
        }
        return filename
      }
}
