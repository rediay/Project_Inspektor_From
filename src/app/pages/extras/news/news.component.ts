import {Component, OnInit} from '@angular/core';
import {PaginationFilter} from "../../../utils/pagination-filter";
import {NewsService} from "../backend/common/services/news.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {News} from "../interfaces/news";
import {NbToastrService} from "@nebular/theme";
import {NewsPaginationFilter} from "../interfaces/news-pagination-filter";
import {ApiPaginationResponse} from "../../../utils/api-pagination-response";
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'ngx-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

    constructor(private newsService: NewsService,
                private toastrService: NbToastrService,
                private fb: FormBuilder) {
    }

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

    // get newsTypeId() {
    //     return this.formGroup.get('newsTypeId');
    // }

    /*loadNext(cardData) {
      if (cardData.loading) { return; }

      cardData.loading = true;
      cardData.placeholders = new Array(this.pageSize);
      this.newsService.load(cardData.pageToLoadNext, this.pageSize)
          .subscribe(nextNews => {
            cardData.placeholders = [];
            cardData.news.push(...nextNews);
            cardData.loading = false;
            cardData.pageToLoadNext++;
          });
    }*/


    ngOnInit(): void {
        this.initForm();
        this.loadFilters();
    }

    initForm() {
        this.formGroup = this.fb.group({
            title: this.fb.control(null),
            categoryId: this.fb.control(null),
            countryId: this.fb.control(null),
            rangeDate: this.fb.control(null),
            //newsTypeId: this.fb.control(''),
        });
    }

    loadFilters() {
        this.newsService.getSearchFilters()
            .subscribe(response => {
                const data = response.data;
                this.newFilters = {...data};
            }, error => {
                this.toastrService.danger('', error, {
                    icon: '',
                });
            });
    }

    loadNext(cardData) {

        if (cardData.loading) {
            return;
        }

        /*console.log('pagination.pageNumber', this.pagination?.pageNumber);
        console.log('pagination.from', this.pagination?.from);*/

        if (this.pagination != null && this.pagination.pageNumber == this.pagination.from) {
            console.log('entra aqui');
            cardData.loading = false;
            return;
        }

        cardData.loading = true;
        cardData.placeholders = new Array(this.pageSize);
        this.paginationFilter.typeId=1;
        this.newsService.getNews(this.paginationFilter).subscribe(response => {
            this.paginationFilter.pageNumber++;
            this.pagination = response;

            cardData.placeholders = [];
            cardData.news.push(...response.data);
            cardData.loading = false;
            cardData.pageToLoadNext = this.paginationFilter.pageNumber;

            /*console.log('cardData', cardData);*/

        }, error => {
            console.log(error);
        })
    }

    search() {        
        const filter = this.formGroup.value;
        console.log('filter', filter);
        const rangeDate = filter.rangeDate;

        this.paginationFilter.title = filter.title
        this.paginationFilter.categoryId = filter.categoryId
        this.paginationFilter.countryId = filter.countryId
        this.paginationFilter.startDate = rangeDate != null && rangeDate.start != undefined ? rangeDate.start : null;
        this.paginationFilter.endDate = rangeDate != null && rangeDate.end != undefined ? rangeDate.end : null;

        const cardData = this.firstCard;
        cardData.loading = false;

        console.log('firstCard', this.firstCard);

        this.loadNext(cardData)

        /*this.newsService.getNews(this.paginationFilter).subscribe(response => {
            this.pagination = response;
        }, error => {
            console.log(error);
        })
*/
        /*this.firstCard.loading = true;
        this.firstCard.placeholders = new Array(this.pageSize);

        this.newsService.getNews(this.paginationFilter).subscribe(response => {
            this.paginationFilter.pageNumber++;
            this.pagination = response;

            this.firstCard.placeholders = [];
            this.firstCard.news.push(...response.data);
            this.firstCard.loading = false;
            this.firstCard.pageToLoadNext = this.paginationFilter.pageNumber;

            /!*console.log('cardData', cardData);*!/

        }, error => {
            console.log(error);
        })*/
    }
    exportExcel()
    {
        debugger;
        const filter = this.formGroup.value;
        console.log('filter', filter);
        const rangeDate = filter.rangeDate;

        this.paginationFilter.title = filter.title
        this.paginationFilter.categoryId = filter.categoryId!=null ?filter.categoryId:0;
        this.paginationFilter.countryId = filter.countryId!=null ?filter.countryId:0;
        this.paginationFilter.startDate = rangeDate != null && rangeDate.start != undefined ? rangeDate.start : null;
        this.paginationFilter.endDate = rangeDate != null && rangeDate.end != undefined ? rangeDate.end : null;
        console.log(this.paginationFilter);

      this.newsService.getExcel(this.paginationFilter).subscribe(
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
          filename = `Noticias${''}.xlsx`;
        }
        return filename
      }
}
