import styles from './AppHeader.module.css';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';

function AppHeader() {
  const fadeInUp = useSpring({
    delay: 500,
    from: {
      opacity: 0,
      //transform: 'translateY(-20px)',
    },
    to: {
      opacity: 1,
      //transform: 'translateY(0)',
    },
    config: { duration: 500 },
  });
  return (
    <animated.header style={fadeInUp} className={styles.agencyHeader}>
      <Image
        src={'/agency-logo.svg'}
        alt='Developer DAO agency logo'
        width={70}
        height={70}
      />
      <button className={styles.hireUs}>Hire Us</button>
    </animated.header>
  );
}

export default AppHeader;
