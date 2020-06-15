import { Component, OnInit } from '@angular/core';
import { PvCalculationService } from 'src/app/shared/services/pv-calculation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-systems-details',
  templateUrl: './systems-details.component.html',
  styleUrls: ['./systems-details.component.css']
})
export class SystemsDetailsComponent implements OnInit {

  systems_details = new Array;
  isLoading: boolean = true;
  noResponse: boolean = false;
  title: string = 'Pv-Systems Details';
  p: number = 1;

  constructor(private data: PvCalculationService,
    private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => { this.timeOut() }, 40000);
    this.getDetails();
  }

  getDetails() {
    this.data.getCalculations(response => {
      if (response && response['length'] > 0) {
        this.systems_details = response;
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
        console.log(response);
      }
    });
  }

  timeOut() {
    if (this.isLoading == true) {
      console.log("noresponse");
      this.noResponse = true;
      this.isLoading = false;
    }
  }

  //scroll up whenever you change the page on pagination
  pageChanged(event) {
    this.p = event;
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 10); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }
}
