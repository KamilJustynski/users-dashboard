export interface UsersGeo {
  lat: string;
  lng: string;
}

export interface UsersAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UsersGeo;
}

export interface UsersCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UsersAddress;
  phone: string;
  website: string;
  company: UsersCompany;
}

export interface UserState {
  data: Users[] | null;
  loading: boolean;
  error: string | null;
}
