import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
Injectable()
export class PageTitleService {


    constructor() { }
    public pages: any = [
        { Key: 'superAdminHome', title: 'Super Admin Home', path: 'layout/superAdminHome' }
    ]
}