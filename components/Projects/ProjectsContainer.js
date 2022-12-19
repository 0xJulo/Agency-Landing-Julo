import { useSpring, animated } from '@react-spring/web';
import Heading2 from '../Typography/H2/Heading2';
import CardContainer from '../Card/CardContainer';

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
    <animated.section style={fadeInProjects} className='Grid projectsContainer'>
      <Heading2>Projects</Heading2>
      <CardContainer />
    </animated.section>
  );
}

export default ProjectsContainer;
