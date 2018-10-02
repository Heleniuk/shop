import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONSTANTS_SERVICE, ConstantsService } from './services/constants.service';
import { GeneratorService } from './services/generator.service';
import { generatorServiceFactory } from './factories/generator-service.factory';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LocalStorageService } from './services/local-storage.service';
import { ConfigOptionsService } from './services/config-options.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactUsComponent],
  exports: [ContactUsComponent],
  providers: [
    LocalStorageService,
    ConfigOptionsService,
    { provide: ConstantsService, useValue: CONSTANTS_SERVICE },
    { provide: GeneratorService,
      useFactory: generatorServiceFactory
    }
  ]
})
export class CoreModule { }
