import { Component } from '@angular/core';
import { DataStore } from '../../models/data-store';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title: string;
  storedata: DataStore;
  constructor() {
    this.title = 'Angular Course With Alex';
    this.storedata = new DataStore(
      'ITI',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnqSVk6YbRai_2XSsLuIVAadEVxtGZgSnZw&s',
      ['Alex', 'cairo', 'smart'],
    );
  }
  TestMethod(){
    console.log("Hello");
  }
}
