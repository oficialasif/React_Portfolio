import React from 'react';
import styles from './AboutStyles.module.css';

function About() {
  return (
    <section id="about" className={styles.container}>
      <h2>About Me</h2>
      <div className={styles.content}>
        <div className={styles.description}>
          <p><strong>Hello! I'm Asif Mahmud.</strong> I’m a Frontend Developer from Bangladesh with rich experience in creating responsive websites. I love coding and problem-solving, and I’m passionate about web development.</p>
        </div>
        <div className={styles.info}>
          <ul>
            <li><strong>Age:</strong> 24</li>
            <li><strong>Religion:</strong> Islam</li>
            <li><strong>Nationality:</strong> Bangladeshi</li>
            <li><strong>Education:</strong> BSc in CSE, Daffodil International University</li>
            <li><strong>Activities:</strong> Footballer, Member of CPC, Member of CSC</li>
          </ul>
        </div>
      </div>
      <div className={styles.skills}>
        <div className={styles.skillSection}>
          <h3><i className="fas fa-paint-brush"></i> Software Skills</h3>
          <p>HTML, CSS, JavaScript, React, Bootstrap</p>
          {/* Add your specific skill bars here if needed */}
        </div>
        <div className={styles.languageSection}>
          <h3><i className="fas fa-flag"></i> Languages</h3>
          <p>Bangla, English, German (basic)</p>
        </div>
      </div>
    </section>
  );
}

export default About;
