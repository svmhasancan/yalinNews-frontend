import { NewsDetailDto } from "./newsDetailDto";
import { ResponseModel } from "./responseModel";

export interface NewsDetailDtoResponseModel extends ResponseModel{
    data : NewsDetailDto[];   
}