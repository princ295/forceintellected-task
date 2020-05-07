import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(public src : DataService, private route: Router) { }

  ngOnInit(): void {

    console.log(this.src.finalObj)

    this.src.ary= []

    this.src.finalObj.map(res=>{
      if(res.document_no){
        this.src.ary.push(res)
      }
    })
   
  }

  update(index){
  
    console.log(index)
    this.route.navigate(['/'+index])
  }
}
