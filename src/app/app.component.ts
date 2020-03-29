import { Component, OnInit } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { AppService } from './app.service';
import { LayoutService } from 'template/layout.service';
import { MessagingService } from './shared/services/messaging.service';
import { BehaviorSubject } from 'rxjs';
import { VersionService } from './shared/services/version.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styles: [':host { display: block; }']
})
export class AppComponent implements OnInit {
  title: string;
  message: BehaviorSubject<any>;
  currentVersion: string;

  constructor(private router: Router, private appService: AppService, private layoutService: LayoutService, private messagingService: MessagingService, private versionService: VersionService) {
    // Subscribe to router events to handle page transition
    this.router.events.subscribe(this.navigationInterceptor.bind(this));

    // Disable animations and transitions in IE10 to increase performance
    if (typeof document['documentMode'] === 'number' && document['documentMode'] < 11) {
      const style = document.createElement('style');
      style.textContent = `
        * {
          -ms-animation: none !important;
          animation: none !important;
          -ms-transition: none !important;
          transition: none !important;
        }`;
      document.head.appendChild(style);
    }

    this.versionService.remoteConfigInit();

  }



  ngOnInit(): void {
    this.messagingService.requestPermission();
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }

  private navigationInterceptor(e: RouterEvent) {
    if (e instanceof NavigationStart) {
      // Set loading state
      document.body.classList.add('app-loading');
    }

    if (e instanceof NavigationEnd) {
      // Scroll to top of the page
      this.appService.scrollTop(0, 0);
    }

    if (e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError) {
      // On small screens collapse sidenav
      if (this.layoutService.isSmallScreen() && !this.layoutService.isCollapsed()) {
        setTimeout(() => this.layoutService.setCollapsed(true, true), 10);
      }

      // Remove loading state
      document.body.classList.remove('app-loading');

      // Remove initial splash screen
      const splashScreen = document.querySelector('.app-splash-screen');
      if (splashScreen) {
        splashScreen['style'].opacity = 0;
        setTimeout(() => splashScreen && splashScreen.parentNode && splashScreen.parentNode.removeChild(splashScreen), 300);
      }
    }
  }
}
