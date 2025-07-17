import ClientAddress from './address'
import { Gender } from '../constants/enums'

export interface Spouse {
  name?: string;
  surname?: string;
  mailingAddress?: ClientAddress;
  residentialAddress?: ClientAddress;
  title?: string;
  gender?: Gender;
  sin?: string;
  employer?: string;
  occupation?: string;
}