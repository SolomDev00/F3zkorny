import { Subscription } from "../components/dashboard-tables/Subscription";

const visaIcon = "../../../../../src/assets/icons/visa.svg";
const generateUniqueId = (): string => {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};

const generateRandomDate = (start: Date, end: Date): Date => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date;
};

const images = [visaIcon, visaIcon, visaIcon, visaIcon];

const amount = ["$1000", "$2000", "$500", "$1500"];

const type = ["Monthly", "Monthly", "Monthly", "Weekly"];

const mockProducts: Subscription[] = Array.from({ length: 4 }, (_, index) => ({
  id: generateUniqueId(),
  subDate: generateRandomDate(new Date(2024, 0, 1), new Date()),
  exDate: generateRandomDate(new Date(2024, 0, 1), new Date()),
  type: type[index],
  amount: amount[index],
  images: [images[index % images.length]],
}));

export class SubscriptionService {
  static getProductsMini(): Promise<Subscription[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 1000);
    });
  }
}
