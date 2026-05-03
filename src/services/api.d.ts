export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export declare function sendContact(data: ContactData): Promise<any>;