import { useSpring, animated } from '@react-spring/web';
import Heading2 from '../Typography/H2/Heading2';
import CardContainer from '../Card/CardContainer';
import styles from './ProjectsContainer.module.css';

function ProjectsContainer() {
  // react spring animation
  const fadeInProjects = useSpring({
    delay: 1700,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: { duration: 500 },
  });

  return (
    <section className={styles.projects}>
      <Heading2>Projects</Heading2>
      <animated.div style={fadeInProjects} className='Grid'>
        <CardContainer />
      </animated.div>
    </section>
  );
}

export default ProjectsContainer;

// <animated.section style={fadeInProjects} className='Grid projectsContainer'>
