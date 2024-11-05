import { userType } from '../enum/userType';
import { CustomLabelDTO } from './CustomLabelDTO';

export class UserTypePropName {
  [key: string]: string;

  private static getUserType() {
    return {
      [userType.Patient]: 'patient_ID_Login_Page',
      [userType.AccNum]: 'accession_Login_Page',
      [userType.Lab]: 'center_Username_Login_Page',
      [userType.Doctor]: 'doctor_Username_Login_Page',
      [userType.Payer]: 'payer_Username_Login_Page',
      [userType.Location]: 'location_Username_Login_Page',
      [userType.ClientAdmin]: 'admin_Username_Login_Page',
    };
  }

  private static getPropertyName(userType: string) {
    return this.getUserType()[userType];
  }

  static getLabelsByLoginType(
    usertype: string,
    CustomLabels: CustomLabelDTO
  ): string {
    if (CustomLabels == null || CustomLabels == undefined) {
      return 'User Name';
    }
    const propertyName = UserTypePropName.getPropertyName(usertype);
    return CustomLabels[propertyName];
  }
}
