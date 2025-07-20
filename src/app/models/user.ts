// user.ts

import {BaseResponse} from "./base"
export interface LoginResponse extends BaseResponse {
    token: string,
    expires_in: Number
}

