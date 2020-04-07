import { Component } from '@angular/core';
import { AppService } from '@app/app.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: []
})
export class CardDetailsComponent {

  loading: boolean;

  constructor(private appService: AppService, private toastr: ToastrService) {
    this.appService.pageTitle = 'Card Details';

  }

  statuses = {
    1: { title: 'In Progress', color: 'primary' },
    2: { title: 'Pending', color: 'warning' }
  };

  // Tags
  taskTags = {
    clients: { title: 'Clients', color: 'success' },
    important: { title: 'Important', color: 'danger' },
    social: { title: 'Social', color: 'info' },
    other: { title: 'Other', color: 'warning' }
  };

  projectData = {
    title: 'New Card',
    status: 1,
    priority: 1,
    tasks: 44,
    completedTasks: 29,

    description: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque magna augue, euismod at tortor et, laoreet maximus risus. Ut neque felis, luctus ut rhoncus id, elementum vitae lorem. Ut ac turpis sit amet lorem volutpat tincidunt. Vestibulum dui sapien, porttitor eget pellentesque id, ultrices id ipsum. Nam augue mi, maximus ut tortor et, fermentum efficitur diam. Suspendisse eget urna lorem. Fusce ligula augue, malesuada ullamcorper est nec, commodo laoreet tellus.</p>
    `,

    created: '02/01/2018',
    lastUpdate: '02/18/2018',
    deadline: '03/12/2018',

    hourRate: 35,
    hours: 74,

    tags: ['Development', 'Frontend', 'Backend', 'Design'],

    createdBy: {
      name: 'Mae Gibson'
    },

    client: {
      name: 'Company Ltd.'
    },

    leaders: [
      { avatar: '2-small.png', name: 'Mike Greene' }
    ],

    team: [
      { avatar: '2-small.png', name: 'Leon Wilson' },
      { avatar: '2-small.png', name: 'Allie Rodriguez' },
      { avatar: '2-small.png', name: 'Kenneth Frazier' },
      { avatar: '2-small.png', name: 'Nellie Maxwell' }
    ],

    attachments: [
      { name: 'image_1.jpg', size: '527KB', path: 'assets/img/bg/5.jpg' },
      { name: 'image_2.jpg', size: '269KB', path: 'assets/img/bg/6.jpg' },
      { name: 'assignment_letter.pdf', size: '156KB', path: '/path/to/assignment_letter.pdf' },
      { name: 'app_update.zip', size: '1.35MB', path: '/path/to/app_update.zip' }
    ],

    taskSections: [{
      title: 'To Do',
      tasks: [
        { text: 'Update User profile page', tags: ['other'], completed: false },
        { text: 'Add images to the product gallery', completed: false },
        { text: 'Create invoice template', completed: false }
      ]
    }],

    discussion: [{
      text: 'Pellentesque faucibus, nisl vel luctus porttitor, leo felis pellentesque augue, dignissim tempus risus odio sed lorem. Nunc nec malesuada nunc, ut mollis dui.',
      date: '2:33 am',
      user: { avatar: '2-small.png', name: 'Mike Greene' }
    }, {
      text: 'Quisque sodales, tortor et elementum dapibus, nisl urna hendrerit metus, a rhoncus magna sem in libero.',
      date: '2:34 am',
      user: { avatar: '2-small.png', name: 'Nelle Maxwell' }
    }, {
      text: 'Cum ea graeci tractatos.',
      date: '2:38 am',
      user: { avatar: '2-small.png', name: 'Mike Greene' }
    }, {
      text: 'Cras ultrices, dui id vulputate laoreet, diam orci semper ipsum, a aliquet nunc quam vitae turpis. Donec cursus tortor nec turpis semper, ac luctus mauris sagittis.',
      date: '2:38 am',
      user: { avatar: '2-small.png', name: 'Leon Wilson' }
    }, {
      text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      date: '2:38 am',
      user: { avatar: '2-small.png', name: 'Allie Rodriguez' }
    }, {
      text: 'Aliquam ornare nisl semper nisl porttitor commodo vel vel libero.',
      date: '2:38 am',
      user: { avatar: '2-small.png', name: 'Kenneth Frazier' }
    }],

    activities: [
      {
        type: 'message',
        data: {text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},
        date: '2 hours',
        user: { avatar: '2-small.png', name: 'Allie Rodriguez' }
      }, {
        type: 'message',
        data: {text: 'Aliquam ornare nisl semper nisl porttitor commodo vel vel libero.'},
        date: '2 hours',
        user: { avatar: '2-small.png', name: 'Kenneth Frazier' }
      },
      {
        type: 'new_task',
        date: '2 hours',
        user: { avatar: '2-small.png', name: 'Mike Greene' },
        data: { taskTitle: 'Create invoice template' }
      }, {
        type: 'pushed_commit',
        date: '2 hours',
        user: { avatar: '2-small.png', name: 'Leon Wilson' },
        data: { commitId: 950458 }
      }, {
        type: 'pushed_commit',
        date: '2 hours',
        user: { avatar: '2-small.png', name: 'Allie Rodriguez' },
        data: { commitId: 950457 }
      }, {
        type: 'pushed_commit',
        date: '2 hours',
        user: { avatar: '2-small.png', name: 'Nellie Maxwell' },
        data: { commitId: 950456 }
      }, {
        type: 'completed_task',
        date: '2 hours',
        user: { avatar: '2-small.png', name: 'Kenneth Frazier' },
        data: { taskTitle: 'Google AdWords campain graphics' }
      }, {
        type: 'pushed_commit',
        date: '2 hours',
        user: { avatar: '2-small.png', name: 'Kenneth Frazier' },
        data: { commitId: 950455 }
      }, {
        type: 'new_task',
        date: '2 hours',
        user: { avatar: '2-small.png', name: 'Nellie Maxwell' },
        data: { taskTitle: 'Edit the draft for the icons' }
      }, {
        type: 'new_participant',
        date: '2 hours',
        user: { avatar: '2-small.png', name: 'Mike Greene' },
        data: { userName: 'Nellie Maxwell' }
      }]
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

  completedPercent(tasks, completed) {
    return Math.round((completed / tasks) * 100);
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
