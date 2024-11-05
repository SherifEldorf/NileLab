import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PageTitleService } from './page-title.service';
@Injectable()
export class SetTitleService {
    public pageTitle;
    constructor(private titleService: Title, private pageTitleService: PageTitleService,
        ) {
    }

   


    public getPageName(tabname: any) {
        this.pageTitleService.pages.find(x => {
            if (x.Key == tabname) {
                this.pageTitle = x.title
            }

        })

    }

}