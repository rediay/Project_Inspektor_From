import {Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ngx-management',
    templateUrl: './management.component.html',
})

export class ManagementComponent implements OnInit {
    public lang:string;
    constructor(private translate: TranslateService) {
    }

    ngOnInit(): void {
        
    this.lang = localStorage.getItem ('lang');
    let currentlang = this.translate.currentLang
    currentlang=this.lang
    this.translate.use(currentlang);
    
    }

}
