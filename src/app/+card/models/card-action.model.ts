import { CARD_ACTION_TYPES } from './action-types.enum';
import { IBoardMember } from '@app/+board/models/board-member.model';

export class CardActionVM {
  type: CARD_ACTION_TYPES;
  member: IBoardMember;
  timestamp: string;
}
