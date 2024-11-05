import { HttpClient } from '@angular/common/http';
import { SharedValueService } from '../service/shared-value-service';
import { TranslateService } from '@ngx-translate/core';
import { BaseClass } from '../../shared/model/BaseClass';
import { userType } from '../enum/userType';
export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

export function setConfig(
  http: HttpClient,
  sharedValueService: SharedValueService
) {
  return async () => {
    const resp = await http.get(getBaseUrl() + '/config.json').toPromise();
    sharedValueService.configuration = resp as any;
  };
}

export function hasValue(obj: any) {
  if (obj == undefined || obj == null || obj == '') {
    return false;
  }
  return true;
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

export async function getTranslateValue(
  key: string,
  translateService: TranslateService
) {
  return await translateService.get(key).toPromise();
}

export function RedirectToResult(
  sharedValueService: SharedValueService,
  language: string,
  sessionId: string,
  pageName: string,
  user_Type: number
) {
  let url = '';
  if (user_Type == userType.ClientAdmin) {
    url = sharedValueService.configuration.clientAdminURL + '/accessLogin';
  } else {
    url = sharedValueService.configuration.resultURL + '/accessLogin';
  }
  window.location.href = url + ';sid=' + sessionId + ';language=' + language;
}

export async function getUserTypeList(translateService: TranslateService) {
  const StringIsNumber = (value) =>
    isNaN(Number(value)) && (value != 'ClientAdmin');

  const list = Object.keys(userType).filter(StringIsNumber);
  const baseClassList: Array<BaseClass> = new Array<BaseClass>();
  for (let item of list) {
    const baseClass = new BaseClass();
    baseClass.id = +userType[item];
    baseClass.name = await getTranslateValue(item, translateService);
    baseClassList.push(baseClass);
  }
  return baseClassList;
}
