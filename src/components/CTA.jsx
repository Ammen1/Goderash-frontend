import styles from "../style";
import { Button } from "@/components/ui/button";
const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col h-96  font-sans bg-black-gradient-2 rounded-[20px] bg-black box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5  font-sans `}>
        Everything you need to order and grow your business anywhere on the
        planet.
        <span className="text-seconder text-2xl text-secondary">
          {" "}
          We are here for you
        </span>
      </p>
    </div>

    <Button
      to={"/orderpage"}
      className=" bg-white text-black hover:bg-sky-600 rounded-full w-28 h-12"
    >
      Order Now
    </Button>
  </section>
);

export default CTA;
