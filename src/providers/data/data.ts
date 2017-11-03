import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
 Generated class for the DataProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class DataProvider {

  myData = [
    {
      ListTitle: "Snacks",
      ListItems: [
        {
          name: "Popcorn",
          cost: "$4.89",
          unit: "box"
        },
        {
          name: "Chips",
          cost: "$3.19",
          unit: "bag"
        },
        {
          name: "Cookies",
          cost: "$2.89",
          unit: "box"
        }
      ]
    },
    {
      ListTitle: "Drinks",
      ListItems: [
        {
          name: "Juice",
          cost: "$3.49",
          unit: "gallon"
        },
        {
          name: "Coffee",
          cost: "$5.99",
          unit: "lb"
        },
        {
          name: "Water",
          cost: "$9.99",
          unit: "24 pack"
        }
      ]
    }
  ];


  constructor() {
    console.log('Hello DataProvider Provider');
  }

}