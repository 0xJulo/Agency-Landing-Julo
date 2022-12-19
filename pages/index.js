import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import AppHeader from '../components/AppHeader/AppHeader';
import Footer from '../components/Footer/Footer';
import ProjectsContainer from '../components/Projects/ProjectsContainer';

export default function Home() {
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
      </Head>
      <AppHeader />
      <Hero />
      <ProjectsContainer />
      <Footer />
    </div>
  );
}
