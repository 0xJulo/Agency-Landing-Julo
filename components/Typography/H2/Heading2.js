import styles from './Heading2.module.css';

function Heading2({ children, underline }) {
  let internalStyles;
  if (underline) {
    internalStyles = styles.underline;
  } else {
    internalStyles = styles.h2;
  }

  return (
    <div>
      <h2 className={internalStyles}>{children}</h2>
    </div>
  );
}

export default Heading2;
