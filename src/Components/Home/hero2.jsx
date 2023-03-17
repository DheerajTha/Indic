import React from "react";
import { CgWebsite } from "react-icons/cg";
import { ImMobile } from "react-icons/im";
import { GrTechnology } from "react-icons/gr";
import "./hero2.css";
import intro from "../img/Intro.jpg";
import { MdLeaderboard } from "react-icons/md";

const Hero2 = () => {
  // try to use popup
  // const [ShowModal, setShowModal] = useState(false);
  // const MyModel = () => {
  //   return (
  //     <>
  //       <div class="popup">
  //         <h2>Popup Title</h2>
  //         <p>Popup content goes here.</p>
  //       </div>

  //       <button onClick={() => setShowModal(false)} className="button ">
  //         Close this Pop
  //       </button>
  //     </>
  //   );
  // };

  return (
    <>
      <div className="row">
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
          <div className="container text-center">
            <h2 className="text-dark intro">
              About <span className="text-primary">Indic Technologies</span>{" "}
            </h2>
            <h2 className="text-dark why">Why Choose us</h2>
            <div className="row d-flex   py-2  d-flex justify-content-between intro-about">
              <div className="col-lg-5 col-md-5 down">
                <img src={intro} alt="" className="img" width={800} />
              </div>
              <div className="col-lg-5 col-md-5  down">
                {/* <h2>Best IT-Solutions company near by you</h2> */}
                <h2>Our Purpose</h2>
                <h3>
                  To bring together the best of technology and our people to
                  supercharge progress.
                </h3>
                <h3>
                  We look forward to supercharging the next phase of our growth
                  with optimism and confidence, ready to seize the many
                  opportunities ahead. Our growth strategy for the emerging
                  digital future is built on five strategic objectives.”
                </h3>
                <ol>
                  <li>
                    <p>
                      1 . Expand our leadership through differentiated services
                      and products
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
