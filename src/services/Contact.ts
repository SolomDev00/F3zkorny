import { Contact } from "../components/dashboard-tables/Contact";

const generateUniqueId = (): string => {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};

const name = ["Ahmed", "Solom", "Ziad"];

const phone = ["01014348488", "01014148488", "01014344488"];

const mockProducts: Contact[] = Array.from({ length: 3 }, (_, index) => ({
  id: generateUniqueId(),
  name: name[index],
  phone: phone[index],
}));

export class ContactService {
  static getProductsMini(): Promise<Contact[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 1000);
    });
  }
}
