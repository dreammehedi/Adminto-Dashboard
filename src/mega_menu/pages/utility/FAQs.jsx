 

import { useState } from "react";

const FAQs = ({ title, content, isOpen, onClick }) => {
  return (
    <section>
      <div className="md:w-[658px] mb-2 ">
        <div>
          <h1
            onClick={onClick}
            className="bg-[#3a4250] font-bold p-3 text-white flex items-center justify-between cursor-pointer rounded-md"
          >
            {title}
            <span className="text-xl cursor-pointer">{isOpen ? "-" : "+"}</span>
          </h1>
          {isOpen && (
            <div className="p-6 space-y-4 border border-t-header-bg border-gray-600 transition-all duration-300 ease-in-out">
              {content.map((text, index) => (
                <p key={index} className="text-text-color text-sm">
                  {text}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

function App() {
  // Initial state is set to 0 to keep the first accordion open by default
  const [openIndexLeft, setOpenIndexLeft] = useState(0);   
  const [openIndexRight, setOpenIndexRight] = useState(0); 


  const leftAccordionData = [
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
  ];
  const rightAccordionData = [
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

  return (
   <section className="bg-secondary">
     <div className="bg-primary container p-6 ">
      {/* top */}
      <div className="flex flex-col gap-y-3  mb-6">
        <h1 className="text-xl text-gray-100 font-bold text-center">
          Frequently Asked Questions
        </h1>
       <div className="flex justify-center items-center">
       <p className="text-text-color text-sm text-center w-[900px] ">
          Nisi praesentium similique totam odio obcaecati, reprehenderit,
          dignissimos rem temporibus ea inventore alias! Beatae animi nemo ea
          tempora, temporibus laborum facilis ut!
        </p>
       </div>
        <div className="flex justify-center items-center gap-x-2">
          <button className="w-[175px] h-[38px] bg-[#10c469] hover:opacity-90 duration-100 text-white  text-sm ">
            Email us your question
          </button>
          <button
            className="text-white hover:opacity-90 duration-100  bg-[#71b6f9] w-[132px] h-[38px] 
              text-sm"
          >
            Send us a tweet{" "}
          </button>
        </div>
      </div>
      {/* Accoordion Container */}
   <div className="lg:flex md:justify-center items-center justify-around  gap-x-10 ">
   <div>
    {leftAccordionData.map((item, index) => (
        <FAQs
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexLeft === index}
          onClick={() => setOpenIndexLeft(openIndexLeft === index ? -1 : index)}
        />
      ))}
    </div>
   <div>
    {rightAccordionData.map((item, index) => (
        <FAQs
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexRight === index}
          onClick={() => setOpenIndexRight(openIndexRight === index ? -1 : index)}
        />
      ))}
    </div>
   </div>
    </div>
   </section>
  );
}

export default App;
