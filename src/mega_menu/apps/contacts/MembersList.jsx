import { IoMdAddCircleOutline } from "react-icons/io";
function MembersList() {
  return (
    <>
      {/* members list apps */}
      <section className="container w-full bg-secondary">
            {/*  navbar with sort and search */}
             <div className="p-6 rounded bg-primary flex flex-col md:flex-row justify-between items-center mb-4">
                  <button className="flex items-center gap-1 text-white bg-green-600 py-2 px-3 rounded text-sm"><IoMdAddCircleOutline /> Add contact</button>
                  <div className="text-gray-400 text-sm flex gap-3 items-center">
                      <span>Sort by</span>
                      <select className="bg-none outline-none rounded py-2 px-3 text-gray-400  bg-primary border border-gray-600 focus:border-gray-500" name="" id="">
                        <option value="All">All</option>
                        <option value="Name">Name</option>
                        <option value="Followers">Followers</option>
                        <option value="Following">Following</option>
                      </select>
                      <input className="bg-none outline-none rounded p-2 text-gray-400  bg-primary border border-gray-600 focus:border-gray-500" placeholder="search.." type="text" name="search" id="" />
                  </div>
             </div>
             {/* user card list section */}
             <div>
                     dfgd
             </div>
      </section>
    </>
  );
}

export default MembersList;


 const userData = [
  {
    "profileImage": "https://example.com/profileImage1.jpg",
    "fullName": "Johnathan Deo",
    "mobile": "(123) 123 1234",
    "email": "coderthemes@gmail.com",
    "location": "USA",
    "bio": "Hi, I am Johnathan Deo, the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type."
  },
  {
    "profileImage": "https://example.com/profileImage2.jpg",
    "fullName": "Johnathan Deo",
    "mobile": "(123) 123 1234",
    "email": "coderthemes@gmail.com",
    "location": "USA",
    "bio": "Hi, I am Johnathan Deo, bringing you dummy text from the 1500s."
  },
  {
    "profileImage": "https://example.com/profileImage3.jpg",
    "fullName": "Johnathan Deo",
    "mobile": "(123) 123 1234",
    "email": "coderthemes@gmail.com",
    "location": "USA",
    "bio": "Hi, I am Johnathan Deo, standard dummy text specialist since the 1500s."
  },
  {
    "profileImage": "https://example.com/profileImage4.jpg",
    "fullName": "Johnathan Deo",
    "mobile": "(123) 123 1234",
    "email": "coderthemes@gmail.com",
    "location": "USA",
    "bio": "Hi, I am Johnathan Deo, your go-to for industry-standard dummy text."
  },
  {
    "profileImage": "https://example.com/profileImage5.jpg",
    "fullName": "Johnathan Deo",
    "mobile": "(123) 123 1234",
    "email": "coderthemes@gmail.com",
    "location": "USA",
    "bio": "Hi, I am Johnathan Deo, providing quality dummy text since the 1500s."
  },
  {
    "profileImage": "https://example.com/profileImage6.jpg",
    "fullName": "Johnathan Deo",
    "mobile": "(123) 123 1234",
    "email": "coderthemes@gmail.com",
    "location": "USA",
    "bio": "Hi, I am Johnathan Deo, the industry's trusted dummy text provider."
  },
  {
    "profileImage": "https://example.com/profileImage7.jpg",
    "fullName": "Johnathan Deo",
    "mobile": "(123) 123 1234",
    "email": "coderthemes@gmail.com",
    "location": "USA",
    "bio": "Hi, I am Johnathan Deo, offering standard dummy text since the 1500s."
  },
  {
    "profileImage": "https://example.com/profileImage8.jpg",
    "fullName": "Johnathan Deo",
    "mobile": "(123) 123 1234",
    "email": "coderthemes@gmail.com",
    "location": "USA",
    "bio": "Hi, I am Johnathan Deo, maintaining the industry standard for dummy text."
  },
  {
    "profileImage": "https://example.com/profileImage9.jpg",
    "fullName": "Johnathan Deo",
    "mobile": "(123) 123 1234",
    "email": "coderthemes@gmail.com",
    "location": "USA",
    "bio": "Hi, I am Johnathan Deo, the industry's standard dummy text creator."
  }
]
