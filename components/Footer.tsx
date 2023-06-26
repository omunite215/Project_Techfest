import styles from "@/styles/Style";
import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";

const Footer = () => (
  <footer className="w-full">
    <section
      className={`${styles.flexCenter} px-6 py-12 ss:px-16 max-w-[1440px] mx-auto flex-col`}
    >
      <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
        <div className={`${styles.flexCenter} flex-col  mr-10`}>
          <Image
            src="/Logo/logo.png"
            alt="TX"
            width={52}
            height={52}
            className="object-contain"
          />
          <h1 className="font-poppins font-semibold mt-4">Tech Extreme 2023</h1>
          <p className={`${styles.paragraph} mt-4 max-w-[312px] text-center`}>
            A new way to see technology.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 pl-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <h4 className="font-poppins font-semibold text-xl">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-medium text-[16px] hover:text-indigo-500 leading-[24px] cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] ">
          Copyright Ⓒ 2022 Gandhinagar University. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <div
              className="p-2 bg-whiteTheme rounded-full hover:opacity-70"
              key={social.id}
            >
              <Image
                src={social.icon}
                alt={social.id}
                width={21}
                height={21}
                className={`object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  </footer>
);

export default Footer;
