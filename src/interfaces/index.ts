export interface IRegisterInput {
  name: "username" | "email" | "phone" | "password" | "confirm_password";
  placeholder: string;
  type: string;
  forl: string;
  placel: string;
  validation?: {
    pattern?: RegExp;
    required?: boolean;
    minLength?: number;
  };
}

export interface ILoginInput {
  name: "username" | "password";
  placeholder: string;
  type: string;
  forl: string;
  placel: string;
  validation: {
    pattern?: RegExp;
    required?: boolean;
    minLength?: number;
  };
}

export interface HadethDataEntry {
  text: string;
  disc: string;
}

export interface HadethCategory {
  id: number;
  name: string;
  icon: string;
  data: HadethDataEntry[];
}

export interface HadethContextProps {
  hadethCategories: HadethCategory[];
  currentCategory: HadethCategory | null;
  currentHadethItem: HadethDataEntry | null;
  currentHadethIndex: number;
  selectCategory: (id: number) => void;
  navigateHadeth: (direction: "next" | "prev") => void;
}
