import Pin from '../Pin/Pin';
import Heading3 from '../Typography/H3/Heading3';
import styles from './Card.module.css';

function Card({ title, description, people }) {
  return (
    <div className={styles.card}>
      <Heading3 underline>{title}</Heading3>
      <p>{description}</p>
      <br />
      {people &&
        people.map((person, index) => {
          if (person.type === 'lead') {
            return <Pin name={person.name} key={index} />;
          } else {
            return <Pin outline name={person.name} key={index} />;
          }
        })}
    </div>
  );
}

export default Card;
