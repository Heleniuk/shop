import { Injectable } from "@angular/core";
import { AppSettingsModel } from "../models/app-settings.model";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { LocalStorageService } from "./local-storage.service";
import { ConstantsService } from "./constants.service";
import { tap } from "rxjs/operators";


@Injectable({ providedIn: 'root' })
export class AppSettingsService {
    private settingsUrl = 'assets/app-settings.json';

    constructor(
        private http: HttpClient,
        private localStorageService: LocalStorageService,
        private constants: ConstantsService
    ) { }

    getSettings(): Observable<AppSettingsModel> {
        const cachedSettings = this.localStorageService.getItem(this.constants.APP_SETTINGS_KEY);
        console.log("Cached settings: " + JSON.stringify(cachedSettings));
        return cachedSettings ? of(cachedSettings) : this.getFromFile();
    }

    private getFromFile(): Observable<AppSettingsModel> {
        console.log("Apparently local storage has no settings. Getting app settings from file... ");
        return this.http.get<AppSettingsModel>(this.settingsUrl)
            .pipe(
                tap(
                    response => {
                        this.localStorageService.setItem(this.constants.APP_SETTINGS_KEY, response);
                    }
                )
            )
                
    }
}
