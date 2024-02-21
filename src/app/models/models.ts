export interface Services {
  id: number;
  name:string;
  description:string;
  price:number;
  selected:boolean;
  custom?: Custom;
}

export interface Custom {
  pages: number;
  lenguages: number;
}

export interface Budget
{
  id: number;
  client: string;
  phone: string;
  email: string;
  serviceName: string[];
  totalPrice: number;
}
