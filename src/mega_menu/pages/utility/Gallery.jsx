import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Loader from "../../../shared/loader/Loader";

function Gallery() {
  const axiosPublic = useAxiosPublic();

  // all gallery data
  const [allGalleryData, setAllGalleryData] = useState([]);

  // all gallery categories
  const [allGalleryCategory, setAllGalleryCategory] = useState([]);

  // selected category
  const [selectedCategory, setSelectedCategory] = useState("");

  // filtered gallery data based on category
  const [filterCategory, setFilterCategory] = useState([]);

  // get gallery data from database
  const { isLoading: galleryDataPending, error } = useQuery({
    queryKey: ["galleryData"],
    queryFn: async () => {
      const fetchData = await axiosPublic.get("/gallery");
      const resData = await fetchData.data;
      setAllGalleryData(resData.payload);
      setAllGalleryCategory(resData.allCategory);
      return resData;
    },
  });

  // data is pending
  if (galleryDataPending) {
    return <Loader />;
  }

  // handle errors
  if (error) {
    return (
      <div className="flex justify-center items-center text-center">
        <p className="text-red-500 font-semibold text-center">
          Something went wrong! Please try again later.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* gallery page */}
      <section className="bg-secondary py-6 min-h-screen">
        {allGalleryData?.length > 0 ? (
          <div className="container -mt-6 overflow-hidden">
            {/* category */}
            <ul className="flex items-center gap-4 md:gap-6 text-white text-sm font-medium">
              {allGalleryCategory.map((category, ind) => {
                return (
                  <li
                    onClick={() => {
                      setSelectedCategory(category);
                      setFilterCategory(
                        allGalleryData.filter(
                          (item) => item.category === category
                        )
                      );
                    }}
                    key={ind}
                  >
                    <button
                      className={
                        selectedCategory === category
                          ? "text-blue-400"
                          : "text-white"
                      }
                    >
                      {category}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* gallery */}
            <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 my-transition">
              {filterCategory.length > 0
                ? filterCategory.map((gallery, ind) => {
                    const { title, description, image, category } = gallery;
                    return (
                      <div
                        key={ind}
                        className="bg-primary rounded-md p-4 h-fit my-transition"
                      >
                        {/* image */}
                        <img
                          className="rounded-md p-1 object-fill w-full h-auto min-h-[120px] my-transition hover:scale-[1.03] hover:cursor-pointer"
                          src={image}
                          alt={title}
                        />
                        {/* content */}
                        <div className="flex flex-col space-y-2 place-items-center text-center py-2 px-4 my-transition">
                          <h5 className="uppercase text-xs text-blue-400 font-bold font-poppins">
                            {category}
                          </h5>
                          <h4 className="font-medium text-lg text-white">
                            {title}
                          </h4>

                          <p className="text-text-color text-sm">
                            {description}
                          </p>
                        </div>
                      </div>
                    );
                  })
                : allGalleryData.map((gallery, ind) => {
                    const { title, description, image, category } = gallery;
                    return (
                      <div
                        key={ind}
                        className="bg-primary rounded-md p-4 h-fit my-transition"
                      >
                        {/* image */}
                        <img
                          className="rounded-md p-1 object-fill w-full h-auto min-h-[120px] my-transition hover:scale-[1.03] hover:cursor-pointer"
                          src={image}
                          alt={title}
                        />
                        {/* content */}
                        <div className="flex flex-col space-y-2 place-items-center text-center py-2 px-4 my-transition">
                          <h5 className="uppercase text-xs text-blue-400 font-bold font-poppins">
                            {category}
                          </h5>
                          <h4 className="font-medium text-lg text-white">
                            {title}
                          </h4>

                          <p className="text-text-color text-sm">
                            {description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center text-center">
            <p className="text-red-500 font-semibold text-center">
              No Data Found!
            </p>
          </div>
        )}
      </section>
    </>
  );
}

export default Gallery;
