export type TLoginInput = {
  username: string;
  password: string;
};

type TCoordinates = {
  lat: number;
  lng: number;
};

type TAddress = {
  address: string;
  city: string;
  coordinates: Coordinates;
  postalCode: string;
  state: string;
};

type TBank = {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
};

type TCompanyAddress = {
  address: string;
  city: string;
  coordinates: Coordinates;
  postalCode: string;
  state: string;
};

type TCompany = {
  address: CompanyAddress;
  department: string;
  name: string;
  title: string;
};

type TCrypto = {
  coin: string;
  wallet: string;
  network: string;
};

type THair = {
  color: string;
  type: string;
};

export type TUser = {
  address: TAddress;
  age: number;
  bank: TBank;
  birthDate: string;
  bloodGroup: string;
  company: TCompany;
  crypto: TCrypto;
  domain: string;
  ein: string;
  email: string;
  eyeColor: string;
  firstName: string;
  gender: string;
  hair: THair;
  height: number;
  id: number;
  image: string;
  ip: string;
  lastName: string;
  macAddress: string;
  maidenName: string;
  password: string;
  phone: string;
  ssn: string;
  university: string;
  userAgent: string;
  username: string;
  weight: number;
};
