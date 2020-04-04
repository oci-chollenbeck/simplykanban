export interface IBaseModel {
  id?: string;
  isActive: boolean;

  createDate: string;
  updateDate: string;

  lastModifiedBy?: string;
}
