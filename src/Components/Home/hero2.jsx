import React from "react";
import { CgWebsite } from "react-icons/cg";
import { ImMobile } from "react-icons/im";
import { GrTechnology } from "react-icons/gr";
import "./hero2.css";
import intro from "../img/Intro.jpg";
import Accordian from "./Accordian";
import laptop from "../img/laptop.png";
import { AiOutlineCloudSync } from "react-icons/ai";

const Hero2 = () => {
  return (
    <>
      <div className="row">
        {/* first row */}
        <div className="row">
          <div className="container ">
            <div className="col-lg-11   main">
              <h2 className="text-dark intro">
                About <span>Indic Technologies</span>
              </h2>
              <p>
                At <span className="highlight"> Indic Technologies</span>, we
                specialize in providing top-quality web development and app
                development services to businesses of all sizes. Our team of
                experienced developers is passionate about creating custom
                solutions that meet the unique needs of our clients. Whether you
                need a simple website or a complex web application, we've got
                you covered. We work with the latest technologies and frameworks
                to ensure that your website is fast, secure, and optimized for
                search engines. Our web development services include custom
                website design, website development, e-commerce solutions, CMS
                development, and more. We also specialize in mobile app
                development for iOS and Android platforms. Our team of app
                developers has years of experience in creating intuitive,
                user-friendly, and visually appealing apps that help businesses
                reach their target audience. We follow a streamlined app
                development process, from initial ideation to the final product
                launch, to ensure that your app is delivered on time and within
                budget. At{" "}
                <span className="highlight"> Indic Technologies</span>, we
                believe that communication is key to a successful project. We
                work closely with our clients to understand their vision and
                goals, and we keep them informed every step of the way. Our team
                is always available to answer any questions and provide support
                throughout the development process and beyond. We understand
                that every business is unique, and that's why we offer
                customized solutions that meet your specific needs. Our pricing
                is transparent, and we work with you to develop a budget that
                works for your business. Thank you for considering{" "}
                <span className="highlight"> Indic Technologies</span> for your
                web development and app development needs. We look forward to
                working with you and helping your business succeed in today's
                digital world.
              </p>
            </div>
          </div>
        </div>
        {/* second row */}

        <div className="container d-flex text-center  py-2  d-flex justify-content-evenly introarea ">
          <div className="col-lg-3 col-md-4 border mx-5 service ">
            <CgWebsite size={70} />
            <h2>Web Development</h2>
            <p>
              Finding a web development company that understands your goals and
              can deliver the best results possible within your budget can be
              difficult at times.Though you can choose a trustworthy company,
              consider offering you everything in a balanced and organized
              manner. A company that listens to every single client and is
              recognized as proactive, goal-oriented leaders whocollaborate to
              achieve the best results possible.If you are looking for the best
              web development company, Indic may be the best fit for you, as
              their work reflects the values of social responsibility to provide
              the best web development services.Our web design services
            </p>
          </div>
          <div className="col-lg-3 col-md-4 border mx-5 service">
            <div className="card-body">
              <ImMobile size={70} />
              <h2>App Development</h2>
              <p>
                Though there are numerous mobile app development services
                available, as responsible citizens, you should select the most
                dependable. Adel social was established with a focus on digital
                transformation through the adoption of technologies and new
                trends. offer a variety of business solutions to help small,
                medium-sized, and large businesses reach their target market and
                increase sales Adel social worked as an outside mobile
                application development team for a digital firm. They primarily
                assisted with internal application development initiatives.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 border mx-5 service">
            <GrTechnology size={70} />
            <h2>Managed IT services</h2>
            <p>
              Managed services is the practice of outsourcing the responsibility
              for maintaining, and anticipating need for, a range of processes
              and functions, ostensibly for the purpose of improved operations
              and reduced budgetary expenditures through the reduction of
              directly-employed staff.It is an alternative to the break/fix or
              on-demand outsourcing model where the service provider performs
              on-demand services and bills the customer only for the work done.
              Managed IT services are beneficial for both large organizations
              and small businesses; new companies and established ones. Some of
              the benefits of using managed services include:
            </p>
          </div>
        </div>

        <div className="row">
          <div className="conatiner text-center down">
            <h2>Best It technologies service Near By Your</h2>
            <h3>
              To bring together the best of technology and our people to
              supercharge progress.
            </h3>
            <h3>
              We look forward to supercharging the next phase of our growth with
              optimism and confidence, ready to seize the many opportunities
              ahead. Our growth strategy for the emerging digital future is
              built on five strategic objectives.”
            </h3>
          </div>
        </div>
        <div className="container text-center">
          <div className="row d-flex   py-2  d-flex justify-content-between intro-about">
            <div className="col-lg-5 col-md-5 down">
              <img src={intro} alt="" className="img" width={800} />
            </div>
            <div className="col-lg-5 col-md-5  down">
              {/* <h2>Best IT-Solutions company near by you</h2> */}

              <Accordian />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="container d-flex text-center">
            <div className="col-7 d-flex justify-content-evenly align-items-center">
              <div className="row">
                <div className="col-lg-8">
                  <img src={laptop} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-3">
                  <p className="bg-primary py-2 m-2 ms-auto text-center text-white fw-bold fs-3">
                    Cool <br /> Design
                  </p>
                </div>
              </div>
            </div>
            <div className="col-5   ">
              <h2>Indic Technologies Vision</h2>
              <p>
                Our team of experienced developers and designers is dedicated to
                creating customized and scalable web and app development
                solutions that meet our clients' unique needs and requirements.
                We use the latest technologies and methodologies to create
                intuitive and user-friendly interfaces that deliver an
                exceptional user experience.
              </p>
              <div className="row">
                <h2>
                  <AiOutlineCloudSync size={40} />
                  Managed it service
                </h2>
                <p>
                  Proactive, efficient and reliable IT management solutions for
                  businesses of all sizes.
                </p>
                <div className="col-6">
                  <div></div>
                  <div>
                   <h3><CgWebsite/> Web Development</h3>
                   <p>ustomized and scalable web development solutions designed to enhance user experience, improve online presence and drive business growth.</p>
                   
                   </div>
                </div>
                <div className="col-6">
                  <div>
                    <h3>App Development</h3>
                    <p>Innovative and intuitive app development solutions that help businesses create engaging user experiences, drive engagement, and achieve their goals.</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
