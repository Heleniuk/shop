import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ConfigOptions } from '../../models/config-options.model';
import { ConfigOptionsService } from '../../services/config-options.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { ConstantsService } from '../../services/constants.service';
import { RandomString5 } from '../../factories/random-string.factory';


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
    @Inject(RandomString5) private randomString: string,
    @Optional() private localStorageService: LocalStorageService,
    public constants: ConstantsService
  ) { }

  ngOnInit() {
    this.localStorageItem = this.localStorageService.getItem();
    this.generatedString = this.randomString;
    this.config = this.configOptionsService.getOptions();
  }

}
