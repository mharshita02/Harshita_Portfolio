// import Image from "next/image";
// import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
// import Profile from "@/public/jc.jpg";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              <span>Harshita</span> <br /> Mishra
            </h1>
          </Reveal>
          <Reveal>
             <p className={styles.aboutCopy}>
              I am a Recent Graduate in Information Technology from
               Gautam Buddha University, offering a Basic foundation
              in Java, HTML, CSS, and JavaScript, coupled with 
              hands-on experience in software development through projects.
              Let&apos;s collaborate to create impactful digital solutions!
            </p>
          </Reveal>
          <Reveal>
            <StandardButton
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView()
              }
            >
              Contact me
            </StandardButton>
          </Reveal>
        </div>
        {/* Image will go here */}
      </div>
      <DotGrid />
    </section>
  );
};

{
  /* <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            className={styles.profile}
            src={Profile}
            priority
            alt="John Carlo Devera | Frontend Developer"
            width={250}
            height={250}
          />
        </motion.div> */
}
