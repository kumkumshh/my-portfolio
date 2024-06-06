import React , {useState} from 'react';
import "./qualification.css";

function Qualification() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section">
          <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className= {toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex" }
                 onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"> Education</i>
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex" }
                  onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"> Internships</i>
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active " : "qualification__content" }>
                    <div className="qualification__data">
                        <div>
                           <h3 className="qualification__title">Btech CSE</h3> 
                           <span className="qualification__subtitle">Gulzar Group of Instituties</span>
                           <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"> 2022 - Present</i>
                           </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                           <h3 className="qualification__title">Diploma in CSE</h3> 
                           <span className="qualification__subtitle">R&D Polytechnic College</span>
                           <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"> 2019 - 2022</i>
                           </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                           <h3 className="qualification__title">10th </h3> 
                           <span className="qualification__subtitle">SGD Grammar Sen. Sec. School</span>
                           <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"> 2019</i>
                           </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                           <h3 className="qualification__title">Web Developer</h3> 
                           <span className="qualification__subtitle">Gulzar Group of Instituties</span>
                           <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"> 2021 - Present</i>
                           </div>
                        </div>

                    </div> */}
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active " : "qualification__content" }>
                    <div className="qualification__data">
                        <div>
                           <h3 className="qualification__title">Java/SQL</h3> 
                           <span className="qualification__subtitle">Test Yantra Software Solutions India Pvt. Ltd.</span>
                           <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"> 2023</i>
                           </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                           <h3 className="qualification__title">Cyber Security</h3> 
                           <span className="qualification__subtitle">TCL-IT</span>
                           <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"> 2023</i>
                           </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                           <h3 className="qualification__title">Python with Data Science </h3> 
                           <span className="qualification__subtitle">Ansh Infotech</span>
                           <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"> 2021 </i>
                           </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder">UI/UX </span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                           <h3 className="qualification__title">Web Developer</h3> 
                           <span className="qualification__subtitle">Gulzar Group of Instituties</span>
                           <div className="qualification__calender">
                                <i className="uil uil-calender-alt"> 2021 - Present</i>
                           </div>
                        </div>

                    </div> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification