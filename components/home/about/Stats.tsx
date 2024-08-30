import styles from "./stats.module.scss";
import { AiFillCode } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="3rem" color="var(--brand-1)" />
            <span>Languages & Libraries</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">HTML</span>
            <span className="chip">CSS </span>
            <span className="chip">JavaScript( ES6+ ) </span>
            <span className="chip">JAVA</span>
            <span className="chip">Spring Boot(Basic)</span>
            <span className="chip">Git</span>
            <span className="chip">Github</span>
            <span className="chip">SQL</span>

          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="3rem" color="var(--brand-1)" />
            <span>Tools & Technologies</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Generative AI (GOOGLE)</span>
            <span className="chip">Css Modules</span>
            <span className="chip">Figma</span>
            <span className="chip">VS Code</span>
            <span className="chip">JSON</span>
            <span className="chip">Intellij IDEA</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
