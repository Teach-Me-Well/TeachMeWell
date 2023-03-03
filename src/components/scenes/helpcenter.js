import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "../../redux/cssfile/main.css"
import "react-toastify/dist/ReactToastify.css";

const Help = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, contact, message } = userData;
    if (name && email && contact && message) {
      const res = await fetch(
        "https://magva-2311b-default-rtdb.firebaseio.com/HelpCenterRecords.json",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            contact,
            message,
          }),
        }
      );
      if (res) {
        setUserData({
          name: "",
          email: "",
          contact: "",
          message: "",
        });
        alert("data stored");
      } else {
        alert("plz fill data");
      }
    } else {
      alert("plz fill data");
    }
  };
  return (
    <>
      <section style={{ overflow: "hidden" }}>
        <div className="container py-5 h-100 w-100">
          <div className="row d-flex justify-content-center align-items-center h-100 mx-auto">
            <div className="col-xl-6">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src={Logo}
                          style={{ width: "303px", margin: "-103px" }}
                          alt="logo"
                        />
                        <h4
                          className="mt-1 mb-5 pb-1"
                          style={{
                            fontSize: "30px",
                            fontWeight: "700",
                          }}
                        >
                          Welcome To MAGVA Customer service
                        </h4>
                      </div>

                      <form>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            name="name"
                            placeholder="NAME"
                            value={userData.name}
                            onChange={postUserData}
                            className="form-control"
                          />
                          <label className="form-label" for="form2Example11">
                            Name
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                           type="contact"
                           name="contact"
                           placeholder="Contact no."
                           value={userData.contact}
                           onChange={postUserData}
                            className="form-control"
                          />
                          <label className="form-label" for="form2Example22" v>
                            Contact number.
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                             type="email"
                             name="email"
                             placeholder="EMAIL-ID"
                             value={userData.email}
                             onChange={postUserData}
                            className="form-control"
                          />
                          <label className="form-label" for="form2Example22">
                            E-mail I'd
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <textarea
                            type="message"
                            name="message"
                            placeholder="WRITE YOUR QUERY"
                            value={userData.message}
                            onChange={postUserData}
                            className="form-control"
                          />
                          
                        </div>

                        <div className="d-flex justify-content-center">
                          <button
                            type="submit"
                            onClick={submitData}
                            className="gradient-custom-2 my-1"
                          >
                            Enquire now
                          </button>
                        </div>
                        {/* <br></br> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Help;
