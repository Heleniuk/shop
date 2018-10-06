import { GeneratorService } from "../services/generator.service";
import { InjectionToken } from "@angular/core";

export const RandomString5 = new InjectionToken<string>('RandomString5');

export function RandomStringFactory(n: number) {
    return function (generator: GeneratorService): string {
        return generator.generateRandomString(n);
    };
}