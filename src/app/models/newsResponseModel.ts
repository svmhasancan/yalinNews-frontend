import { News } from "./news";
import { ResponseModel } from "./responseModel";

export interface NewsResponseModel extends ResponseModel {
    data : News[];
}