import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[];
  carDetails: CarDetail[];
  carImage: CarImage;
  brands: Brand[];
  brandId: number;
  colors: Color[];
  colorId: Number;
  brandFilterText: string;
  colorFilterText: string;
  filterText: '';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService,
    private colorService: ColorService,
    private brandService: BrandService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
        this.getColors();
        this.getBrands();
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
        this.getColors();
        this.getBrands();
      } else {
        this.getCarDetail();
        this.getImageByCarId(params['']);
        this.getColors();
        this.getBrands();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarDetail() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
    });
  }

  getCarsByBrand(id: number) {
    this.carService.getCarsByBrand(id).subscribe((response) => {
      this.carDetails = response.data;
    });
  }

  getCarsByColor(id: number) {
    this.carService.getCarsByColor(id).subscribe((response) => {
      this.carDetails = response.data;
    });
  }

  getImageByCarId(id: number) {
    this.carImageService.getImageByCarId(id).subscribe((response) => {
      this.carImage = response.data;
    });
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getSelectedBrand(brandId: Number) {
    if (this.brandId == brandId) {
      return true;
    } else {
      return false;
    }
  }

  getSelectedColor(colorId: Number) {
    if (this.colorId == colorId) {
      return true;
    } else {
      return false;
    }
  }
  getCarsByFilter(brandId: Number, colorId: Number) {
    this.carService.getCarsByFilter(brandId, colorId).subscribe((response) => {
      this.carDetails = response.data;
    });
  }

  applyFilter() {
    if (this.brandId != null && this.colorId != null) {
      this.router.navigate([
        '/cars/filter/' + this.brandId + '/' + this.colorId,
      ]);
    } else if (this.colorId != null) {
      this.router.navigate(['/cars/filterColor/' + this.colorId]);
    } else if (this.brandId != null) {
      this.router.navigate(['/cars/filterBrand/' + this.brandId]);
    }
  }
  clearFilter() {
    this.router.navigate(['/cars'])
  }
}
