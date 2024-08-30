import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Bank Management System",
    imgSrc: "/project-imgs/BankManagementSystem.png",
    code: "https://github.com/mharshita02/Bank_management_System.git",
    projectLink: "https://github.com/mharshita02/Bank_management_System.git",
    tech: ["JAVA", "SQL"],
    description: "Java project called “Bank Management System” as well as an ATM Simulator System.",
    modalContent: (
      <>
        <p>
          Exhibited an ATM Simulator System, a user-friendly
          project.
        </p>
        <p>
          The functionality of this ATM Simulator System includes Depositing, Withdrawing, Opening Accounts, Producing
          Mini Statements, Changing PINs, and more
        </p>
      </>
    ),
  },
  {
    title: "Dribble Clone",
    imgSrc: "/project-imgs/dribble-mockup.jpg",
    code: "https://github.com/mharshita02/DribbleClone.git",
    projectLink: "https://mharshita02.github.io/DribbleClone/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Created a frontend clone of a Dribbble design to replicate the original aesthetic and functionality.",
    modalContent: (
      <>
        <p>
          Recreated the intricate design elements and interactive features of a
          Dribbble design, demonstrating proficiency in frontend development.
        </p>
        <p>
          Focused on maintaining fidelity to the original design while ensuring
          cross-browser compatibility and responsive layout for seamless user
          experience.
        </p>
      </>
    ),
  },
  // {
  //   title: "DOG API",
  //   imgSrc: "/project-imgs/dog-list.JPG",
  //   code: "https://github.com/DMKuldeep/dogapiassignment",
  //   projectLink: "https://dmkuldeep.github.io/RandomI",
  //   tech: ["React", "HTML", "CSS", "Responsive Design", "JS "],
  //   description:
  //     "A captivating landing page for DOG List, featuring stunning CSS and responsive design.",
  //   modalContent: (
  //     <>
  //       <p>
  //         Designed an immersive and visually appealing DOG AI page that
  //         showcases DOG Lists having diffrent breeds&apos; tour offerings
  //         through captivating and responsive layout.
  //       </p>
  //       <p>
  //         Demonstrated expertise in frontend development by seamlessly
  //         integrating HTML and CSS to create a dynamic and engaging user
  //         experience for visitors interested in DOGs tours.
  //       </p>
  //     </>
  //   ),
  // },
  {
    title: "Carousel Effect",
    imgSrc: "/project-imgs/choclate.JPG",
    code: "https://github.com/mharshita02/CarouselEffectChocolate",
    projectLink: "https://mharshita02.github.io/CarouselEffectChocolate/",
    tech: ["HTML", "CSS", "CSS Animations", "Carousel", "Responsive Design"],
    description:
      "A landing page for Med Connection, a medical institute, focusing on seamless user experience and informative content.",
    modalContent: (
      <>
        <p>
          Developed a responsive and product carousel to showcase featured
          products. The carousel should automatically rotate through the
          featured products and allow for manual navigation as well.
          <ul>
            <li>Displayed a customizable product carousel on the homepage</li>
            <li>
              Enabled automatic rotation of featured products, with the option
              for manual navigation using arrow buttons.
            </li>
            <li>
              The carousel is a responsive and visually appealing across various
              screen sizes and devices.
            </li>
          </ul>
        </p>
      </>
    ),
  },
  // {
  //   title: "Omnifoods",
  //   imgSrc: "/project-imgs/omnifoods-mockup.jpg",
  //   code: "https://github.com/saurav-verma-01/Omnifoods",
  //   projectLink: "https://omnifood-saurav.netlify.app/",
  //   tech: [
  //     "HTML",
  //     "CSS",
  //     "CSS Animations",
  //     "CSS Variables",
  //     "Responsive Design",
  //     "Web Design",
  //   ],
  //   description:
  //     "Landing Page of a technology company offering premium, fitness-oriented food subscriptions tailored to customers.",
  //   modalContent: (
  //     <>
  //       <p>
  //         Created a visually compelling landing page for Omnifoods, highlighting
  //         the company&apos;s innovative approach to providing personalized
  //         nutrition solutions through sleek design and clear messaging.
  //       </p>
  //       <p>
  //         Focused on user engagement and conversion optimization by designing an
  //         intuitive and informative interface that effectively communicates
  //         Omnifoods&apos; value proposition and encourages sign-ups.
  //       </p>
  //     </>
  //   ),
  // },
  // {
  //   title: "E-learning Website",
  //   imgSrc: "/project-imgs/e-learning-mockup.jpg",
  //   code: "https://github.com/saurav-verma-01/e-learning-platform-responsive-website",
  //   projectLink: "https://e-learning-wapp.netlify.app/",
  //   tech: [
  //     "HTML",
  //     "CSS",
  //     "CSS Animations",
  //     "CSS Variables",
  //     "Responsive Design",
  //     "Web Design",
  //   ],
  //   description:
  //     "A comprehensive multi-page website for an e-learning company entirely using Vanilla HTML, CSS, and JavaScript.",
  //   modalContent: (
  //     <>
  //       <p>
  //         Built a robust and feature-rich website for the e-learning company,
  //         leveraging the power of Vanilla HTML, CSS, and JavaScript to deliver
  //         an immersive and interactive learning experience across multiple
  //         pages.
  //       </p>
  //       <p>
  //         Focused on usability and accessibility by implementing intuitive
  //         navigation, engaging content presentation, and seamless functionality,
  //         catering to the diverse needs of learners and educators.
  //       </p>
  //     </>
  //   ),
  // },
];
