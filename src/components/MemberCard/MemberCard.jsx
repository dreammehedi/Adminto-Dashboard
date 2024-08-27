import PropTypes from "prop-types";
export default function MemberCard({ member }) {
  const { bio, mobile, location, fullName, email, profileImage } = member;
  return (
    <>
      <div className="text-sm bg-primary p-4 md:p-6 rounded-md text-text-color h-fit">
        <div className="flex justify-center items-center flex-col">
          <img
            className="size-24 rounded-full border-2 border-gray-600 object-cover my-transition hover:scale-[1.04] hover:cursor-pointer"
            src={profileImage}
            alt=""
          />
          <p className="text-center my-6 text-text-color text-xs">{bio}</p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <div>
            <span className="font-semibold">Full Name : </span>
            {fullName}
          </div>
          <div>
            <span className="font-semibold">Email: </span> {email}
          </div>
          <div>
            <span className="font-semibold">Mobile: </span> {mobile}
          </div>
          <div>
            <span className="font-semibold">Location: </span> {location}
          </div>
        </div>
        <div className="text-center">
          <button className="px-4 py-2 bg-blue-400 rounded-full text-white my-3 hover:bg-blue-400/50 my-transition">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}
MemberCard.propTypes = {
  member: PropTypes.object,
};
