import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import Modal from "react-modal";
import Swal from "sweetalert2";
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

  // modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // get gallery data from database
  const {
    isLoading: galleryDataPending,
    error,
    refetch: galleryDataRefetch,
  } = useQuery({
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
      <div className="flex justify-center items-center text-center h-screen">
        <p className="text-red-500 font-semibold text-center ">
          Something went wrong! Please try again later.
        </p>
      </div>
    );
  }

  const customStyles = {
    overlay: {
      backgroundColor: "#0538915e",
      position: "fixed",
      zIndex: 9999,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#282e38",
    },
  };
  Modal.setAppElement("#root");

  // gallery data add to the database
  const galleryDataAdd = async (e) => {
    e.preventDefault();
    const from = e.target;
    const galleryName = from.galleryName.value;
    const galleryCategory = from.galleryCategory.value;
    const galleryDescription = from.galleryDescription.value;
    const galleryImage = from.galleryImage.files[0];

    const imgBBApiKey = import.meta.env.VITE_IMGBB_API_KEY;

    // Create FormData and append the image file
    const formData = new FormData();
    formData.append("image", galleryImage);

    try {
      // Upload image to ImgBB
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${imgBBApiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        const imageUrl = result.data.url;
        // gallery data
        const galleryData = {
          title: galleryName,
          category: galleryCategory,
          description: galleryDescription,
          image: imageUrl,
        };

        // Add the gallery data to the database
        const postGalleryData = await axiosPublic.post("/gallery", galleryData);
        const resPostGalleryData = await postGalleryData.data;
        if (resPostGalleryData.success) {
          Swal.fire({
            title: "Gallery Added Successfully.",
            icon: "success",
            timer: 1000,
          });
          galleryDataRefetch();
          setModalIsOpen(false);
        }
      } else {
        Swal.fire({
          title: "Error Uploading Image!",
          icon: "error",
          timer: 1000,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error Adding Gallery!",
        icon: "error",
        timer: 1000,
      });
    }
  };

  return (
    <>
      {/* gallery page */}
      <section className="bg-secondary py-6 min-h-screen">
        {/* new gallery add Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => {
            setModalIsOpen(false);
          }}
          style={customStyles}
          className={""}
        >
          <form onSubmit={galleryDataAdd} className="flex flex-col gap-4">
            <div className="flex flex-col space-y-2">
              <label
                className="text-text-color text-sm font-semibold capitalize"
                htmlFor="fullName"
              >
                Gallery Name
              </label>
              <input
                placeholder="Enter Gallery Name.."
                className="outline-none rounded text-text-color border-gray-600 border p-2 text-sm bg-primary"
                type="text"
                name="galleryName"
                id="galleryName"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                className="text-text-color text-sm font-semibold capitalize"
                htmlFor="fullName"
              >
                Gallery Category
              </label>
              <input
                placeholder="Enter Gallery Category.."
                className="outline-none rounded text-text-color border-gray-600 border p-2 text-sm bg-primary"
                type="text"
                name="galleryCategory"
                id="galleryCategory"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                className="text-text-color text-sm font-semibold capitalize"
                htmlFor="fullName"
              >
                Gallery Description
              </label>
              <input
                placeholder="Enter Gallery Short Description.."
                className="outline-none rounded text-text-color border-gray-600 border p-2 text-sm bg-primary"
                type="text"
                name="galleryDescription"
                id="galleryDescription"
                required
              />
            </div>{" "}
            <div className="flex flex-col space-y-2">
              <label
                className="text-text-color text-sm font-semibold capitalize"
                htmlFor="fullName"
              >
                Gallery Image
              </label>
              <input
                placeholder="Enter Gallery Short Description.."
                className="outline-none rounded text-text-color border-gray-600 border p-2 text-sm bg-primary"
                type="file"
                name="galleryImage"
                id="galleryImage"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#71b6f9] rounded-md text-white p-2 hover:bg-[#3973ad] transition-all duration-300"
            >
              Add
            </button>
          </form>

          <button
            onClick={() => {
              setModalIsOpen(false);
            }}
            className="absolute top-2 right-2 text-white font-semibold text-2xl my-transition hover:text-red-400"
          >
            <IoMdCloseCircle></IoMdCloseCircle>
          </button>
        </Modal>

        {/* add new gallery data */}
        {allGalleryData.length < 1 && (
          <div className="container flex justify-center lg:justify-end">
            <button
              onClick={() => {
                setModalIsOpen(true);
              }}
              className="text-white rounded-md px-5 py-2 bg-blue-400 my-transition hover:bg-blue-400/50 text-sm"
            >
              Add New Gallery
            </button>
          </div>
        )}

        {allGalleryData?.length > 0 ? (
          <div className="container -mt-6 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-center  flex-wrap md:justify-between items-center gap-4">
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
              {/* add new gallery data */}
              <button
                onClick={() => {
                  setModalIsOpen(true);
                }}
                className="text-white rounded-md px-5 py-2 bg-blue-400 my-transition hover:bg-blue-400/50 text-sm"
              >
                Add New Gallery
              </button>
            </div>

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
          <div className="flex justify-center items-center text-center pt-4">
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
