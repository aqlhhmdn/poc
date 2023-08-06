import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.css']
})
export class TopSectionComponent implements OnInit {
  arrowRight = faArrowRight;
  emotion = ['Happiness', 
            'Sadness',
            'Fear', 
            'Disgust',
            'Anger'];
             powerSelected: any = "Happiness";

  happinessIsShown = true;
  sadnessIsShown = false;
  fearIsShown = false;
  disgustIsShown = false;
  angerIsShown = false;
  

  list: any = [];

  constructor(public _http: HttpService ) { }

  ngOnInit(): void {
    this._http.getApi().subscribe((data: any = []) => {
      console.log(data);
      this.list = data;
    });
  }

  onChange() {
    if (this.powerSelected === "Happiness") {
      this.happinessIsShown = true;
      this.sadnessIsShown = false;
      this.fearIsShown = false;
      this.disgustIsShown = false;
      this.angerIsShown = false;
      
    } else if (this.powerSelected === "Sadness") {
      this.sadnessIsShown = true;
      this.happinessIsShown = false;
      this.fearIsShown = false;
      this.disgustIsShown = false;
      this.angerIsShown = false;
      
    } else if (this.powerSelected === "Fear") {
      this.happinessIsShown = false;
      this.sadnessIsShown = false;
      this.fearIsShown = true;
      this.disgustIsShown = false;
      this.angerIsShown = false;

    } else if (this.powerSelected === "Disgust") {
      this.happinessIsShown = false;
      this.sadnessIsShown = false;
      this.fearIsShown = false;
      this.disgustIsShown = true;
      this.angerIsShown = false;
    } else {
      this.happinessIsShown = false;
      this.sadnessIsShown = false;
      this.fearIsShown = false;
      this.disgustIsShown = false;
      this.angerIsShown = true;
    }
  }


}
