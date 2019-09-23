import {data} from './data.json'


export function getEmails() {
    return data;
  }

export function searchEmail(email){
    return data.find(e =>e.email === email );
}