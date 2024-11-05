import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
export class _PageTitle {
    public pages: any = [
        { Key: 'superAdminHome', title: 'Super Admin Home', path: 'layout/superAdminHome' }
    ]
    constructor(private title: Title,
        private translateService: TranslateService) {

    }

    setTitle(KeyTitle: string) {

        this.title.setTitle(this.translateService.instant(KeyTitle));
    }
}