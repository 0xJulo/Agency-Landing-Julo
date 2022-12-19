import styles from './Heading3.module.css';

function Heading3({ children, underline }) {
  console.log(underline);
  // Check if underline enabled

  let internalStyles;
  if (underline) {
    internalStyles = styles.underline;
  } else {
    internalStyles = styles.h3;
  }

  return (
    <div>
      <h3 className={internalStyles}>{children}</h3>
    </div>
  );
}

export default Heading3;
