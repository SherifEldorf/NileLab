import { Injectable } from '@angular/core';
import { isNullOrEmptyString } from '@progress/kendo-angular-grid/dist/es2015/utils';
import * as CryptoJS from 'crypto-js';
import { isNullOrUndefined } from 'util';

@Injectable()

export class EncryptionDecryptionService {
    constructor() { }

    //The set method is use for encrypt the value.
    encrypt(value) {
        if (!isNullOrEmptyString(value)) {
            let key = this.getKey();

            var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key, this.getEncryptionKey(key));

            return encrypted.toString();
        }
        return "";
    }

    //The get method is use for decrypt the value.
    decrypt(value): string {
        if (!isNullOrEmptyString(value)) {
            try {
                let key = this.getKey();

                var decrypted = CryptoJS.AES.decrypt(value, key, this.getEncryptionKey(key));

                return decrypted.toString(CryptoJS.enc.Utf8);
            }
            catch (err) { }
        }
        return null;
    }


    private getKey(): string {
        return CryptoJS.enc.Utf8.parse("$Nati0nal@2021^#"); // prefereed size 16 digit (128/8)
    }


    private getEncryptionKey(key) {
        return {
            keySize: 128 / 8,
            iv: key,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }
    }
}
