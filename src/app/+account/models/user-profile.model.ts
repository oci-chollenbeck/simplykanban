import { IBaseModelVM } from '@app/shared/models/base.model';

export class UserProfileVM extends IBaseModelVM {

  starredBoards: string[]; //Board Ids
  memberships: string[]; // Team memberships

  // Constructor
  constructor() {
    super();
  }
}
