export interface inforProps {
  name: string;
  address: string;

  email: string;
  fullName: string;
  note: string;
  phone: number;
}
export interface productProps {
  OrderId: string;
  code: number;
  day: string;
  id: number;
  status: string;
  time: string;
  total: number;
  cartTotalss: any[];
  infor: inforProps;
}

export interface ViewCustomerProps {
  OrderId: string;
  email: string;
  id: number;
  order: number;
  spending: number;
  user: string;
  product: productProps;
}
