import { Family } from "../components/dashboard-tables/Family";

const generateUniqueId = (): string => {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};

const name = ["Zina", "Jana", "Mawadda"];

const phone = ["01214348488", "01514148488", "01114344488"];

const mockProducts: Family[] = Array.from({ length: 3 }, (_, index) => ({
  id: generateUniqueId(),
  name: name[index],
  phone: phone[index],
}));

export class FamilyService {
  static getProductsMini(): Promise<Family[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 1000);
    });
  }
}
