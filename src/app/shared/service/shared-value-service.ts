import { Injectable } from '@angular/core';
import { CustomLabelDTO } from '../model/CustomLabelDTO';
import { LayoutSetting } from '../model/layoutSetting';

@Injectable()
export class SharedValueService {
  constructor() {
    this.setLayoutSetting();
  }
  private layoutSetting: LayoutSetting = new LayoutSetting();
  private customLabelDTO: CustomLabelDTO = new CustomLabelDTO();

  public configuration = {
    apiURL: '',
    resultURL: '',
    clientId: '',
    clientAdminURL: '',
  };
  public langauageId: number;

  private setLayoutSetting() {
    const layout: LayoutSetting = {
      showKey: false,
      showLogOut: false,
      showHome: false,
      showLanguage: true,
    } as LayoutSetting;

    this.layoutSetting = layout;
  }

  getLayoutSetting(): LayoutSetting {
    return this.layoutSetting;
  }

  setCustomLabelDTO(customLabelDTO: CustomLabelDTO) {
    this.customLabelDTO = customLabelDTO;
  }

  getCustomLabelDTO() {
    return this.customLabelDTO;
  }
}
