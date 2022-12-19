import Heading3 from '../Typography/H3/Heading3';
import styles from './Intro.module.css';
import { useSpring, animated } from '@react-spring/web';

function Intro() {
  const fadeInUp = useSpring({
    delay: 1000,
    from: {
      opacity: 0,
      transform: 'translateX(-60px)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)',
    },
    config: { duration: 500 },
  });
  return (
    <animated.section style={fadeInUp} className='Grid'>
      <div className='hero'>
        <div className={styles.intro}>
          <Heading3 underline>Agency</Heading3>
          <p>
            We are a collective venture builder curated from the best talent
            within Developer DAO. By bringing together the best developers,
            designers and project managers, we aim to collectively build
            products and services for our clients and the web3 space.
          </p>
        </div>
      </div>
    </animated.section>
  );
}

export default Intro;
