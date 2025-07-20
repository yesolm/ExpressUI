// orders.ts
import {BaseResponse} from "./base";
export interface OrdersResponse extends BaseResponse {
    value: Array<OrderHistoryListItem>;
}

export interface OrderHistoryListItem{
    id: number;
    createdOn: Date,
    subTotal: number,
    orderStatus: number
}