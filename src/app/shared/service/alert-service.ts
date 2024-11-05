import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { getTranslateValue } from '../helper/methodsHelper';
@Injectable()
export class AlertService {
    constructor(private toastrService: ToastrService,
        private translate: TranslateService) {
    }

    async toastrSuccess(key: string) {
        this.toastrService.success(await getTranslateValue(key, this.translate));
    }
}