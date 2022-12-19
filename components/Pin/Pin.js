import styles from './Pin.module.css';

function Pin({ outline, name }) {
  let internalStyles;
  if (outline) {
    internalStyles = styles.pinOutline;
  } else {
    internalStyles = styles.pin;
  }
  return <div className={internalStyles}>{name}</div>;
}

export default Pin;
