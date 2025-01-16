import React, { useState } from 'react';
import "./Qualifications.css"

const Qualifications = () => {
    const [toggle, showToggle] = useState(2);
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">

                <div className={toggle === 2 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} onClick={() => showToggle(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> {" "} Experience
                    <div className='underline'></div>
                </div>

                <div className={toggle === 1 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} onClick={() => showToggle(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>{" "} Eduaction
                </div>

            </div>

            <div className="qualification__sections">
                <div className={toggle === 1 ?"qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Master of computer an application</h3>
                            <span className="qualification__subtitle">Dr. A.P.J Abdul Kalam Teknical university, Lucknow</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2018 - 2020
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
                            <h3 className="qualification__title">Becholor of computer an application </h3>
                            <span className="qualification__subtitle">CCS university, Merut</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2015 - 2018
                            </div>
                        </div>
                    </div>

                    </div>
{/* ------------------------------------------------------------------------- */}
                <div className={toggle === 2 ?"qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Backend Developer</h3>
                            <span className="qualification__subtitle">Tekniko Global - Noida, India</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                               May 2023 - Present
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
                            <h3 className="qualification__title">Software developer</h3>
                            <span className="qualification__subtitle">uxdLab software - Noida, India </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                               Feb 2021 - Aug 2022
                            </div>
                        </div>
                    </div>

                    {/* <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Software Engineer - Intern</h3>
                            <span className="qualification__subtitle">GS Lab - Pune, India</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2019 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualifications