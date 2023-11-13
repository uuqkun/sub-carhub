
import { CarProps, FilterProps } from "@/types";
import { partition } from "./quicksort";


// Quick sort algorithm starts
export function quickSort(data: CarProps[], low: number, high: number): void {
    if (low < high) {
        const partitionIndex = partition(data, low, high);
        quickSort(data, low, partitionIndex - 1);
        quickSort(data, partitionIndex + 1, high);
    }
}

// Data Sorting by using JavaScript built in sorting algorithm
export function basicSort(data: CarProps[]) {

    return data.sort((a, b) => {
        let aCar = calculateCarRent(a.city_mpg, a.year);
        let bCar = calculateCarRent(b.city_mpg, b.year);

        return aCar - bCar;
    });
}

export async function fetchCars(filters: FilterProps) {

    const { manufacturer, year, model, limit, fuel } = filters;

    
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        {
            headers: {
                'X-RapidAPI-Key': '0fd4dad000msh0b64d9a2bffa832p174c5bjsn6de351fb3d8c',
                'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
            },
        }
    );
    

    const data = [
        {
            city_mpg: 18,
            class: 'standard sport utility vehicle',
            combination_mpg: 19,
            cylinders: 4,
            displacement: 2,
            drive: '4wd',
            fuel_type: 'gas',
            highway_mpg: 21,
            make: 'land rover',
            model: 'defender 90',
            transmission: 'a',
            year: 2023
        },
        {
            city_mpg: 15,
            class: 'small sport utility vehicle',
            combination_mpg: 28,
            cylinders: 4,
            displacement: 2.5,
            drive: 'fwd',
            fuel_type: 'gas',
            highway_mpg: 32,
            make: 'kia',
            model: 'sportage fwd',
            transmission: 'a',
            year: 2023
        },
        {
            city_mpg: 23,
            class: 'standard sport utility vehicle',
            combination_mpg: 19,
            cylinders: 4,
            displacement: 2,
            drive: '4wd',
            fuel_type: 'gas',
            highway_mpg: 21,
            make: 'land rover',
            model: 'defender 90',
            transmission: 'a',
            year: 2023
        },
        {
            city_mpg: 25,
            class: 'small sport utility vehicle',
            combination_mpg: 28,
            cylinders: 4,
            displacement: 2.5,
            drive: 'fwd',
            fuel_type: 'gas',
            highway_mpg: 32,
            make: 'kia',
            model: 'sportage fwd',
            transmission: 'a',
            year: 2023
        },
    ]
    return await response.json();
    // return data;

}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const milleageFactor = 0.1;
    const ageFactor = 0.05;

    // additional rate based on milleage & age
    const milleageRate = city_mpg * milleageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day  
    const rentalRatePerDay = basePricePerDay + milleageRate + ageRate;

    return parseFloat(rentalRatePerDay.toFixed(2));
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname;
}
