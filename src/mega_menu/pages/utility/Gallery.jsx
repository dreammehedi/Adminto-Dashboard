import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Loader from "../../../shared/loader/Loader";
const galleryData = [
  {
    image:
      "https://i.ibb.co/mBJP91S/elegant-beautiful-sunset-evening-scene-background-1055-17736.jpg",
    title: "Sunset Over the Mountains",
    category: "Natural",
    description:
      "A breathtaking sunset view with vibrant colors over the mountain range.",
  },
  {
    image: "https://i.ibb.co/59nnh8s/path-forest-23-2147632811.jpg",
    title: "Forest Path",
    category: "Natural",
    description:
      "A peaceful forest path surrounded by tall trees and soft light.",
  },
  {
    image:
      "https://i.ibb.co/dMc7XgV/modern-skyline-building-banner-with-eye-catching-view-1017-50542.jpg",
    title: "Urban Skyline",
    category: "Photography",
    description: "A stunning view of the city skyline captured at dusk.",
  },
  {
    image:
      "https://i.ibb.co/3Ty6p1w/futuristic-half-robot-tiger-23-2151558852.jpg",
    title: "Wildlife in Action",
    category: "Photography",
    description: "A close-up shot of wildlife in its natural habitat.",
  },
];

const uniqueCategories = Array.from(
  new Set(galleryData.map((item) => item.category))
);

function Gallery() {
  const axiosPublic = useAxiosPublic();
  // filter gallery data by category
  const [filterCategory, setFilterCategory] = useState(galleryData);

  // selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // get gallery data from database
  const { data: getGalleryData = [], isPending: galleryDataPending } = useQuery(
    {
      queryKey: ["galleryData"],
      queryFn: async () => {
        const fetchData = await axiosPublic.get("/gallery");
        const resData = await fetchData.data.payload;
        return resData;
      },
    }
  );

  return (
    <>
      {/* gallery page */}
      <section className="bg-secondary py-6 min-h-screen">
        {galleryDataPending && <Loader></Loader>}
        {getGalleryData?.length < 0 ? (
          <div className="flex justify-center items-center text-center">
            <p className="text-red-500 font-semibold text-center">
              No Data Found!
            </p>
          </div>
        ) : (
          <div className="container -mt-6 overflow-hidden">
            {/* category */}
            <ul className="flex items-center gap-4 md:gap-6 text-white text-sm font-medium">
              <li
                onClick={() => {
                  setSelectedCategory("All");
                  setFilterCategory(galleryData);
                }}
              >
                <button
                  className={selectedCategory === "All" ? "text-blue-400" : ""}
                >
                  All
                </button>
              </li>
              {uniqueCategories.map((category, ind) => {
                return (
                  <li
                    onClick={() => {
                      setSelectedCategory(category);
                      setFilterCategory(
                        galleryData.filter((item) => item.category === category)
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
              {getGalleryData?.map((gallery, ind) => {
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

                      <p className="text-text-color text-sm">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Gallery;
