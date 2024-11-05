import { Injectable } from '@angular/core';
import { hasValue } from '../helper/methodsHelper';
import { EncryptionDecryptionService } from './encypt-decrypt-service';

@Injectable()
export class SessionService {


    private readonly languageKey: string = "ca__ln";
    private readonly tokenKey: string = "l__tk";
    private readonly userTypeKey: string = "l__ust";
    private readonly ClientloginURLKey: string = "ca__lu";
    private readonly adminloginURLKey: string = "cl__lu";
    private readonly pageTitleKey: string = "l__pt";



    private language: string;
    private token: string;
    private userType: string;
    private ClientloginURL: string;
    private adminloginURL: string;

    private pageTitle: string;


    constructor(private encryptionDecryptionService: EncryptionDecryptionService) {
    }

    public setLanguage(userToken: string) {
        this.setValue(this.languageKey, userToken);
    }


    public getLanguage(): string {
        return this.getValue(this.languageKey);
    }


    public setToken(userToken: string) {
        this.setValue(this.tokenKey, userToken);
    }


    public getToken(): string {
        let token = this.getValue(this.tokenKey);
        return hasValue(token) ? token : '';
    }

    public setUserType(userType: string) {
        this.setValue(this.userTypeKey, userType);
    }


    public getUserType(): string {
        return this.getValue(this.userTypeKey);
    }

    public setClientLoginUrl(loginurl: string) {
        this.setValue(this.ClientloginURLKey, loginurl);
    }


    public getClientLoginUrl(): string {
        return this.getValue(this.ClientloginURLKey);
    }

    public setadminLoginUrl(loginurl: string) {
        this.setValue(this.adminloginURLKey, loginurl);
    }


    public getadminLoginUrl(): string {
        return this.getValue(this.adminloginURLKey);
    }


    public setPageTitle(userType: string) {
        this.setValue(this.pageTitleKey, userType);
    }


    public getPageTitle(): string {
        return this.getValue(this.pageTitleKey);
    }


    public clear() {
        localStorage.clear();
        this.userType = null;
        this.token = null;
    }



    private setValue(key: string, value: any) {
        switch (key) {
            case this.tokenKey:
                this.token = value;
                localStorage.setItem(key, this.encryptionDecryptionService.encrypt(value));
                break;

            case this.languageKey:
                this.language = value;
                localStorage.setItem(key, this.encryptionDecryptionService.encrypt(value));
                break;

            case this.userTypeKey:
                this.userType = value;
                localStorage.setItem(key, this.encryptionDecryptionService.encrypt(value));
                break;

            case this.ClientloginURLKey:
                this.ClientloginURL = value;
                localStorage.setItem(key, this.encryptionDecryptionService.encrypt(value));
                break;
            case this.adminloginURLKey:
                    this.adminloginURL = value;
                    localStorage.setItem(key, this.encryptionDecryptionService.encrypt(value));
                    break;     

            case this.pageTitleKey:
                this.pageTitle = value;
                localStorage.setItem(key, this.encryptionDecryptionService.encrypt(value));
                break;
        }
    }


    private getValue(key: string) {
        if (!hasValue(localStorage.getItem(key))) {
            return null;
        }
        switch (key) {
            case this.tokenKey:
                if (!hasValue(this.token)) {
                    this.token = this.encryptionDecryptionService.decrypt(localStorage.getItem(key));
                }
                return this.token; //'Bearer ' +

            case this.languageKey:
                if (!hasValue(this.language)) {
                    this.language = this.encryptionDecryptionService.decrypt(localStorage.getItem(key));
                }
                return this.language;

            case this.userTypeKey:
                if (!hasValue(this.userType)) {
                    let jsonObj = this.encryptionDecryptionService.decrypt(localStorage.getItem(key));
                    //this.userPrivilege = parseJsonOrReturnNew(jsonObj);
                    this.userType = jsonObj;
                }
                return this.userType;

            case this.ClientloginURLKey:
                if (!hasValue(this.ClientloginURL)) {
                    let jsonObj = this.encryptionDecryptionService.decrypt(localStorage.getItem(key));
                    //this.userProfile = parseJsonOrReturnNew(jsonObj);
                    this.ClientloginURL = jsonObj;
                }
                return this.ClientloginURL;
            case this.adminloginURLKey:
                    if (!hasValue(this.adminloginURL)) {
                        let jsonObj = this.encryptionDecryptionService.decrypt(localStorage.getItem(key));
                        //this.userProfile = parseJsonOrReturnNew(jsonObj);
                        this.adminloginURL = jsonObj;
                    }
                    return this.adminloginURL;    

            case this.pageTitleKey:
                if (!hasValue(this.pageTitle)) {
                    let jsonObj = this.encryptionDecryptionService.decrypt(localStorage.getItem(key));
                    //this.appAssistMachineInfo = parseJsonOrReturnNew(jsonObj);
                    this.pageTitle = jsonObj;
                }
                return this.pageTitleKey;
        }
    }
}
