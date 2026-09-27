import bannerStack from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-356.25 px-6">
        <div className="flex min-h-105 items-center justify-between gap-10">
          
          
          <div className="flex max-w-162.5 flex-col items-start">
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-[#071A3A] md:text-6xl">Build Your Ideal<br />
              <span className="bg-linear-to-r from-[#ff4b3e] via-[#e7357d] to-[#9c3be8] bg-clip-text text-transparent">Development Stack</span>
            </h1>

            <p className="mt-5 max-w-147.5 text-base leading-6 text-[#536174]">Explore frontend, backend, database, and tooling options,compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-md bg-linear-to-r from-[#ff6338] to-[#e52b86] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">Explore Technologies</button>

              <button className="rounded-md border border-[#dce1e8] bg-white px-7 py-3 text-sm font-medium text-[#27364d] transition hover:bg-gray-50">Learn More</button>
            </div>
          </div>

        
          <div className="flex shrink-0 items-center justify-center">
            <img src={bannerStack} alt="Development stack" className="w-90 object-contain md:w-107.5 lg:w-125"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
