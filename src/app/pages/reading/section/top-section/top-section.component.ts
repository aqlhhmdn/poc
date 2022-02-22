import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.css']
})
export class TopSectionComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
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
