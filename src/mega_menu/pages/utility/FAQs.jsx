import { useState } from "react";

const accordionData = [
  {
    title: "What is Lorem Ipsum?",
    content: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    ],
  },
  {
    title: "Why do we use it?",
    content: [
      "It is a long established fact that a reader will be distracted by the readable content.",
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    ],
  },
  {
    title: "Where can I get some?",
    content: [
      "There are many variations of passages of Lorem Ipsum available.",
      "But the majority have suffered alteration in some form, by injected humour.",
    ],
  },
  {
    title: "License & Copyright",
    content: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    ],
  },
  {
    title: "How many variations exist?",
    content: [
      "It is a long established fact that a reader will be distracted by the readable content.",
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    ],
  },
  {
    title: "Why use Lorem Ipsum?",
    content: [
      "There are many variations of passages of Lorem Ipsum available.",
      "But the majority have suffered alteration in some form, by injected humour.",
    ],
  },
];

const FAQs = () => {
  // accordion open index
  const [accordionIndex, setAccordionIndex] = useState(-1);

  return (
    <section className="bg-secondary pb-6">
      <div className="container">
        <div className="bg-primary p-8 md:p-12 lg:p-12 rounded-md">
          {/* faq top section  */}
          <div className="flex flex-col justify-center items-center text-center space-y-3 lg:max-w-lg lg:mx-auto">
            <h1 className="font-semibold text-xl lg:text-2xl text-white">
              Frequently Asked Questions
            </h1>

            <p className="text-sm text-text-color">
              Nisi praesentium similique totam odio obcaecati, reprehenderit,
              dignissimos rem temporibus ea inventore alias! Beatae animi nemo
              ea tempora, temporibus laborum facilis ut!
            </p>
            <div className="flex justify-center items-center gap-3">
              <button className="bg-[#10c469] hover:bg-[#10c469]/50 my-transition text-white text-sm px-6 py-3 rounded-md">
                Email us your question
              </button>

              <button className="bg-[#71b6f9] hover:bg-[#71b6f9]/50 my-transition text-white text-sm px-6 py-3 rounded-md">
                Send us a tweet
              </button>
            </div>

            {/* {isOpen && (
            <div className="p-6 space-y-4 border border-t-header-bg border-gray-600 transition-all duration-300 ease-in-out">
              {content.map((text, index) => (
                <p key={index} className="text-text-color text-sm">
                  {text}
                </p>
              ))}
            </div>
          )} */}
          </div>

          {/* faq accordion section */}
          <div className="py-6 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            {/* accourdion */}
            {accordionData.map((accordion, ind) => {
              const { title, content } = accordion;
              const isOpen = ind === accordionIndex;
              return (
                <>
                  <div key={ind} className="h-fit my-transition">
                    <h1
                      onClick={() => {
                        console.log(ind);
                        setTimeout(() => {
                          setAccordionIndex(ind === accordionIndex ? -1 : ind);
                        }, 500);
                      }}
                      className="bg-[#3a4250] font-bold p-3 text-white flex items-center justify-between cursor-pointer rounded-md"
                    >
                      {title}
                      <span className="text-xl cursor-pointer">
                        {isOpen ? "-" : "+"}
                      </span>
                    </h1>

                    {isOpen && (
                      <p className="p-4 my-4 text-sm text-text-color space-y-3 border border-gray-600 my-transition rounded-md">
                        {content}
                      </p>
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
