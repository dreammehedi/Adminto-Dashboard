import PricingCard from "../../../components/pricingCard/PricingCard";

function Pricing() {
  return (
    <>
      {/* pricing page */}
      <section className="bg-secondary py-6">
        <div className="flex flex-wrap max-w-screen-xl mx-auto justify-center gap-6 text-center">
          {CardData &&
            CardData.map((card) => (
              <div key={card.id} className="w-full lg:w-1/5">
                <PricingCard card={card}></PricingCard>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default Pricing;

const CardData = [
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
