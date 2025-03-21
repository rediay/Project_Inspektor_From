/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NbTokenService } from '@nebular/auth';
import { NbMenuItem } from '@nebular/theme';
import { PagesMenu } from './pages-menu';
import { SettingsService } from '../@core/backend/common/services/settings.service';
import { UserData, UserPermissions } from '../@core/interfaces/common/users';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { title } from 'process';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnDestroy {

  menu: UserPermissions[] ;
  alive: boolean = true;
  public item = '';
  public lang:string;
  constructor(
    private tokenService: NbTokenService,
    private usersService: UserData,
    private translate: TranslateService
  ) {

    this.lang = localStorage.getItem ('lang');
    let currentlang = this.translate.currentLang
    currentlang=this.lang
    this.translate.use(currentlang);
    this.initMenu();

    this.tokenService.tokenChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => {
        this.initMenu();
    });
  }



  initMenu() {

    let x = this.usersService.getCurrentUser().subscribe(
      (result:any) => {
        this.menu = result.userPermissions;
        this.menu.forEach((menuItem) => {

          this.translate.stream(menuItem.title).subscribe((res: string) => {
            Object.keys(menuItem).forEach((key,index)=>{
              Object.keys(menuItem.children).forEach((key,index)=>{
                let sizechilden = menuItem.children.length
                for (let index = 0; index < sizechilden; index++) {
                  this.translate.stream(menuItem.children[index].title).subscribe((res: string) => {
                    menuItem.children[index].title = res
                  })
                }
                menuItem.title = res
              })
              menuItem.title = res
            })
          });
          
      });
      
      } 
    );

  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
