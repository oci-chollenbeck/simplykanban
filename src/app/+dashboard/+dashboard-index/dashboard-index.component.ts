import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { AuthService } from '@app/+auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { APP_ROUTE_NAMES } from '@app/app.routes.names';
import { BoardService } from '@app/+board/services/board.service';
import { IBoard } from '@app/+board/models/board.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardDetailsComponent } from '@app/+card/+card-details/card-details.component';

@Component({
  selector: 'app-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: []
})
export class DashboardIndexComponent implements OnInit {
  user: firebase.User;
  today: number;

  private defaultBoard: IBoard;


  constructor(private appService: AppService, private authService: AuthService, private toastr: ToastrService, private router: Router, private boardService: BoardService, private modalService: NgbModal) {
    this.appService.pageTitle = 'Dashboard';

    this.today = Date.now();
  }

  ngOnInit(): void {
    this.authService.getCurrentUser$().subscribe(
      user => {
        if (user) {
          this.user = user;
          let initials = '';

          this.user.displayName.split(' ').forEach(val => {
            initials += val.substr(0, 1).toUpperCase();
          });

          this.defaultBoard = { name: 'New Board', labelNames: {}, boardStates: [], memberIds: [this.user.uid], teamName: null, backgroundColor: '#ebebeb', members: [{ fullName: this.user.displayName, initials: initials }] };
        }
      }
    );
  }

  cardDetails() {
    this.modalService.open(CardDetailsComponent);
  }

  createBoard() {
    this.boardService.add(this.defaultBoard).then(
      (newBoard) => {
        this.toastr.info('Creating new board');
        this.router.navigate(['/', APP_ROUTE_NAMES.BOARD, newBoard.id]);
      }
    );
  }

}
