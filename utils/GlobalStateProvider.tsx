import { createContext, useContext, useState } from "react";

import { CarProps } from "@/types";

const carsContext = createContext<CarProps[]>([] as CarProps[]);
const isSortedContext = createContext(false);

interface GlobalStateProviderProps {
    children: React.ReactNode;
}

function useCars() {
    return useContext(carsContext);
}

function useIsSorted() {
    return useContext(isSortedContext);
}

const GlobalStateProvider = ({ children } : GlobalStateProviderProps) => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [isSorted, setIsSorted] = useState(false);

  function setCarsContext(cars: CarProps[]) {
    setCars(cars);
  }

  function setIsSortedContext(isSorted: boolean) {
    setIsSorted((condition) => !condition);
  }

  return (
    <carsContext.Provider value={cars}>
      <isSortedContext.Provider value={isSorted}>
        {children}
      </isSortedContext.Provider>
    </carsContext.Provider>
  );
};

export default GlobalStateProvider;
