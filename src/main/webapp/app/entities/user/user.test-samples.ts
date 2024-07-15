import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: '5bed8f7b-4038-4a5a-a0a7-048294bb4837',
  login: 'c@h',
};

export const sampleWithPartialData: IUser = {
  id: '551c2ffb-48ac-41d8-9072-226e5494cffe',
  login: '}mCc@nk6Ko',
};

export const sampleWithFullData: IUser = {
  id: '3543e32e-be88-41be-b3dc-6b1302f5ae45',
  login: 'Q!M@W\\mxK\\yM6coT',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
