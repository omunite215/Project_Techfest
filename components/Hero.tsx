import MainButton from "./MainButton";
import styles from "@/styles/Style";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className={`w-full flex items-center justify-center md:flex-row flex-col sm:px-16 px-6 py-6`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">{/* button */}</div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100.8px] leading-[75px] w-full">
          TechFest.
        </h1>
        <h2 className="font-poppins font-semibold pl-3">
          Organized by Gandhinagar University.
        </h2>
        <MainButton text="Get Started"/>
      </div>
      <Image
        src="/Hero/Robot.png"
        height={300}
        width={500}
        alt=""
        className=" h-fit fit"
      />
    </section>
  );
};

export default Hero;
