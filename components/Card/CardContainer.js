import { projects } from '../../data/projects';
import Card from './Card';

function CardContainer() {
  return (
    <>
      {projects.map((project, index) => (
        <div key={index} className='third'>
          <Card
            title={project.name}
            description={project.description}
            people={project.people}
          />
        </div>
      ))}
    </>
  );
}
export default CardContainer;
