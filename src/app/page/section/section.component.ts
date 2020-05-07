import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';


import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(public src: DataService, private route: ActivatedRoute ,private router: Router ) { }


  param_: any;

  compeny: any;
  deparment: any;

  selectedCompanies;
  user: any[] = [];
  username = ['prince', 'amit', 'roshan','adarsh','shekhar','eric','ravikant'];


  indentbrand:any = []
  inddentname = ['Amazon', 'GE', 'McDonald','Intel','Oracle','Cisco','Nike'];
  


  umopicker:any = ['UMO__ONE','UMO__TWO','UMO__THREE','UMO__FOUR']

  indents = ['Capital','Revenue'] 

  tech = [
    {
        id: 1,
        item_code: 11110,
        name:'Pen',
        umo: 'UMO__ONE',
    },
    { id: 2,
      item_code: 11111,
      name:'Oil',
      umo: 'UMO__TWO'
    },
    {
        id: 3,
        item_code: 11112,
        name:'Mobile',
        umo: 'UMO__THREE'
    },
    {
        id: 4,
        item_code: 11113,
        name:'Milk',
        umo: 'UMO__FOUR'
    },
  ];


  makes: any = ['lg', 'sumsung','voltas','daikin','hitachi','blue star']
  
  types: any[]=['Chargeable', 'Non Chargeable']

  ngOnInit(): void {
    this.newform()



    
    this.src.obj.document_date = this.getdate()

    this.route.params.subscribe((param: Params)=>{
      console.log("------------------------------")
      this.param_ = param.id
      if(param.id != undefined){
        console.log('undefined get')
      this.src.obj =   this.src.ary[param.id]
      }else{
        console.log('undefined not get')
      }
    })



    
    //api call
    this.compeny= this.src.getcompeny()
    this.deparment= this.src.getdeprment()

    //add item if not present
    this.username.forEach((c, index) => {
      this.user.push({ id: index, name: c });
     }
    );


    //add item if not present
    this.inddentname.forEach((c, index) => {
      this.indentbrand.push({ id: index, name: c });
     }
    );

    //push default object 
    this.src.obj.item.push({
      item_name: '',
      tech: '',
      
      make: '',
      uom: '',
  
      qty: null,
      rate: null,
  
      code: null,

      amount: null,
      required: new Date(),
      remarks: '',
    })
  }


  d:any;
  m: any;
  y:any;

  date: any;;
 getdate(){

  var today = new Date(); 
  this.d = today.getDate(); 
  this.m = today.getMonth() + 1; 
  this.y = today.getFullYear(); 
  if (this.d < 10) { 
      this.d = '0' + this.m; 
  } 
  if (this.m < 10) { 
      this.m = '0' + this.m; 
  } 
   this.date = this.d + '/' + this.m + '/' + this.y;
   
   return this.date
 }




  





  addTagFn(name) {
    return { name: name, tag: true };
  }


  indentTagFn(name) {
    return { name: name, tag: true };
  }

  navigate(){
    this.router.navigate(['history'])
  }

  newform(){
    this.src.obj={
      document_no: '',
      document_date: new Date(),
      compeny: '',
      indent: '',
      deparment: '',
      charge: '',
      request: '',
      indent_tag: '',
      remarks: '',

      check: false,
  
      item: []
    }
  }

  changeTyape(info: string){
    this.src.obj.charge = info;
    console.log(info)
  }


  makeChange(obj){
    console.log(obj)
  }


  indentTyape(info){
    this.src.obj.indent = info.type
  }


  checkbox(info){
    this.src.obj.check= info
  }


  counter: number= 0;

  //Select change event
  selectTyape(obj,index){
    this.counter = this.counter + 1

    console.log(obj)
    this.src.obj.item[index].code= obj.item_code;
    this.src.obj.item[index].item_name= obj.name;
    this.src.obj.item[index].uom= obj.umo;

    console.log(index)

    if (this.src.obj.item.length <= index +1){
    this.src.obj.item.push({
      item_name: '',
      tech: '',
      
      make: '',
      uom: '',
  
      qty: null,
      rate: null,
  
      code: null,

      amount: null,
      required: new Date(),
      remarks: '',
    })
  
  }


    console.log(this.src.obj.item[index])
  }

  saveRecord(){
    if(confirm("are you SOUR to Save This Record")){
      console.log(this.src.obj)
      if(this.param_ == undefined){
      this.src.finalObj.push(this.src.obj)
     
      }
    }


    console.log(this.src.finalObj)

  }


  amountpriduct(id){
    this.src.obj.item[id].amount= this.src.obj.item[id].rate * this.src.obj.item[id].qty;
  }

  cities = [
    {
        id: 1,
        name: 'Vilnius',
        avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
    },
    { id: 2, name: 'Kaunas', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
    {
        id: 3,
        name: 'Pavilnys',
        avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
    },
    {
        id: 4,
        name: 'Siauliai',
        avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
    },
];

selectedCity = this.cities[1].name;















}
