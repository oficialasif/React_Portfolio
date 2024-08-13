import styles from './ProjectsStyles.module.css';
import hotel from '../../assets/hotel.png';
import stylora from '../../assets/shopping.png';
import stylora2 from '../../assets/ecommerce.png';
import fitness from '../../assets/gym.png';
import flipkart from '../../assets/flipkart.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={hotel}
          link="https://oficialasif.github.io/HotelBD"
          h3="HotelBD"
          p="A Hotel Booking Site Design"
        />
        <ProjectCard
          src={stylora}
          link="https://oficialasif.github.io/Stylora-Ecommerce"
          h3="STYLORA-1"
          p="An Online Shopping Site"
        />
        <ProjectCard
          src={stylora2}
          link="https://oficialasif.github.io/STYLORA-Ecommerce-2"
          h3="STYLORA-2"
          p="An Online Shopping Site"
        />
        <ProjectCard
          src={fitness}
          link="#"
          h3="GYMER"
          p="A Gymnestick Website"
        />
        <ProjectCard
          src={flipkart}
          link="https://oficialasif.github.io/FlipKart-Clone"
          h3="Flipkart CLone - Frontpage"
          p="A non responsive front page. Only for Big screen"
        />
        
      </div>
    </section>
  );
}

export default Projects;
