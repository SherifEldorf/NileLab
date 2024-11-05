import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { userType } from 'src/app/shared/enum/userType';
import {
  getUserTypeList,
  hasValue,
  RedirectToResult,
} from 'src/app/shared/helper/methodsHelper';
import { BaseClass } from 'src/app/shared/model/BaseClass';
import { LayoutSetting } from 'src/app/shared/model/layoutSetting';
import { UserDTO } from 'src/app/shared/model/UserDTO';
import { UserTypePropName } from 'src/app/shared/model/UserTypePropName';
import { AlertService } from 'src/app/shared/service/alert-service';
import { CustomLabelService } from 'src/app/shared/service/customLabel.service';
import { SessionService } from 'src/app/shared/service/session-service';
import { SharedValueService } from 'src/app/shared/service/shared-value-service';
import { UserService } from 'src/app/shared/service/user-service';

@Component({
  selector: '',
  templateUrl: './home_Autowrap.component.html',
  styleUrls: ['./home_Autowrap.component.css'],
})
export class home_AutowrapComponent {
  public userTypeList: Array<BaseClass>;
  private selectedUserType: any;
  public loginType: string;
  public CustomLabelUsername: string;
  public CustomLabelPassword: string;

  get layout(): LayoutSetting {
    return this.sharedValueService.getLayoutSetting();
  }

  public get userType(): typeof userType {
    return userType;
  }

  constructor(
    private sharedValueService: SharedValueService,
    private alertService: AlertService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private sessionService: SessionService,
    public translateService: TranslateService,
    public labelService: CustomLabelService
  ) {
    this.loginType = this.activatedRoute.snapshot.paramMap.get('loginType');
    this.LoadUserTypes();
    this.setUserLabelsOnLanChange(translateService);
  }

  private setUserLabelsOnLanChange(translateService: TranslateService) {
    translateService.onLangChange.subscribe(() => {
      this.LoadUserTypes();
    });
  }

  onSubmit(userDTO: UserDTO) {
    userDTO.userTypeId = this.selectedUserType.id;
    this.userService
      .Login(userDTO)
      .subscribe((responseLogin) => this.loginSuccess(responseLogin));
  }

  loginSuccess(response: any) {
    this.sessionService.setClientLoginUrl(window.location.href);
    const token = response;
    if (hasValue(token)) {
      this.alertService.toastrSuccess('LoginSuccess');
      RedirectToResult(
        this.sharedValueService,
        this.sessionService.getLanguage(),
        response,
        'GeneralResult',
        this.selectedUserType.id
      );
    }
  }

  async LoadUserTypes() {
    this.userTypeList = await getUserTypeList(this.translateService);
    this.GetUserType();
  }

  GetUserType() {
    if (hasValue(this.loginType)) {
      this.selectedUserType = this.userTypeList.find(
        (x) => x.id == +this.loginType
      );
    } else {
      this.selectedUserType = this.userTypeList[0];
    }
  }

  showModal(usertype: string) {
    this.loginType = usertype;
    this.GetUserType();
    this.GetPopupCustomLabels();
  }

  GetPopupCustomLabels() {
    const customLabelDTO = this.sharedValueService.getCustomLabelDTO();
    this.CustomLabelUsername = UserTypePropName.getLabelsByLoginType(
      this.loginType,
      customLabelDTO
    );
    this.CustomLabelPassword = customLabelDTO.password_Login_Page;
  }
}
