import { IBaseModelVM } from '@app/shared/models/base.model';
import { IBoardMember } from '@app/+board/models/board-member.model';
import { CardAttachmentVM } from './card-attachment.model';
import { CardChecklistItemVM } from './card-checklist-item.model';
import { CardActionVM } from './card-action.model';

export interface CardVM extends IBaseModelVM {

  attachments: CardAttachmentVM[];
  checklist: CardChecklistItemVM[];
  membersAssigned: IBoardMember[];
  actions: CardActionVM[];
  labels: string[]; // corresponds to colorids from board lables
  listId: string;
  position: number;
}
