import styles from "@/styles/Style";

const BannerStrip = () => {
  return (
    <div
      className={`${styles.flexCenter} text-[28px] ${styles.padding} rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:mx-0 mx-6 my-28`}
    >
      <h1 className="font-poppins font-semibold text-white">
        Design is not just what it looks like and feels like. Design is how it
        works.
        <br /> <span className={`${styles.flexCenter}`}>- Steve Jobs.</span>
      </h1>
    </div>
  );
};

export default BannerStrip;
