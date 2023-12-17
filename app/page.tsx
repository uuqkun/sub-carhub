import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";

import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";
import About from "@/components/About";

// komponen ini akan di render di server setelah itu di kirim ke client...
// setelah data dari API siap
export default async function Home({ searchParams }: { searchParams: any }) {
  
  // mengambil data dari API berdasarkan query params
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  // kondisi jika data kosong
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  // mengembalikan komponen yang akan di render di client
  return (
    <main className="overflow-hidden">
      {/* Hero section */}
      <Hero />

      <About />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          {/* Custom filter untuk memfilter mobil berdasarkan fuel type ataupun tahun produksi */}
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {/* Data-data mobil akan di petakan (ditampilkan) jika data tidak kosong */}
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, index) => (
                <CarCard car={car} key={index} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
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

// conditional rendering
