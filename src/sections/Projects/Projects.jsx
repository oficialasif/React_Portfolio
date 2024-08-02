import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/oficialasif/HotelBD"
          h3="HotelBD"
          p="A Hotel Booking Site Design"
        />
        <ProjectCard
          src={freshBurger}
          link="#"
          h3="Restaurant"
          p="Upcoming Project"
        />
        <ProjectCard
          src={hipsster}
          link="#"
          h3="Online Furniture Shop"
          p="Upcoming Project"
        />
        <ProjectCard
          src={fitLift}
          link="#"
          h3="Upcoming"
          p="Upcoming Project"
        />
      </div>
    </section>
  );
}

export default Projects;
