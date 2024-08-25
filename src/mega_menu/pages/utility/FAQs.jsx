function FAQs() {
  return (
    <>
      {/* FAQs page */}
      <section className="bg-secondary">
        <div className="bg-primary container">
          {/* top */}
          <div className="p-6  flex flex-col gap-y-4">
            <h1 className="text-xl text-gray-100 font-bold text-center">
              Frequently Asked Questions
            </h1>
            <p className="text-text-color text-sm text-center">
              Nisi praesentium similique totam odio obcaecati, reprehenderit,
              dignissimos rem temporibus ea inventore alias! Beatae animi nemo
              ea tempora, temporibus laborum facilis ut!
            </p>
            <div className="flex justify-center items-center gap-x-4">
              <button className="w-[175px] h-[38px] bg-[#10c469] text-white  text-sm">
                Email us your question
              </button>
              <button
                className="text-white  bg-[#71b6f9] w-[132px] h-[38px] 
              text-sm"
              >
                Send us a tweet{" "}
              </button>
            </div>
          </div>
          {/* container */}

          <div className="md:flex justify-center items-center gap-x-10">
            {/* left */}
            <div className="w-[658px] ">
            <div>
            <h1 className="bg-[#3a4250] font-bold p-6 text-white">What is lorem Ipsum ?</h1>
          <div className="p-6 space-y-4 border border-t-header-bg border-gray-600">
          <p className="text-text-color text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p className="text-text-color text-sm">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.</p>
          </div>
        <div className="space-y-2 mt-2">
        <h1 className="bg-[#3a4250] font-bold p-6 text-white">Is safe use Lorem Ipsum?</h1>
        <h1 className="bg-[#3a4250] font-bold p-6 text-white">Why use Lorem Ipsum?</h1>
        </div>
            </div>
            </div>
            {/* right */}
            <div className="w-[658px] ">
            <div>
            <h1 className="bg-[#3a4250] font-bold p-6 text-white">License & Copyright</h1>
          <div className="p-6 space-y-4 border border-t-header-bg border-gray-600">
          <p className="text-text-color text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p className="text-text-color text-sm">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.</p>
          </div>
        <div className="space-y-2 mt-2">
        <h1 className="bg-[#3a4250] font-bold p-6 text-white">Is safe use Lorem Ipsum?</h1>
        <h1 className="bg-[#3a4250] font-bold p-6 text-white">Why use Lorem Ipsum?</h1>
        </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQs;
