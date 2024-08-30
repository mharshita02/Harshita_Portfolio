import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiFillCode, AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey there! Welcome to my portfolio! I&apos;m a Recent Graduate
              I am a recent graduate in Information Technology from Gautam Buddha
              University with a CGPA of 9.20, offering a strong foundation in Java, HTML,
              CSS, and JavaScript, coupled with hands-on experience in software
              development through projects and internships.
              <br />
              <br />
              I&apos;m really good at using HTML , CSS , Bootstrap, JS, JAVA, Spring Boot(Basic) & SQL.
              These tools help me be super creative and bring fresh ideas to
              every project.
            </p>
          </Reveal>
          {/* <Reveal>
            <p className={styles.aboutText}>
              I know a bunch of other cool stuff too, like Tailwind CSS, regular
              CSS, SCSS, styled-components, and CSS modules. With these tools, I
              can make websites that look great and work perfectly on any
              device. Whether it&apos;s making sure everything looks good on a
              phone or making websites load super fast, I&apos;m all about
              making sure people have a great experience.
            </p>
          </Reveal> */}
          <Reveal>
            <p className={styles.aboutText}>
              During my internship at Oasis Infobyte, I developed Java applications
              across various phases, analyzing software requirements, writing
              maintainable code, and debugging issues. This experience sharpened my
              problem-solving abilities and deepened my understanding of the software
              development lifecycle.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My technical skills are further evidenced by projects like the Bank
              Management System and ATM Simulator System, where I implemented
              functionalities such as depositing, withdrawing, and producing
              mini-statements. Additionally, I created a Dribbble Clone that showcases
              my proficiency in front-end development, focusing on responsive design
              and cross-browser compatibility
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always learning and staying up-to-date with the latest
              trends in development. I want to make sure I&apos;m
              always bringing fresh ideas and solutions to the table.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              If you need a Java Developer or a Frontend Developer who&apos;s dedicated, versatile,
              and can turn your ideas into something amazing, I&apos;m your
              person! Let&apos;s work together and create something awesome! 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.statColumn}>
              <h4>
                <AiFillCode size="3rem" color="var(--brand-1)" />
                <span>Things I can help you with.</span>
              </h4>
              <div className={styles.statGrid}>
                <span className="chip">Web Development</span>
                <span className="chip">Responsive Web Design</span>
                {/* <span className="chip">Api Data Handling</span> */}
                {/* <span className="chip">Cross Browser Compatibility</span> */}
                <span className="chip">Software Development</span>
                <span className="chip">Java Development</span>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
