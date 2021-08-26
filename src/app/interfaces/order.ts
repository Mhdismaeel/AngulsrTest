export interface Order {
  OrderDate:Date;
  CustomerId:number;
  OrderDetails:OrderDetail[];
  PaidAmount:number;
}

export interface OrderDetail
{
  ProductId:number;
  Count:number;
  UnitPrice:number;
}
