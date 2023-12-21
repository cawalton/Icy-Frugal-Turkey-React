import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FeatureCard31 from '../components/feature-card31'
import FeatureCard4 from '../components/feature-card4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Icy Frugal Turkey</title>
        <meta property="og:title" content="Icy Frugal Turkey" />
      </Helmet>
      <header data-role="Accordion" className="home-header">
        <img
          alt="logo"
          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
          className="home-image"
        />
        <div className="home-separator"></div>
        <nav className="home-nav">
          <a href="#aboutme">
            <NavigationLinks
              rootClassName="rootClassName19"
              className="home-component"
            ></NavigationLinks>
          </a>
        </nav>
        <div data-role="AccordionHeader" className="home-accordion-header">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="AccordionContent" className="home-accordion-content">
          <div className="home-nav1">
            <NavigationLinks rootClassName="rootClassName20"></NavigationLinks>
          </div>
        </div>
      </header>
      <div className="home-hero">
        <div className="home-container01">
          <span className="home-text">Hi, I&apos;m</span>
          <h1 className="home-text01">Christopher</h1>
          <img
            src="/external/dsc03628-crop-1500h.jpg"
            className="home-image01"
          />
          <span className="home-text02">
            Social studies educator, passionate about helping students connect
            the past to the present to foster a deeper understanding of our
            world.
          </span>
        </div>
      </div>
      <div id="aboutme" className="home-features">
        <h1 className="home-text03">
          <span>About me</span>
          <br></br>
        </h1>
        <div className="home-separator1"></div>
        <span className="home-text06">
          <span>
            Greetings! I’m Christopher Walton, from beautiful Denver, Colorado.
            After graduating from the University of Colorado I relocated to
            Houston, Texas. There, I spent nine years teaching social studies at
            Heights High School and also served as a lead teacher.
          </span>
          <br></br>
          <br></br>
          <span>
            What I enjoy most about teaching is that it allows me to engage with
            students and colleagues daily in the activities that I find
            personally fulfilling. I’ve had the privilege of helping young
            learners understand that by studying history and cultures different
            from their own, they gain a better understanding of their own lives
            and the world we all inhabit. Outside the classroom, I channeled my
            passion for running as a coordinator for our campus cross-country
            team, where I focused on off-season training and conditioning. I
            also shared my love for the outdoors through my leadership role with
            the Woods Project, an organization dedicated to promoting outdoor
            education by taking high school age students on weekend and two-week
            camping trips across the western United States.
          </span>
          <br></br>
          <br></br>
          <span>
            In my personal time, I am an avid traveler. In college I studied for
            a semester in Berlin, Germany, and for an academic year in Varanasi,
            India. I have visited 25 countries in total, spread across all
            continents except Antarctica.
          </span>
          <br></br>
          <br></br>
        </span>
      </div>
      <div className="home-features1">
        <h1 className="home-text16">
          <span>
            Conferences and professional developments
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
        </h1>
        <div className="home-separator2"></div>
        <div className="home-container02">
          <FeatureCard31
            title="2019"
            action="Houston, Texas"
            image_src="/iblogo.p"
            description="AP World History  Summer Institute (experienced teachers) "
            rootClassName="rootClassName1"
          ></FeatureCard31>
          <FeatureCard31
            title="2018"
            action="Orlando, Florida"
            image_src="/iblogo-200h.png"
            description="International Baccalaureate Conference of the Americas"
            rootClassName="rootClassName8"
          ></FeatureCard31>
          <FeatureCard31
            title="2017"
            action="Toronto, Ontario"
            image_src="/iblogo-200h.png"
            description="International Baccalaureate Conference of the Americas"
            rootClassName="rootClassName5"
          ></FeatureCard31>
          <FeatureCard31
            title="2017"
            action="Houston, Texas"
            description="Kagan Cooperative Learning Strategies"
            rootClassName="rootClassName9"
          ></FeatureCard31>
          <FeatureCard31
            title="2016"
            action="Houston, Texas"
            image_src="/iblogo.p"
            description="AP World History  Summer Institute (new teachers) "
            rootClassName="rootClassName10"
          ></FeatureCard31>
          <div className="home-feature-card">
            <h2 className="home-text19">2015</h2>
            <span className="home-text20">AP annual conference</span>
            <span className="home-text21">Austin, Texas</span>
          </div>
          <div className="home-feature-card1">
            <h2 className="home-text22">2015</h2>
            <span className="home-text23">
              IB Individuals and Societies Unit Planning 
            </span>
            <span className="home-text24">Houston, Texas</span>
          </div>
          <div className="home-feature-card2">
            <h2 className="home-text25">2013</h2>
            <span className="home-text26">
              Margaret Kilgo: Standards and Objective Based Instruction  
            </span>
            <span className="home-text27">San Antonio, Texas</span>
          </div>
        </div>
      </div>
      <div className="home-steps">
        <h1 className="home-text28">Example instructional materials</h1>
        <div className="home-separator3"></div>
        <div className="home-container03">
          <div className="home-container04">
            <h1 className="home-text29">
              Unit 3: The Wealth and Poverty of Nations
            </h1>
          </div>
          <div className="home-container05">
            <div className="home-step">
              <h2 className="home-text30">Unit planner</h2>
              <img
                alt="image"
                src="/external/plan-200h.png"
                className="home-image02"
              />
              <a
                href="https://1drv.ms/w/s!AkbtihXnoK9zhb8cBUqXeBWH6GP5Hw"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <strong className="home-text31">MYP unit planner</strong>
              </a>
            </div>
            <div className="home-step1">
              <h2 className="home-text32">Facilitator slides</h2>
              <img
                alt="image"
                src="/presentations-200h.png"
                className="home-image03"
              />
              <a
                href="https://docs.google.com/presentation/d/11BU-RC-NxgEPsk_ymeI52H8JU9AKXD5JweK9rIXc88A/edit?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                <p className="home-text33">Unit intro. class slides </p>
              </a>
              <a
                href="https://docs.google.com/presentation/d/1mJmJwTYqt7dDhYhMZp-Blo91c03oP44hM0hAV8VY4Xg/edit?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link3"
              >
                <p className="home-text34">Topic 6: class slides</p>
              </a>
            </div>
            <div className="home-step2">
              <h2 className="home-text35">Assignments</h2>
              <img
                alt="image"
                src="/external/assignment-200h.png"
                className="home-image04"
              />
              <a
                href="https://docs.google.com/document/d/1bn5Ok2mDcdN9hRlAWpdjSP7GJezc3VSfxF5Nf4bcTTw/edit?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link4"
              >
                <p className="home-text36">
                  Global Political and Economic Inequity
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </a>
              <a
                href="https://docs.google.com/document/d/1XECTrxfITwwnk07FPu7CPnPt2X5aYXtx6Dpl0LAzjPw/edit?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link5"
              >
                <p className="home-text37">
                  Topic 6: research and presentation class assignment 
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features2">
        <h1 className="home-text38">
          <span>Campus enrichment </span>
          <br></br>
        </h1>
        <div className="home-separator4"></div>
        <div className="home-testimonial-card">
          <div className="home-testimonial">
            <div className="home-container06">
              <p className="home-text41">Woods project campus partner</p>
              <span>
                The Woods Project is a not-for-profit dedicated to helping
                students build social and emotional skills through outdoor
                education.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Duties included: </span>
              <div className="home-container07">
                <ul className="list">
                  <li className="home-li list-item">
                    <span>Organizing after school club activities</span>
                  </li>
                  <li className="home-li01 list-item">
                    <span>Leading weekend and summer backpacking trips </span>
                  </li>
                  <li className="home-li02 list-item">
                    <span>Processing registrations and medical paperwork </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <img
            alt="profile"
            src="/external/cf86d9bc-cd64-4c49-99b7-85bc93eb08a7-400w.jpg"
            className="home-image05"
          />
        </div>
        <div className="home-features3">
          <div className="home-container08">
            <div className="home-container09">
              <div className="home-feature-card3">
                <h2 className="home-heading">
                  Elected member campus Shared Decision-Making Committee
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h2>
                <span className="home-text47">
                  As a member of the Campus Shared Decision-Making Committee, I
                  served on an advisory board to the principal. During our
                  monthly meetings, the committee discussed, recommended, and
                  established campus policies, procedures, and educational
                  programs. Our responsibilities included: 
                </span>
                <ul className="list">
                  <li className="home-li03 list-item">
                    <span>
                      Discussing the campus budget and proposing budgetary and
                      staffing recommendations.
                    </span>
                  </li>
                  <li className="home-li04 list-item">
                    <span>
                      Reviewing and modifying campus policies, such as student
                      dress code.
                    </span>
                  </li>
                  <li className="home-li05 list-item">
                    <span>
                      Assessing and adjusting campus procedures, such as bell
                      schedules.
                    </span>
                  </li>
                  <li className="home-li06 list-item">
                    <span>
                      Formulating staff professional development plans.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="home-feature-card4">
                <h2 className="home-text52">
                  Elected member campus Shared Decision-Making Committee
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h2>
                <span className="home-text53">
                  I worked with students and parents to ensure cross-country
                  runners maintained their health and fitness during the
                  off-season. My responsibilities included:
                </span>
                <ul className="list">
                  <li className="home-li07 list-item">
                    <span>
                      Establishing off-season training schedules in coordination
                      with students and parents.
                    </span>
                  </li>
                  <li className="home-li08 list-item">
                    <span>
                      Assisting students with pre-season conditioning in August.
                    </span>
                  </li>
                  <li className="home-li09 list-item">
                    <span>
                      Managing paperwork to ensure compliance with legal and
                      medical requirements.
                    </span>
                  </li>
                </ul>
              </div>
              <FeatureCard4
                title="Personal Project mentor"
                description="As a Personal Project Mentor, I guided MYP Year 5 students through the development and completion of their IB Personal Projects. "
                rootClassName="rootClassName2"
              ></FeatureCard4>
              <FeatureCard4
                title="Extended Essay mentor "
                description="In the role of an Extended Essay mentor, I assisted IB Diploma candidates in developing and completing their IB Extended Essays."
                rootClassName="rootClassName3"
              ></FeatureCard4>
            </div>
          </div>
        </div>
      </div>
      <div className="home-steps1">
        <h1 className="home-text57">Technology</h1>
        <div className="home-separator5"></div>
        <div className="home-container10">
          <div className="home-container11">
            <div className="home-container12">
              <p className="home-text58">
                <span>Favorites for</span>
                <br></br>
                <span>student engagement</span>
                <br></br>
              </p>
              <div className="home-container13">
                <img
                  alt="image"
                  src="/external/peardeck-200h.png"
                  className="home-image06"
                />
                <img
                  alt="image"
                  src="/external/nearpod-200h.jpg"
                  className="home-image07"
                />
                <img
                  alt="image"
                  src="/external/genially-200h.webp"
                  className="home-image08"
                />
                <img
                  alt="image"
                  src="/external/googlefored1-200h.png"
                  className="home-image09"
                />
              </div>
            </div>
            <div className="home-container14">
              <p className="home-text63">
                <span>
                  Used for course
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>management</span>
              </p>
              <div className="home-container15">
                <img
                  alt="image"
                  src="/external/apclassroom-200h.png"
                  className="home-image10"
                />
                <img
                  alt="image"
                  src="/external/managebac-dev-fa6745ac-dev-managebac%20square-200h.png"
                  className="home-image11"
                />
                <img
                  alt="image"
                  src="/external/canvasslogo-200h.png"
                  className="home-image12"
                />
                <img
                  alt="image"
                  src="/external/google-classroom-logo-200h.png"
                  className="home-image13"
                />
              </div>
            </div>
            <div className="home-container16">
              <p className="home-text67">
                <span>
                  Languages and
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>libraries I program</span>
              </p>
              <div className="home-container17">
                <img
                  alt="image"
                  src="/external/css3-html5-javascript-logo-200h.png"
                  className="home-image14"
                />
                <img
                  alt="image"
                  src="/external/mern-200h.png"
                  className="home-image15"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
