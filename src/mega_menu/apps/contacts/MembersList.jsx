import { IoMdAddCircleOutline } from "react-icons/io";
const memberListData = [
  {
    profileImage: "https://i.ibb.co/61K8wXk/ahidur-rahman.jpg",
    fullName: "Johnathan Deo",
    mobile: "(123) 123 1234",
    email: "coderthemes@gmail.com",
    location: "USA",
    bio: "Hi, I am Johnathan Deo, the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    profileImage: "https://i.ibb.co/WsXJWvN/favicon.png",
    fullName: "Md. Mehedi Hassan",
    mobile: "+8801830143234",
    email: "dreammehedihassan@gmail.com",
    location: "Mirzapur, Tangail",
    bio: "Hi, I am Md. Mehedi Hassan. I am MERN Stack Developer.",
  },
  {
    profileImage: "https://i.ibb.co/61K8wXk/ahidur-rahman.jpg",
    fullName: "Johnathan Deo",
    mobile: "(123) 123 1234",
    email: "coderthemes@gmail.com",
    location: "USA",
    bio: "Hi, I am Johnathan Deo, standard dummy text specialist since the 1500s.",
  },
  {
    profileImage: "https://i.ibb.co/WsXJWvN/favicon.png",
    fullName: "Md. Mehedi Hassan",
    mobile: "+8801830143234",
    email: "dreammehedihassan@gmail.com",
    location: "Mirzapur, Tangail",
    bio: "Hi, I am Md. Mehedi Hassan. I am MERN Stack Developer.",
  },
  {
    profileImage:
      "https://st3.depositphotos.com/3431221/13621/v/450/depositphotos_136216036-stock-illustration-man-avatar-icon-hipster-character.jpg",
    fullName: "Johnathan Deo",
    mobile: "(123) 123 1234",
    email: "coderthemes@gmail.com",
    location: "USA",
    bio: "Hi, I am Johnathan Deo, providing quality dummy text since the 1500s.",
  },
  {
    profileImage:
      "https://st3.depositphotos.com/3431221/13621/v/450/depositphotos_136216036-stock-illustration-man-avatar-icon-hipster-character.jpg",
    fullName: "Johnathan Deo",
    mobile: "(123) 123 1234",
    email: "coderthemes@gmail.com",
    location: "USA",
    bio: "Hi, I am Johnathan Deo, the industry's trusted dummy text provider.",
  },
  {
    profileImage:
      "https://st3.depositphotos.com/3431221/13621/v/450/depositphotos_136216036-stock-illustration-man-avatar-icon-hipster-character.jpg",
    fullName: "Johnathan Deo",
    mobile: "(123) 123 1234",
    email: "coderthemes@gmail.com",
    location: "USA",
    bio: "Hi, I am Johnathan Deo, offering standard dummy text since the 1500s.",
  },
  {
    profileImage: "https://i.ibb.co/WsXJWvN/favicon.png",
    fullName: "Md. Mehedi Hassan",
    mobile: "+8801830143234",
    email: "dreammehedihassan@gmail.com",
    location: "Mirzapur, Tangail",
    bio: "Hi, I am Md. Mehedi Hassan. I am MERN Stack Developer.",
  },
];

import MemberCard from "../../../components/MemberCard/MemberCard";
function MembersList() {
  return (
    <>
      {/* members list apps */}
      <section className="w-full bg-secondary">
        <div className="container">
          {/*  navbar with sort and search */}
          <div className="p-6 rounded bg-primary flex flex-col gap-4 md:flex-row justify-between items-center mb-4">
            <button className="flex items-center gap-1 text-white bg-green-600 py-2 px-3 rounded text-sm my-transition hover:bg-green-500/50">
              <IoMdAddCircleOutline /> Add contact
            </button>
            <form className="text-gray-400 text-sm flex gap-3 items-center">
              <span>Sort by</span>
              <select
                className="bg-none outline-none rounded py-2 px-3 text-gray-400  bg-primary border border-gray-600 focus:border-gray-500"
                name=""
                id=""
              >
                <option value="All">All</option>
                <option value="Name">Name</option>
                <option value="Followers">Post</option>
                <option value="Following">Following</option>
              </select>
              <input
                className="bg-none outline-none rounded p-2 text-gray-400  bg-primary border border-gray-600 focus:border-gray-500"
                placeholder="Search.."
                type="text"
                name="search"
                id="search"
              />
            </form>
          </div>

          {/* user card list section */}
          <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 pb-6">
            {memberListData.map((member, ind) => (
              <MemberCard key={ind} member={member}></MemberCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MembersList;
