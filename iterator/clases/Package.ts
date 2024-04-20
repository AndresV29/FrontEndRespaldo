export class Package{
  productID: any;
    routeId: any;
    status: any;
    date: any;
    //Valores por defecto si no recibe
    constructor(productID: any = 0, routeId: any = 0, staus: any = 'no status', date:any = Date.now) {
      this.productID = productID;
      this.routeId = routeId;
      this.status = staus;
      this.date = date;
    }
}