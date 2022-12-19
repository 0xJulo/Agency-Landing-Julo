import { projects } from '../../data/projects';
import Card from './Card';

function CardContainer() {
  return (
    <>
      {projects.map((project, index) => (
        <div className='third' key={index}>
          <Card
            title={project.name}
            description={project.description}
            people={project.people}
            className='third'
          />
        </div>
      ))}
    </>
  );
}
export default CardContainer;
