import GetPic from "../assets/images/geintouch.png";
import "../App.css";

function Get() {
  return (
    <>
      <section id="Get-in-touch" className=" my-5 py-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0 getimg">
            <img src={GetPic} alt="Get In Touch" className="img-fluid getpic" />
          </div>

          <div className="col-md-6 getco">
            <h1 className="title text">Get In Touch With Us</h1>
            <p className="mb-4 parag">
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Qui pariatur impedit non?
            </p>
            <form>
              <div className="mb-3 in">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Name"
                />
              </div>
              <div className="mb-3 in">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="mb-3 in">
                <input
                  type="email"
                  className="form-control "
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-3 in">
                <input
                  type="text" 
                  className="form-control "
                  placeholder="Your Message"
                />
              </div>

            </form>
            <button type="submit" className="button1 bone">
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Get;
