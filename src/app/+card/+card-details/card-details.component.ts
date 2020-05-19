import { Component } from '@angular/core';
import { AppService } from '@app/app.service';
import { ToastrService } from 'ngx-toastr';
import { ICard } from '../models/card.model';
import { ICardAttachment } from '../models/card-attachment.model';
import { ICardTodo } from '../models/card-todo.model';
import { ICardActivity, ActionType } from '../models/card-activity.model';
import * as _ from 'lodash';
import { IBoardLabel } from '@app/+board/models/board-label.enum';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: []
})
export class CardDetailsComponent {

  loading: boolean;
  completedCount: number;

  constructor(private appService: AppService, private toastr: ToastrService) {
    this.appService.pageTitle = 'Card Details';
  }

  statuses = {
    1: { title: 'In Progress', color: 'primary' },
    2: { title: 'Pending', color: 'warning' }
  };

  cardAttachments: ICardAttachment[] =
    [
      { fileName: 'image_1.jpg', url: 'assets/img/bg/5.jpg' },
      { fileName: 'image_2.jpg', url: 'assets/img/bg/6.jpg' },
      { fileName: 'assignment_letter.pdf', url: '/path/to/assignment_letter.pdf' },
      { fileName: 'app_update.zip', url: '/path/to/app_update.zip' }
    ];

  cardTodo: ICardTodo[] = [
    { text: 'Update User profile page', isComplete: false },
    { text: 'Add images to the product gallery', isComplete: false },
    { text: 'Create invoice template', isComplete: false }
  ];

  cardActivity: ICardActivity[] = [
    {
      cardId: '1',
      type: ActionType.COMMENT,
      timestamp: '2020-02-02T10:10:00',
      memberName: 'John Doe',
      memberInitials: 'JD'
    }, {
      cardId: '1',
      type: ActionType.CREATED,
      timestamp: '2020-02-02T11:10:00',
      memberName: 'John Doe',
      memberInitials: 'JD'
    }, {
      cardId: '1',
      type: ActionType.UPDATED,
      timestamp: '2020-02-02',
      memberName: 'John Doe',
      memberInitials: 'JD'
    }, {
      cardId: '1',
      type: ActionType.ATTACHMENT_ADDED,
      text: 'filename.png',
      timestamp: '2020-02-02',
      memberName: 'John Doe',
      memberInitials: 'JD'
    }, {
      cardId: '1',
      type: ActionType.MEMBER_ADDED,
      text: 'Jane Doe',
      timestamp: '2020-02-02',
      memberName: 'John Doe',
      memberInitials: 'JD'
    }
  ];

  card: ICard = {
    boardId: '1',
    boardName: 'New Board',
    boardStateId: '1',
    listPosition: 0,
    boardStateName: 'In Progress',
    title: 'New Card',
    description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque magna augue, euismod at tortor et, laoreet maximus risus. Ut neque felis, luctus ut rhoncus id, elementum vitae lorem. Ut ac turpis sit amet lorem volutpat tincidunt. Vestibulum dui sapien, porttitor eget pellentesque id, ultrices id ipsum. Nam augue mi, maximus ut tortor et, fermentum efficitur diam. Suspendisse eget urna lorem. Fusce ligula augue, malesuada ullamcorper est nec, commodo laoreet tellus.
    `,

    createDate: '02/01/2018',
    updateDate: '02/18/2018',
    deadline: '03/12/2018',

    hoursEstimate: 74,
    hoursActual: 44,

    labels: [
      {
        colorId: IBoardLabel.BLACK,
        title: 'Sprint 2'
      }, {
        colorId: IBoardLabel.YELLOW,
        title: 'Needs Info'
      }, {
        colorId: IBoardLabel.GREEN,
        title: 'Dev'
      },
    ],

    members: [
      { id: 'xyz', fullName: 'John Doe', initials: 'JD' }
    ]
  };

  sortablejsOptions: object = {
    animation: 150,
    handle: '.project-task-handle',
    group: {
      name: 'project-task-list',
      put: true,
      pull: true
    }
  };

  completedPercent() {
    this.completedCount = _.filter(this.cardTodo, { isComplete: true }).length;
    return Math.round((this.completedCount / this.cardTodo.length) * 100);
  }

  isImage(file) {
    return /\.jpg$|\.png$|\.gif$/i.test(file.name);
  }

  isFile(file) {
    return !/\.jpg$|\.png$|\.gif$/i.test(file.name);
  }

  fileIcon(file) {
    let icon = 'far fa-file';

    if (/\.zip$|\.tar$|\.tar\.gz$|\.rar$/i.test(file.name)) { icon = 'far fa-file-archive'; }
    if (/\.mp3$|\.wma$|\.ogg$|\.flac$|\.aac$/i.test(file.name)) { icon = 'far fa-file-audio'; }
    if (/\.avi$|\.flv$|\.wmv$|\.mov$|\.mp4$/i.test(file.name)) { icon = 'far fa-file-video'; }
    if (/\.js$|\.es6$|\.ts$/i.test(file.name)) { icon = 'fab fa-js'; }
    if (/\.doc$|\.docx$/i.test(file.name)) { icon = 'far fa-file-word'; }
    if (/\.htm$|\.html$/i.test(file.name)) { icon = 'fab fa-html5'; }
    if (/\.pdf$/i.test(file.name)) { icon = 'far fa-file-pdf'; }
    if (/\.txt$/i.test(file.name)) { icon = 'far fa-file-alt'; }
    if (/\.css$/i.test(file.name)) { icon = 'fab fa-css3'; }

    return icon;
  }

  priorityDropdownVariant(priority) {
    if (priority === 1) { return 'btn-danger'; }
    if (priority === 2) { return 'btn-success'; }
    if (priority === 3) { return 'btn-warning'; }
  }

}
