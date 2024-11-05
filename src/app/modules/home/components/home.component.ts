import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userType } from 'src/app/shared/enum/userType';
import { hasValue } from 'src/app/shared/helper/methodsHelper';
import { SessionService } from 'src/app/shared/service/session-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  public patientLoginType = userType.Patient;
  public doctorLoginType = userType.Doctor;
  public labLoginType = userType.Lab;
  constructor(private router: Router, sessionService: SessionService) {

    if (!hasValue(sessionService.getToken())) {

    }

  }

  Login(loginValue: number) {
    this.router.navigate(['/Login', { loginType: loginValue} ]);
  }
}
