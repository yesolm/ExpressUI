import { Component, AfterViewInit } from '@angular/core';
declare function initVisitorsChart(): any;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.component.css'],
    standalone: false
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    initVisitorsChart();
  }
}
