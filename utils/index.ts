
import { FilterProps } from "@/types";


export async function fetchCars(filters: FilterProps) {
    const headers = {
        'X-RapidAPI-Key': '0fd4dad000msh0b64d9a2bffa832p174c5bjsn6de351fb3d8c',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const { manufacturer, year, model, limit, fuel } = filters;

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        {
            headers: headers,
        }
    );

    const result = await response.json();

    return result;
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
