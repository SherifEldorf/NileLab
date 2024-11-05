import { Component } from '@angular/core';
import { SessionService } from 'src/app/shared/service/session-service';
import { VirtualTimeScheduler } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { hasValue } from 'src/app/shared/helper/methodsHelper';
import { LanguageDTO } from 'src/app/shared/model/LanguageDTO';
import { LanguageService } from 'src/app/shared/service/language.service';
import { SharedValueService } from 'src/app/shared/service/shared-value-service';
import { getCustomLabel } from 'src/app/shared/helper/customLabelHelper';
import { CustomLabelService } from 'src/app/shared/service/customLabel.service';
import { LayoutSetting } from 'src/app/shared/model/layoutSetting';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public selectedItem: LanguageDTO;
  public hasValue = hasValue;
  public languageList: Array<LanguageDTO>;

  get layoutSetting(): LayoutSetting {
    return this.sharedValueService.getLayoutSetting();
  }

  constructor(
    public sharedValueService: SharedValueService,
    private languageService: LanguageService,
    private translateService: TranslateService,
    private sessionService: SessionService,
    private LabelService: CustomLabelService
  ) {
    this.getLanguage();
  }

  onChange(event: any) {
    this.translateService.setDefaultLang(this.selectedItem.code);
    this.sessionService.setLanguage(this.selectedItem.code);
    this.changeCssFile(this.sessionService.getLanguage());
    this.sharedValueService.langauageId = this.selectedItem?.id;
    getCustomLabel(this.LabelService, this.sharedValueService);
  }

  getLanguage() {
    this.languageService
      .SelectActive()
      .subscribe((response) => this.LanguageResult(response));
  }

  LanguageResult(response: any) {
    this.languageList = response;
    this.setLanguage();
    getCustomLabel(this.LabelService, this.sharedValueService);
  }
  setLanguage() {
    let language = this.sessionService.getLanguage();
    if (!hasValue(language)) {
      const defaultLanguage = this.languageList.find((x) => x.isDefault);
      this.sessionService.setLanguage(defaultLanguage.code);
      this.selectedItem = defaultLanguage;
      language = this.selectedItem.code;
    } else {
      this.selectedItem = this.languageList.find((x) => x.code == language);
    }
    this.sharedValueService.langauageId = this.selectedItem?.id;
    this.translateService.setDefaultLang(this.sessionService.getLanguage());
    this.changeCssFile(this.sessionService.getLanguage());
  }

  changeCssFile(lang: string) {
    const headTag = document.getElementsByTagName('head')[0] as HTMLHeadElement;
    const existingLink = document.getElementById('langCss') as HTMLLinkElement;
    const bundleName = lang === 'ar' ? 'arabicStyle.css' : 'englishStyle.css';
    if (existingLink) {
      existingLink.href = bundleName;
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.type = 'text/css';
      newLink.id = 'langCss';
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }
  }
}
