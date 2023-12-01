"use client";
import { createContext, useContext, useRef, useState } from "react";

import { CarProps } from "@/types";
import { quickSort } from ".";

const initialCars = useRef<CarProps[]>([]);
const carsContext = createContext<CarProps[]>([] as CarProps[]);
const isSortedContext = createContext(false);

const carsUpdateContext = createContext<Function>(() => {});
const sortUpdateContext = createContext<Function>(() => {});

interface GlobalStateProviderProps {
  children: React.ReactNode;
}

export const useInitialCars = (data: CarProps[]) => initialCars.current = data;
export const useCars = () => useContext(carsContext);
export const useIsSorted = () => useContext(isSortedContext);
export const useCarsUpdate = () => useContext(carsUpdateContext);
export const useSortUpdate = () => useContext(sortUpdateContext);

const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [isSorted, setIsSorted] = useState(false);

  function setCarsContext(cars: CarProps[]) {
    quickSort(cars, 0, cars.length - 1);
    setCars(cars);
  }

  function setIsSortedContext(isSorted: boolean) {
    setIsSorted((condition) => !condition);
  }

  return (
    <carsContext.Provider value={cars}>
      <carsUpdateContext.Provider value={setCarsContext}>
        <isSortedContext.Provider value={isSorted}>
          <sortUpdateContext.Provider value={setIsSortedContext}>
            {children}
          </sortUpdateContext.Provider>
        </isSortedContext.Provider>
      </carsUpdateContext.Provider>
    </carsContext.Provider>
  );
};

export default GlobalStateProvider;
