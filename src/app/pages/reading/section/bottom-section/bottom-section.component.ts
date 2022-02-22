import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { Data } from 'src/app/data';

@Component({
  selector: 'bottom-section',
  templateUrl: './bottom-section.component.html',
  styleUrls: ['./bottom-section.component.css']
})
export class BottomSectionComponent implements OnInit {
  id: any;
  list: Data[] = [];

  emotion = ['Happiness', 
            'Sadness',
            'Fear', 
            'Disgust',
            'Anger'];
            powerSelected: any = "Happiness";

  happinessIsShown = false;
  sadnessIsShown = false;
  fearIsShown = false;
  disgustIsShown = false;
  angerIsShown = false;
  constructor(public _http: HttpService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getApi();
  }

  getApi() {
    this._http.getApi(this.id).subscribe((data: any = []) => {
      console.log(data);
      this.list = data;
    });
  }

  onChange() {
    if (this.powerSelected === "Happiness") {
      
    } else if (this.powerSelected === "Sadness") {
      
    } else if (this.powerSelected === "Fear") {
     
    } else if (this.powerSelected === "Disgust") {
     
    } else {
      
    }
  }
}
