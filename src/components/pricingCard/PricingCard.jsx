import PropTypes from "prop-types";
export default function Pricing_Card({ card }) {
  const { packageName, price, offers, popular } = card;
  return (
    <div className="bg-primary relative mx-4 lg:mx-0 rounded-md p-8 ">
      <div
        className={`${
          popular ? "absolute" : "hidden"
        } top-0 left-0 overflow-hidden w-44 h-32`}
      >
        <div className="bg-blue-400 -ml-24 text-white text-center text-xs font-semibold py-1.5 transform -rotate-45 translate-y-5 shadow-lg">
          POPULAR
        </div>
      </div>
      <div className="text-white flex flex-col gap-2">
        <h1 className="text-blue-400 tracking-widest uppercase">
          {packageName}
        </h1>
        <h1 className="text-white text-4xl">${price}</h1>
        <p className="font-light text-xs text-gray-300">Per month</p>
      </div>
      <ul className="my-12 text-gray-400 text-sm flex flex-col gap-4">
        {offers.map((offer) => (
          <li key={offer}>{offer}</li>
        ))}
      </ul>
      <button className="bg-green-500 px-4 py-2 rounded-full text-sm font-semibold text-white">
        SignUp Now
      </button>
    </div>
  );
}

Pricing_Card.propTypes = {
  card: PropTypes.object,
};
