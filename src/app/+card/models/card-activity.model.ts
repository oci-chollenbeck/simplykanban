import { IBaseModel } from '@app/shared/models/base.model';


export interface ICardActivity extends IBaseModel {
  cardId: string;
  content: string;
  timestamp: string;
  ownerId: string;
  type: ActionType;
}

export enum ActionType {
  COMMENT,
  CREATED,
  UPDATED,
  LABEL_ADDED,
  LABEL_REMOVED,
  ATTACHMENT_ADDED,
  ATTACHMENT_REMOVED,
  MEMBER_ADDED,
  MEMBER_REMOVED
}
