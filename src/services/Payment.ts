import { Payment } from "../components/dashboard-tables/Payment";

const generateUniqueId = (): string => {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};

const generateRandomDate = (start: Date, end: Date): Date => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date;
};

const phoneNumbers = [
  "+123-456-7890",
  "+234-567-8901",
  "+345-678-9012",
  "+456-789-0123",
  "+567-890-1234",
];

const mockProducts: Payment[] = Array.from({ length: 30 }, () => ({
  id: generateUniqueId(),
  name: "Eslam Wael",
  phone: phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)],
  email: "solomdev0@gmail.com",
  date: generateRandomDate(new Date(2024, 0, 1), new Date()),
  days: "0 days",
  status: "Send reminder",
  state: "",
}));

export class PaymentService {
  static getProductsMini(): Promise<Payment[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 1000);
    });
  }
}
