import PropTypes from "prop-types";
export default function MemberCard({ member }) {
  const { bio, mobile, location, fullName, email, profileImage } = member;
  return (
    <div className="text-sm bg-primary p-6 rounded-md text-gray-400 h-[410px]">
      <div className="flex justify-center items-center flex-col">
        <img
          className="w-24 h-24 rounded-full border-2 border-gray-600 "
          src={profileImage}
          alt=""
        />
        <h1 className="text-center my-6">{bio}</h1>
      </div>
      <div className="flex flex-col gap-4">
        <h1>
          <span className="font-semibold">Full Name : </span>
          {fullName}
        </h1>
        <h1>
          <span className="font-semibold">Email: </span> {email}
        </h1>
        <h1>
          <span className="font-semibold">Mobile: </span> {mobile}
        </h1>
        <h1>
          <span className="font-semibold">Location: </span> {location}
        </h1>
      </div>
      <div className="text-center">
        <button className="px-4 py-2 bg-blue-400 rounded-full text-white my-3 hover:bg-blue-500 my-transition">
          Send Message
        </button>
      </div>
    </div>
  );
}
MemberCard.propTypes = {
  member: PropTypes.object,
};
