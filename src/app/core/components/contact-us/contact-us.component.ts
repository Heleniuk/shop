import { Component, OnInit, Optional } from '@angular/core';
import { ConfigOptions } from '../../models/config-options.model';
import { ConfigOptionsService } from '../../services/config-options.service';
import { GeneratorService } from '../../services/generator.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { ConstantsService } from '../../services/constants.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  localStorageItem: string;
  generatedString: string;
  config: ConfigOptions;

  constructor(
    private configOptionsService: ConfigOptionsService,
    @Optional() private generatorService: GeneratorService,
    private localStorageService: LocalStorageService,
    public constants: ConstantsService
  ) { }

  ngOnInit() {
    this.localStorageItem = this.localStorageService.getItem();
    this.generatedString = this.generatorService.generateRandomString();
    this.config = this.configOptionsService.getOptions();
  }

}
