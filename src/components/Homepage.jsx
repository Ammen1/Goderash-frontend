import Header from "./Header";
import HowTo from "./HowTo";
import Testimonials from "./Testimonials";
import Business from "./Business";
import styles from "@/style";
import Products from "./products";
import Sub from "./Sub";
import Team from "./Team";
// import CTA from "./CTA";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div>
      <Header />

      <div className={`bg-[#011730] ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <HowTo />
          <Products />
          <Team />
          <Sub />
          <Business />
          {/* <CTA /> */}
          <Testimonials />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
