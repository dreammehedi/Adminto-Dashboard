import Pricing_Card from "./Pricing_Card";

function Pricing() {
  const CardData = [
      {
        "id": 1,
        "packageName" : "Basic",
        "price": 20,
        "popular":false,
        "offers":[
          '5 Projects','1 GB Storage','No Domain','1 User', '24x7 Support'
        ]
      },
      {
        "id": 2,
        "packageName" : "Preminum",
        "price": 30,
        "popular":true,
        "offers":[
          '5 Projects','1 GB Storage','No Domain','1 User', '24x7 Support'
        ]
      },
      {
        "id": 3,
        "packageName" : "Developer",
        "price": 40,
        "popular":false,
        "offers":[
          '5 Projects','1 GB Storage','No Domain','1 User', '24x7 Support'
        ]
      },
      {
        "id": 4,
        "packageName" : "Business",
        "price": 50,
        "popular":true,
        "offers":[
          '5 Projects','1 GB Storage','No Domain','1 User', '24x7 Support'
        ]
      },
      {
        "id": 5,
        "packageName" : "Basic",
        "price": 20,
        "popular":false,
        "offers":[
          '5 Projects','1 GB Storage','No Domain','1 User', '24x7 Support'
        ]
      },
  ]
  return (
    <>
      {/* pricing page */}
      <section className="bg-secondary py-6 ">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto items-center justify-center text-center ">
                  {
                    CardData && CardData.map((card) => <Pricing_Card key={card.id} card={card}></Pricing_Card>)
                  }
            </div>
      </section>
    </>
  );
}

export default Pricing;
