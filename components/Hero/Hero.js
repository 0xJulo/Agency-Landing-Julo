import Intro from '../Intro/Intro';
import styles from './Hero.module.css';
import { useSpring, animated } from '@react-spring/web';

function Hero() {
  const fadeInHero = useSpring({
    delay: 100,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: { duration: 500 },
  });
  return (
    <animated.main style={fadeInHero} className={styles.background}>
      <Intro />
    </animated.main>
  );
}

export default Hero;
