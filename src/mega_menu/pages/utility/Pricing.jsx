import PricingCard from "../../../components/pricing/PricingCard";
const pricingData = [
  {
    id: 1,
    packageName: "Basic",
    price: 20,
    popular: false,
    offers: [
      "5 Projects",
      "1 GB Storage",
      "No Domain",
      "1 User",
      "24x7 Support",
    ],
  },
  {
    id: 2,
    packageName: "Preminum",
    price: 30,
    popular: true,
    offers: [
      "5 Projects",
      "1 GB Storage",
      "No Domain",
      "1 User",
      "24x7 Support",
    ],
  },
  {
    id: 3,
    packageName: "Developer",
    price: 40,
    popular: false,
    offers: [
      "5 Projects",
      "1 GB Storage",
      "No Domain",
      "1 User",
      "24x7 Support",
    ],
  },
  {
    id: 4,
    packageName: "Business",
    price: 50,
    popular: true,
    offers: [
      "5 Projects",
      "1 GB Storage",
      "No Domain",
      "1 User",
      "24x7 Support",
    ],
  },
  {
    id: 5,
    packageName: "Basic",
    price: 20,
    popular: false,
    offers: [
      "5 Projects",
      "1 GB Storage",
      "No Domain",
      "1 User",
      "24x7 Support",
    ],
  },
];

function Pricing() {
  return (
    <>
      {/* pricing page */}
      <section className="bg-secondary pb-6">
        <div className="container flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 text-center">
          {pricingData.map((pricingData) => {
            return (
              <div
                className="w-[80%] md:max-w-[200px] lg:max-w-[240px] bg-primary rounded-md p-4 md:p-6 lg:p-8 relative z-10 overflow-hidden "
                key={pricingData.id}
              >
                <PricingCard pricingData={pricingData}></PricingCard>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Pricing;
