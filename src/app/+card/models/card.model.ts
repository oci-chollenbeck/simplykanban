import { IBaseModelVM } from '@app/shared/models/base.model';
import { BoardMemberVM } from '@app/+board/models/board-member.model';
import { CardAttachmentVM } from './card-attachment.model';
import { CardChecklistItemVM } from './card-checklist-item.model';
import { CardActionVM } from './card-action.model';

export class CardVM extends IBaseModelVM {

  attachments: CardAttachmentVM[];
  checklist: CardChecklistItemVM[];
  membersAssigned: BoardMemberVM[];
  actions: CardActionVM[];
  labels: string[]; // corresponds to colorids from board lables
  listId: string;
  position: number;

  // Constructor
  constructor(){
    super();

    this.attachments = [];
    this.checklist = [];
    this.membersAssigned = [];
    this.actions = [];
    this.labels = [];
    this.listId = null;
    this.position = 99;
  }

}
