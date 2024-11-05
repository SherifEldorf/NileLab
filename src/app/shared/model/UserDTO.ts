import {BaseUser} from '../model/BaseUser';
export class UserDTO extends BaseUser
{
    public id:number;
    public userTypeId:number;
}