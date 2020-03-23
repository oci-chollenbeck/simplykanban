import { IBaseModelVM } from '@app/shared/models/base.model';
import { IBoardOptions } from './board-options.model';
import { IBoardList } from './board-list.model';
import { IBoardMember } from './board-member.model';
import { CardVM } from '@app/+card/models/card.model';

// *: Create SCSS classes for background color & text color combos for each of the lables
export class BoardVM extends IBaseModelVM {

  name: string;
  options: IBoardOptions;
  description: string;
  labelNames: { [key: string]: string }[]; // Array of key/string pairs.
  lists: IBoardList[];
  members: IBoardList[];
  hexColor: string;
  teamId: string; //Development, Marketing, etc etc. User Defined

  archivedCards?: CardVM[]; //Holds archived cards if the user wants to see them

  // Constructor
  constructor() {
    super();

    this.name = null;
    this.options = { isPrivate: true};
    this.description = null;
    this.lists = [];
    this.members = [];
    this.hexColor = '#FFFFFF';
    this.labelNames = [
      { green: '' },
      { lightgreen: '' },
      { red: '' },
      { lightred: '' },
      { purple: '' },
      { lightpurple: '' },
      { blue: '' },
      { lightblue: '' },
      { black: '' },
      { gray: '' }
    ];

  }

}
