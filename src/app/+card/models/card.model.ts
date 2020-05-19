import { IBaseModel } from '@app/shared/models/base.model';
import { IBoardMember } from '@app/+board/models/board-member.model';
import { IBoardLabel } from '@app/+board/models/board-label.enum';

/**
 * Quick view card without any details
 * @author chollenbeck
 */
export interface ICard extends IBaseModel {
  title: string;
  description: string;
  labels: {colorId: IBoardLabel, title: string}[];
  boardId: string;
  boardStateId: string;
  listPosition: number;
  deadline?: string;
  hoursEstimate: number;
  hoursActual: number;


  // Synced Fields
  boardName: string;
  boardStateName: string;
  members: IBoardMember[]

}
