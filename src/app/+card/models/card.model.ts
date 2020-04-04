import { IBaseModel } from '@app/shared/models/base.model';

/**
 * Quick view card without any details
 * @author chollenbeck
 */
export interface ICard extends IBaseModel {
  title: string;
  description: string;
  labels: string[];
  boardId: string;
  boardStateId: string;
  listPosition: number;

  // Synced Fields
  boardName: string;
  boardStateName: string;

}
