import { Component, AfterViewInit } from '@angular/core';
declare function initVisitorsChart(): any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    initVisitorsChart();
  }
}
