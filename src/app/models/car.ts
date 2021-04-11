import { Brand } from "./brand";
import { CarImage } from "./carImage";
import { Color } from "./color";

export interface Car{
  id: number;
  brandId: number;
  colorId: number;
  carName: string;
  carImages: CarImage[];
  imagePath:string;
  modelYear: number;
  dailyPrice: number;
  description: string;
  brand: Brand;
  color: Color;
  findexPoint: number;
   
}