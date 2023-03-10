import { sectors } from './sectors.interface';

export interface Startup {
  key?:string;
  name: string;
  logo?: string;
  city?: string;
  sectors: sectors[];
  numberOfEmployees?: number| null;
  yearOfEstablish?: string;
  websiteUrl: string;
  emailAddress: string;
}
