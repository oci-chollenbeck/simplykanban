import { IBaseModel } from '@app/shared/models/base.model';
import { IBoardState } from './board-state.model';
import { IBoardMember } from './board-member.model';


export interface IBoard extends IBaseModel {
  name: string;
  labelNames: { [key: string]: string }; // Use IBoardLabel
  boardStates: IBoardState[];
  memberIds: string[];
  backgroundColor: string;

  // Synced Fields
  teamName: string;
  members: IBoardMember[];
}
