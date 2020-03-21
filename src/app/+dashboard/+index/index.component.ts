import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { LayoutService } from 'template/layout.service';
import { AuthService } from '@app/+auth/services/auth.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit, OnDestroy {

  user: firebase.User;
  today: number;

  constructor(private appService: AppService, private layoutService: LayoutService, private authService: AuthService) {
    this.appService.pageTitle = 'Dashboard';

    this.today = Date.now();
  }

  ngOnInit(): void {
    this.authService.getCurrentUser$().subscribe(
      (user) => {
        this.user = user;
      }
    );
  }


  // Chart 1
  //

  chart1Data = [{
    data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
      38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 18
    ],
    borderWidth: 0
  }];
  chart1Options = {
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    },
    responsive: false,
    maintainAspectRatio: false
  };
  chart1Colors = [{
    backgroundColor: 'rgba(87, 181, 255, 1)'
  }];


  // Chart 2
  //

  chart2Data = [{
    data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
      38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 18
    ],
    borderWidth: 1,
    pointRadius: 1,
    lineTension: 0
  }];
  chart2Options = {
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    },
    responsive: false,
    maintainAspectRatio: false
  };
  chart2Colors = [{
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: '#009688',
    pointBorderColor: 'rgba(0,0,0,0)'
  }];


  // Chart 3
  //

  chart3Data = [{
    data: [54, 46],
    borderWidth: 0
  }];
  chart3Options = {
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    cutoutPercentage: 94,
    responsive: false,
    maintainAspectRatio: false
  };
  chart3Colors = [{
    backgroundColor: ['#673AB7', '#f9f9f9'],
    hoverBackgroundColor: ['#673AB7', '#f9f9f9']
  }];

  // Resize charts
  //

  ngOnDestroy() {
    setTimeout(() => this.layoutService.off('resize.dashboard-2'));
  }

}
