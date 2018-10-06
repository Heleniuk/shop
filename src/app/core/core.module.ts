import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONSTANTS_SERVICE, ConstantsService } from './services/constants.service';
import { GeneratorService } from './services/generator.service';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ChangeColorDirective } from './directives/change-color.directive';
import { RandomStringFactory, RandomString5 } from './factories/random-string.factory';
import { LocalStorageService } from './services/local-storage.service';
import { ConfigOptionsService } from './services/config-options.service';
import { WindowRef } from './services/window-ref';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactUsComponent, ChangeColorDirective],
  exports: [ContactUsComponent],
  providers: [
    LocalStorageService,
    ConfigOptionsService,
    GeneratorService,
    WindowRef,
    { provide: ConstantsService, useValue: CONSTANTS_SERVICE },
    { provide: RandomString5,
      useFactory: RandomStringFactory(5),
      deps: [GeneratorService]
    }
  ]
})
export class CoreModule { }
