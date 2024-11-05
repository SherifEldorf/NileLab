import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { BaseUser } from '../../model/BaseUser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Input() Labelusername: string;
  @Input() Labelpassword: string;
  constructor(public translate: TranslateService) {}

  public baseUser = new BaseUser();
  @Output() loginClick = new EventEmitter();
  Submit() {
    this.loginClick.emit(this.baseUser);
  }
}
