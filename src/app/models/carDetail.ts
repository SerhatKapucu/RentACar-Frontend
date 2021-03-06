import { CarImage } from "./carImage";

export interface CarDetail{
    carId:number;
    brandId:number;
    colorId:number;
    carName:string;
    imagePath:string;
    brandName:string;
    colorName:string;
    modelYear:number;
    dailyPrice:number;
    description:string;
    image:CarImage[];
}