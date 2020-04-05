import { IBaseModel } from '@app/shared/models/base.model';

/**
 * Global settings for teams, roles, etc
 * @author chollenbeck
 */
export interface IAppSettings extends IBaseModel{
  teams: string[];
}
