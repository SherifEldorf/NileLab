import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../service/language.service';
import { SharedValueService } from '../service/shared-value-service';
import { SessionService } from 'src/app/shared/service/session-service';

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

export function setConfig(
  http: HttpClient,
  sharedValueService: SharedValueService,
  languageService: LanguageService
) {
  return async () => {
    const resp = await http.get(getBaseUrl() + 'config.json').toPromise();
    sharedValueService.configuration = resp as any;
    const langRepo = await languageService.SelectActive().toPromise();
  };
}
export function objHasValue(obj: any) {
  if (obj !== undefined && obj != null && Object.keys(obj).length > 0) {
    return true;
  }
  return false;
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function hasValue(obj: any) {
  if (obj !== undefined && obj != null && obj != '') {
    return true;
  }
  return false;
}

export function getStatus(valueNumber: boolean = false) {
  if (!valueNumber) {
    return [
      { text: 'Active', active: true },
      { text: 'Inactive', active: false },
    ];
  } else {
    return [
      { text: 'Active', active: 1 },
      { text: 'Inactive', active: 0 },
    ];
  }
}
export function convertToCamelCase(value: string) {
  if (value != null && value.length > 0) {
    return value[0].toLowerCase() + value.substring(1);
  }
  return value;
}

export async function getTranslateValue(
  key: string,
  translateService: TranslateService
) {
  translateService.currentLang = translateService.getDefaultLang();
  return await translateService.get(key).toPromise();
}
export function logOut(sessionService: SessionService) {
  let loginurl = sessionService.getClientLoginUrl();
  if (!loginurl) {
    loginurl = '/';
  }
  sessionService.clear();
  redirectToLoginPage(loginurl);
}

function redirectToLoginPage(loginurl: string) {
  window.location.href = loginurl;
}

export async function getYesNoList(translateService: TranslateService) {
  return [
    { text: await getTranslateValue('yes', translateService), value: true },
    { text: await getTranslateValue('no', translateService), value: false }
  ];
}

export function IsMobileDevice() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}
