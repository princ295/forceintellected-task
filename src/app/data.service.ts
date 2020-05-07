import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { delay, map, tap } from 'rxjs/operators';
import { Model } from 'src/model/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  obj: Model;

  finalObj:any[]=[{},{}];
  ary: any[]=[]


  // Document No.	X			txtBox	alphanum	30	
  // Document Date	X			Datepicker			Should show current date of system
  // Company Name	X			DropDown			Will be picked from CompanyMaster Table,
  // Indent Type	X			DropDown			Pick from database, Values will be Capital Revenue
  // Is Reserved	X			Checkbox			
  // Department 	X			DropDown			Load from payroll.tblDeptmaster
  // Charge Type							Will have 2 values . Chargeable, Non Chargeable
  // Requested By	X			DropDown			Editable dropdown, User can select from existing list or can type new user
  // Indent Tag			X	DropDown			Multi Tag Editable Dropdown, User can select as well as Write any thing here. It is similar like tag feature.
  // Remarks		X		txtBox	alphanum	1000	
  






//get deparment list
  getdeprment():Observable<any>{
    const deparment:any[]=[
        {
          id:1,
          _: 'Operations',
        },
        { id:2,
          _: 'Marketing'
        },
        { id:3,
          _: 'Finance'
        },
        { id:4,
          _: 'Sales'
        },
        { id:5,
          _: 'HR'
        },
        { id:6,
          _: 'Purchase',
        },
        { id:7,
          _: 'Research',
        }
      ]
    return of(deparment).pipe(delay(500));
}

//get Compeny list
getcompeny():Observable<any>{
  const compeny:any[]=[
      {
        id:1,
        _: 'Lg',
      },
      { id:2,
        _: 'Tata'
      },
      { id:3,
        _: 'Steel'
      },
      { id:4,
        _: 'Nokia'
      },
      { id:5,
        _: 'Sum Sung'
      },
      { id:6,
        _: 'Lenevo',
      },
      { id:7,
        _: 'Phone pe',
      },
      { id:8,
        _: 'Paytm',
      },
    ]
  return of(compeny).pipe(delay(500));
}

getuser():Observable<any>{
  const user:any[]=[
      {
        id:1,
        _: 'prince',
      },
      { id:2,
        _: 'amit'
      },
      { id:3,
        _: 'roshan'
      },
      { id:4,
        _: 'adarsh'
      },
      { id:5,
        _: 'shekhar'
      },
      { id:6,
        _: 'eric',
      },
      { id:7,
        _: 'ravikant',
      },
      { id:8,
        _: 'om',
      },
    ]
  return of(user).pipe(delay(500));
}



















}
