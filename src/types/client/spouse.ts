import ClientAddress from './address'
import { Gender } from './enums'

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