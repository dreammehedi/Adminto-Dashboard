import PropTypes from "prop-types";

function PricingCard({ pricingData }) {
  const { packageName, price, offers, popular } = pricingData;
  console.log(popular);

  return (
    <>
      <div
        className={`${
          popular ? "inline-block" : "hidden"
        } absolute z-10 -top-[0px] -left-[50px] w-auto text-pretty font-semibold text-xs uppercase text-white bg-blue-400 px-14 py-2 translate-y-5 -rotate-45`}
      >
        POPULAR
        {/* <div className="bg-blue-400 -ml-24 text-white text-center text-xs font-semibold py-1.5 transform -rotate-45 translate-y-5 shadow-lg"></div> */}
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
      <button className="bg-green-500 px-4 py-2 rounded-full text-sm font-semibold text-white my-transition hover:bg-green-500/50">
        Signup Now
      </button>
    </>
  );
}

// prop validation

PricingCard.propTypes = {
  pricingData: PropTypes.object.isRequired,
};
export default PricingCard;
