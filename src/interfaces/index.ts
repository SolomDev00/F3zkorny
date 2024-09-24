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

export interface HadithsDataEntry {
  text: string;
  disc: string;
}

export interface HadithsCategory {
  id: number;
  name: string;
  icon: string;
  data: HadithsDataEntry[];
}

export interface HadithsContextProps {
  HadithsCategories: HadithsCategory[];
  currentCategory: HadithsCategory | null;
  currentHadithsItem: HadithsDataEntry | null;
  currentHadithsIndex: number;
  selectCategory: (id: number) => void;
  navigateHadiths: (direction: "next" | "prev") => void;
}
