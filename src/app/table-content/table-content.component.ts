import {Component, OnInit} from '@angular/core';
import { Car, User } from '../domain/car';
import { CarService} from '../services/carservice';

@Component({
    selector: 'app-table-content',
    templateUrl: './table-content.component.html',
    styleUrls: ['./table-content.component.css'],
    providers: [CarService]
})
export class TableContentComponent implements OnInit {

    displayDialog: boolean;

    car: Car = new PrimeCar();

    selectedCar: Car;

    newCar: boolean;

    cars: Car[];

    cols: any[];
    userCols: any[];

    users: User[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);

        this.carService.getUsers().then(users => this.users = users);

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        this.userCols = [
            { field: 'name', header: 'Name' },
            { field: 'username', header: 'Name' },
            { field: 'email', header: 'Email' },
            { field: 'website', header: 'Website' }
        ];
    }

    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }

    save() {
        const cars = [...this.cars];
        if (this.newCar) {
            cars.push(this.car);
        } else {
            cars[this.findSelectedCarIndex()] = this.car;
        }
        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    }

    delete() {
        const index = this.findSelectedCarIndex();
        this.cars = this.cars.filter((val, i) => i != index);
        this.car = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }

    cloneCar(c: Car): Car {
        const car = new PrimeCar();
        for (const prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }

    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
}

export class PrimeCar implements Car {

    constructor(public vin?, public year?, public brand?, public color?) {}
}

export class PrimeUser implements User {
    constructor(public name?, public username?, public email?, public website?, ) {}
}
