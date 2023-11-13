"use client";

import {
  CarCard,
  CustomButton,
  CustomFilter,
  Hero,
  SearchBar,
  ShowMore,
} from "@/components";
import { fetchCars, quickSort } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";
import { useEffect, useState } from "react";
import { CarProps, FilterProps } from "@/types";

export default function Home({ searchParams }: { searchParams: any }) {
  const [cars, setCars] = useState<CarProps>();
  const [isDataEmpty, setIsDataEmpty] = useState(true);

  useEffect(() => {
    fetchCars({
      manufacturer: searchParams.manufacturer || "",
      year: searchParams.year || 2023,
      fuel: searchParams.fuel || "",
      limit: searchParams.limit || 10,
      model: searchParams.model || "",
    })
      .then(res => {
        if (!Array.isArray(res) || res.length < 1 || !res) {
          setCars(res);
          setIsDataEmpty(false);
        }
      })

  }, []);

  function handleSorting(): void {
    // quickSort(allCars, 0, allCars.length - 1);
  }

  return (
    <main className="overflow-hidden">
      {/* Hero section */}
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
            <button onClick={handleSorting}>Ascending</button>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {cars?.map((car, index) => (
                <CarCard car={car} key={index} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > cars.length}
            />
          </section>
        ) : (
          <div className="mt-20">
            <h2 className="font-bold text-center text-[18px]">No results...</h2>
            {/* <p>{allCars?.message}</p> */}
          </div>
        )}
      </div>
    </main>
  );
}
