import { CARD_ACTION_TYPES } from './action-types.const';
import { BoardMemberVM } from '@app/+board/models/board-member.model';

export class CardActionVM {
  type: CARD_ACTION_TYPES;
  member: BoardMemberVM;
  timestamp: string;

  // Constructor
  constructor() {
    this.type = null;
    this.member = null;
    this.timestamp = null;
  }

}
