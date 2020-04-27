import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

    deaths: Observable<any>;
    // variable type array 
    newDeaths: any[]=[]; 
    // variable for the input from the browser 
    searchText1=''; 

  constructor(private router: Router, private api:ApiService) { }

  ngOnInit() {
      
      this.initializeItems();
  }

initializeItems(){
      this.deaths=this.api.getDeaths(); 
      this.deaths.subscribe(newdeath => {
          this.newDeaths=[newdeath];
          // console it is only to check the info in console 
          //console.log( data); 
      });
    }

  //event is the name of the property that i have for this method 
  searchDeath(event){
      const text = event.target.value; 
      this.searchText1 = text; 

      console.log(text); 
  }
}









    //Method to get the inforamtion from the Http://breakingbad.api and restore
 //initializeItems(){
      //getting the information from the webside and restore in a varible deaths, after I am restoring the information
      // in the array items. 
   //   this.deaths=this.api.getDeaths(); 
   //  this.deaths.subscribe(death => {
         // console.log('mydata:', data); 
   //      this.newDeaths = [death];
  //   console.log(this.deaths);

         
   //   });
  //}

  // method to get the input from the user 
 // searchDeaths(event){
 //     console.log(event);
   //   const val = event.target.value;
     //   this.searchText1 = val; 
       // console.log(val);
    // set val to the value of the searchbar
    

//}
//}



     

      

   

    


