import MailPic from "../assets/images/mail-listing.png";
import "../App.css";

function Mail() {
  return (
    <>
      <section id="mail" className="container my-5">
        <div className="row align-items-center ">
          <div className="col-md-6  text-md-start mb-4 mb-md-0 ml">
            <h1 className="title1 px-5">
              Let’s create brands & products <br />
              People will love!
            </h1>
            <button className=" one mt-4 px-5">Subscribe To Mail listing</button>
          </div>

          <div className="col-md-6 mal">
            <img src={MailPic} alt="Mail Listing" className="img-fluid mailpic" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Mail;
