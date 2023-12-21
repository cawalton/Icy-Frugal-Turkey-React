import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FeatureCard31 from '../components/feature-card31'
import FeatureCard4 from '../components/feature-card4'
import GalleryCard3 from '../components/gallery-card3'
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
            className="home-image1"
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
        <span>
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
      <div className="home-features2">
        <h1 className="home-text28">
          <span>Example instructional materials</span>
          <br></br>
        </h1>
        <div className="home-container03">
          <strong className="home-text31">
            Unit 3: The Wealth and Poverty of Nations
          </strong>
        </div>
        <div className="home-container04">
          <a
            href="https://1drv.ms/w/s!AkbtihXnoK9zhb8cBUqXeBWH6GP5Hw"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link1"
          >
            <p className="home-text32">Unit planner</p>
          </a>
          <a
            href="https://docs.google.com/presentation/d/11BU-RC-NxgEPsk_ymeI52H8JU9AKXD5JweK9rIXc88A/edit?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link2"
          >
            <p className="home-text33">Unit intro. class slides </p>
          </a>
          <a
            href="https://docs.google.com/document/d/1bn5Ok2mDcdN9hRlAWpdjSP7GJezc3VSfxF5Nf4bcTTw/edit?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link3"
          >
            <p className="home-text34">
              Global Political and Economic Inequity
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </a>
          <a
            href="https://docs.google.com/presentation/d/1mJmJwTYqt7dDhYhMZp-Blo91c03oP44hM0hAV8VY4Xg/edit?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link4"
          >
            <p className="home-text35">T6: class slides</p>
          </a>
          <a
            href="https://docs.google.com/document/d/1XECTrxfITwwnk07FPu7CPnPt2X5aYXtx6Dpl0LAzjPw/edit?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link5"
          >
            <p className="home-text36">
              T6: research and presentation class assignment 
            </p>
          </a>
        </div>
      </div>
      <div className="home-features3">
        <h1 className="home-text37">
          <span>Campus enrichment </span>
          <br></br>
        </h1>
        <div className="home-separator3"></div>
        <div className="home-testimonial-card">
          <div className="home-testimonial">
            <div className="home-container05">
              <span className="home-text40">Woods project campus partner</span>
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
              <div className="home-container06">
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
            className="home-image2"
          />
        </div>
        <div className="home-features4">
          <div className="home-container07">
            <div className="home-container08">
              <div className="home-feature-card3">
                <svg viewBox="0 0 1024 1024" className="home-icon2">
                  <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                </svg>
                <h2 className="home-text46">
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
                <svg viewBox="0 0 1024 1024" className="home-icon4">
                  <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                </svg>
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
      <div className="home-gallery">
        <h1 className="home-text57">Our portfolio</h1>
        <span className="home-text58">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <br></br>
          <span>
            <span>
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <div className="home-container09">
          <GalleryCard3
            image_src="/external/managebac-dev-fa6745ac-dev-managebac%20square-1500h.png"
            rootClassName="rootClassName"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName1"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName3"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1531829039722-d3fb3e705a4b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName2"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName4"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName5"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName6"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName7"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName8"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1510172951991-856a654063f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName9"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName10"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1472157510410-64a053cbc39f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName11"
          ></GalleryCard3>
        </div>
      </div>
    </div>
  )
}

export default Home
