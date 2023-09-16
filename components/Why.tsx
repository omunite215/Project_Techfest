"use client";
import {Fade} from "react-awesome-reveal/dist/components/index"
import { detail2 } from "../constants";
import styles from "@/styles/Style";
import Image from "next/image";
const Why = () => {
  return (
    <section
    className={`${styles.flexCenter} flex-col ${styles.paddingX} ${styles.paddingY} my-6`}
    id="about"
  >
    <h1 className="font-poppins font-semibold text-[50px] text-gradient">Why TX23 ?</h1>
    <Fade cascade>
      <ul className="list-none flex flex-col gap-24 justify-end items-center flex-1">
        {detail2.map((nav) => (
          <li
            key={nav.id}
            className={`flex ${
              nav.id === "detail-2" ? "md:flex-row-reverse" : "md:flex-row"
            } flex-col md:justify-start justify-center md:items-start items-center font-poppins cursor-pointer text-[16px]`}
          >
            <Image
              src={nav.img}
              width={384}
              height={497}
              alt="photos"
              className={`${styles.paddingY}`}
            />
            <p
              className={`${styles.paddingX} ${styles.paddingY} ${styles.paragraph} `}
            >
              {nav.content}
            </p>
          </li>
        ))}
      </ul>
    </Fade>
  </section>
  )
}

export default Why