import { EventCard } from "@/components";
import { eventContent } from "@/constants";

const page = () => {
  return (
    <main className="max-w-[1440px] flex flex-col justify-center items-center my-0 mx-auto gap-12">
      <article className="w-full flex flex-col justify-start items-start font-poppins sm:px-16 px-6 py-6">
        <h1 className=" font-semibold text-3xl">Welcome To Events Page</h1>
        <p className="font-normal text-xl">
          Get the Latest Updates about all the Events
        </p>
      </article>
      <section className="grid grid-flow-row md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 py-12 sm:px-0 px-3">
        {eventContent.map((item) => (
          <EventCard
            title={item.title}
            description={item.description}
            strength={item.strength}
            bgColor={item.bgColor}
            value={item.value}
            key={item.title}
          />
        ))}
      </section>
    </main>
  );
};

export default page;
