import Head from 'next/head';
import Heading2 from '../components/Typography/H2/Heading2';
import Hero from '../components/Hero/Hero';
import AppHeader from '../components/AppHeader/AppHeader';
import { useSpring, animated } from '@react-spring/web';
import Footer2 from '../components/Footer/Footer2';
import CardContainer from '../components/Card/CardContainer';

export default function Home() {
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
    <div className='font-lato dark:bg-black'>
      <Head>
        <title>Agency</title>
        <meta name='description' content="Developer DAO's Agency" />
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' rel='stylesheet' />
      </Head>

      <AppHeader />

      <Hero />

      <animated.section style={fadeInProjects} className='Grid sectionBottom'>
        <div className='inset'>
          <Heading2>Projects</Heading2>
        </div>
        <CardContainer />
      </animated.section>

      <footer>
        <Footer2 />
      </footer>
    </div>
  );
}
