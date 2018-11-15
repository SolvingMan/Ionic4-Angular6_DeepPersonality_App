import { Component, OnInit } from '@angular/core';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.page.html',
  styleUrls: ['./signup2.page.scss'],
})
export class Signup2Page implements OnInit {
countries: any[];
  constructor() { 
    this.countries = [{
      value: 'AF',
      group: 'A',
      text: 'Afghanistan'
  },
  {
      value: 'AL',
      group: 'A',
      text: 'Albania'
  },
  {
      value: 'DZ',
      group: 'A',
      text: 'Algeria'
  },
  {
      value: 'AD',
      group: 'A',
      text: 'Andorra'
  },
  {
      value: 'AO',
      group: 'A',
      text: 'Angola'
  },
  {
      value: 'AR',
      group: 'A',
      text: 'Argentina'
  },
  {
      value: 'AM',
      group: 'A',
      text: 'Armenia'
  },
  {
      value: 'AW',
      group: 'A',
      text: 'Aruba'
  },
  {
      value: 'AU',
      group: 'A',
      text: 'Australia'
  },
  {
      value: 'AT',
      group: 'A',
      text: 'Austria'
  },
  {
      value: 'AZ',
      group: 'A',
      text: 'Azerbaijan'
  },
  {
      value: 'BH',
      group: 'B',
      text: 'Bahrain'
  },
  {
      value: 'BD',
      group: 'B',
      text: 'Bangladesh'
  },
  {
      value: 'BY',
      group: 'B',
      text: 'Belarus'
  },
  {
      value: 'BE',
      group: 'B',
      text: 'Belgium'
  },
  {
      value: 'BZ',
      group: 'B',
      text: 'Belize'
  },
  {
      value: 'BJ',
      group: 'B',
      text: 'Benin'
  },
  {
      value: 'BT',
      group: 'B',
      text: 'Bhutan'
  },
  {
      value: 'BO',
      group: 'B',
      text: 'Bolivia'
  },
  {
      value: 'BA',
      group: 'B',
      text: 'Bosnia And Herzegovina'
  },
  {
      value: 'BW',
      group: 'B',
      text: 'Botswana'
  },
  {
      value: 'BR',
      group: 'B',
      text: 'Brazil'
  },
  {
      value: 'IO',
      group: 'B',
      text: 'British Indian Ocean Territory'
  },
  {
      value: 'BN',
      group: 'B',
      text: 'Brunei Darussalam'
  },
  {
      value: 'BG',
      group: 'B',
      text: 'Bulgaria'
  },
  {
      value: 'BF',
      group: 'B',
      text: 'Burkina Faso'
  },
  {
      value: 'BI',
      group: 'B',
      text: 'Burundi'
  }];
  }

  ngOnInit() {
  }

}
