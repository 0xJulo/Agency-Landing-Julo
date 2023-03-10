import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='email-contact'>
        <p>© 2022 Agency</p>
        <a href='mailto: agency@developerdao.com' className='hover:underline'>
          📪 - agency@developerdao.com
        </a>
      </div>
      <div className='social-links'>
        <a
          href='https://github.com/D-D-Agency'
          target='_blank'
          className='mr-4 hover:underline'
          rel='noreferrer'
        >
          Github
        </a>
        <a
          href='http://discord.gg/devdao'
          target='_blank'
          className='mr-4 hover:underline'
          rel='noreferrer'
        >
          Discord
        </a>
        <a
          href='https://twitter.com/d_d_agency_web3'
          target='_blank'
          className='hover:underline'
          rel='noreferrer'
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}

export default Footer;
