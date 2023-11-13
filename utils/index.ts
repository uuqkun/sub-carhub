
import { FilterProps } from "@/types";
import { sort } from "./sort";


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

    const result = await response.json();

    /*
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
        {
            city_mpg: 23,
            class: 'small sport utility vehicle',
            combination_mpg: 25,
            cylinders: 4,
            displacement: 2.5,
            drive: 'awd',
            fuel_type: 'gas',
            highway_mpg: 28,
            make: 'kia',
            model: 'sportage awd',
            transmission: 'a',
            year: 2023
        },
        {
            city_mpg: 19,
            class: 'standard sport utility vehicle',
            combination_mpg: 21,
            cylinders: 4,
            displacement: 2,
            drive: '4wd',
            fuel_type: 'gas',
            highway_mpg: 22,
            make: 'land rover',
            model: 'discovery',
            transmission: 'a',
            year: 2023
        },
        {
            city_mpg: 19,
            class: 'standard sport utility vehicle',
            combination_mpg: 22,
            cylinders: 6,
            displacement: 3,
            drive: '4wd',
            fuel_type: 'gas',
            highway_mpg: 25,
            make: 'land rover',
            model: 'discovery mhev',
            transmission: 'a',
            year: 2023
        },
        {
            city_mpg: 17,
            class: 'standard sport utility vehicle',
            combination_mpg: 18,
            cylinders: 4,
            displacement: 2,
            drive: '4wd',
            fuel_type: 'gas',
            highway_mpg: 20,
            make: 'land rover',
            model: 'defender 110',
            transmission: 'a',
            year: 2023
        },
        {
            city_mpg: 18,
            class: 'standard sport utility vehicle',
            combination_mpg: 20,
            cylinders: 6,
            displacement: 3,
            drive: '4wd',
            fuel_type: 'gas',
            highway_mpg: 23,
            make: 'land rover',
            model: 'defender 110 mhev',
            transmission: 'a',
            year: 2023
        },
        {
            city_mpg: 18,
            class: 'standard sport utility vehicle',
            combination_mpg: 20,
            cylinders: 6,
            displacement: 3,
            drive: '4wd',
            fuel_type: 'gas',
            highway_mpg: 23,
            make: 'land rover',
            model: 'defender 90 mhev',
            transmission: 'a',
            year: 2023
        },
        {
            city_mpg: 15,
            class: 'standard sport utility vehicle',
            combination_mpg: 16,
            cylinders: 8,
            displacement: 5,
            drive: '4wd',
            fuel_type: 'gas',
            highway_mpg: 19,
            make: 'land rover',
            model: 'defender 90',
            transmission: 'a',
            year: 2023
        },
        {
            city_mpg: 14,
            class: 'standard sport utility vehicle',
            combination_mpg: 16,
            cylinders: 8,
            displacement: 5,
            drive: '4wd',
            fuel_type: 'gas',
            highway_mpg: 19,
            make: 'land rover',
            model: 'defender 110',
            transmission: 'a',
            year: 2023
        }
    ];
    
    let sortedData__test = sort(data);

    return sortedData__test;
    */

    return sort(result);
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

    return rentalRatePerDay.toFixed(2);
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname;
}
