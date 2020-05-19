import { IBaseModel } from '@app/shared/models/base.model';


export interface ICardActivity extends IBaseModel {
  cardId: string;
  timestamp: string;
  memberName: string;
  memberInitials: string;
  type: ActionType;

  text?: string;
}

export enum ActionType {
  CREATED,
  UPDATED,
  COMMENT,
  ATTACHMENT_ADDED,
  MEMBER_ADDED
}
