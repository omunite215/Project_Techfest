"use client";
import Head from "next/head";
import { EventCard } from "@/components";
import { eventContent } from "@/constants";
import Fade from "react-awesome-reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechExtreme-Events",
  description: "Events You Love!!",
};

const page = () => {
  return (
    <>
    <Head>
      <title>TechExtreme-Events</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className="max-w-[1440px] flex flex-col justify-center items-center my-0 mx-auto gap-12">
      <article className="w-full flex flex-col justify-start items-start font-poppins sm:px-16 px-6 py-6 gap-1">
        <h1 className=" font-semibold text-3xl text-gradient">Welcome To Events Page</h1>
        <p className="font-normal text-xl">
          Get the Latest Updates about all the Events
        </p>
      </article>
      <section className="grid grid-flow-row md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 py-12 sm:px-0 px-3">
        <Fade delay={1e3} cascade damping={1e-1}>
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
        </Fade>
      </section>
    </main>
    </>
  );
};

export default page;
