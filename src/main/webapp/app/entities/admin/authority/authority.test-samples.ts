import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'bd7febc6-0c6c-4722-9534-f491f4de64c9',
};

export const sampleWithPartialData: IAuthority = {
  name: '940b8c3e-190d-4029-af58-292032a2f5e7',
};

export const sampleWithFullData: IAuthority = {
  name: '3417d22f-52de-4d44-a185-24b073594d65',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
