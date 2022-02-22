import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'featured-section',
  templateUrl: './featured-section.component.html',
  styleUrls: ['./featured-section.component.css']
})
export class FeaturedSectionComponent implements OnInit {

  arrowRight = faArrowRight;
  constructor() { }

  ngOnInit(): void {
  }

}
