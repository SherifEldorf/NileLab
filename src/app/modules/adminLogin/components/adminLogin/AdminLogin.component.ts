import { Component } from '@angular/core';
import { userType } from 'src/app/shared/enum/userType';
import {
  hasValue,
  RedirectToResult,
} from 'src/app/shared/helper/methodsHelper';
import { LayoutSetting } from 'src/app/shared/model/layoutSetting';
import { UserDTO } from 'src/app/shared/model/UserDTO';
import { AlertService } from 'src/app/shared/service/alert-service';
import { SessionService } from 'src/app/shared/service/session-service';
import { SharedValueService } from 'src/app/shared/service/shared-value-service';
import { UserService } from 'src/app/shared/service/user-service';

@Component({
  selector: '',
  templateUrl: './AdminLogin.component.html',
  styleUrls: ['./AdminLogin.component.css'],
})
export class AdminLoginComponent {
  Customlabeldto: any;

  constructor(
    private sharedValueService: SharedValueService,
    private sessionService: SessionService,
    private alertService: AlertService,
    private userService: UserService
  ) {
    this.Customlabeldto = this.sharedValueService.getCustomLabelDTO();
  }
  onSubmit(userDTO: UserDTO) {
    userDTO.userTypeId = userType.ClientAdmin;
    this.userService
      .Login(userDTO)
      .subscribe((responseLogin) => this.loginSuccess(responseLogin));
  }
  loginSuccess(response: any) {
    this.sessionService.setadminLoginUrl(window.location.href);
    const token = response;
    if (hasValue(token)) {
      this.alertService.toastrSuccess('LoginSuccess');
      RedirectToResult(
        this.sharedValueService,
        this.sessionService.getLanguage(),
        response,
        'adminHome',
        userType.ClientAdmin
      );
    }
  }
}
