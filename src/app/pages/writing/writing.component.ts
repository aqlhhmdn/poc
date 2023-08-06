import { Component, OnInit } from '@angular/core';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from 'src/app/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})

export class WritingComponent implements OnInit {
  longarrow = faLongArrowRight;

  thoughts: any;
  constructor(public _http: HttpService, public router: Router) {
    
   }

  //  onSubmit() {
  //   this.router.navigate(['/submit']);
  // }

  ngOnInit(): void {
  }

  dataForm(data: any){
    this._http.saveApi(data).subscribe((result) => {
      console.warn(result)
      this.router.navigate(['/submit']);
    })
  }

}
