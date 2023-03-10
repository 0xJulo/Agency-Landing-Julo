import styles from './Heading1.module.css';

function Heading1({ children, underline }) {
  let internalStyles;
  if (underline) {
    internalStyles = styles.underline;
  } else {
    internalStyles = styles.h1;
  }

  return (
    <div>
      <h1 className={internalStyles}>{children}</h1>
    </div>
  );
}

export default Heading1;
