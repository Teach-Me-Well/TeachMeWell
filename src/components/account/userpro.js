import React, { useState } from "react";
import Logo from "../pic.png";
import { TextField } from "@mui/material";
const UserProfile = () => {
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [formData, setFormData] = useState({
    Country: "",
    FullName: "",
    MobileNumber: "",
    Pincode: "",
    House: "",
    Area: "",
    Landmark: "",
    Town: "",
    State: "",
    checkbox: "",
    AddressType: "",
  });
  let name, value;
  const postFormData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };
  const submitData = async (event) => {
    event.preventDefault();
    const { Country, FullName, MobileNumber, Pincode, House, Area, Landmark, Town, State, checkbox, AddressType } = formData;
    if (Country && FullName && MobileNumber && Pincode && House && Area && Landmark && Town && State && checkbox && AddressType) {
      const res = await fetch(
        "https://svmb-416b4-default-rtdb.firebaseio.com/buy.json",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            Country,
            FullName,
            MobileNumber,
            Pincode,
            House,
            Area,
            Landmark,
            Town,
            State,
            checkbox,
            AddressType,
          }),
        }
      );
      if (res) {
        setFormData({
          Country: "",
          FullName: "",
          MobileNumber: "",
          Pincode: "",
          House: "",
          Area: "",
          Landmark: "",
          Town: "",
          State: "",
          checkbox: "",
          AddressType: "",
        });
        alert("data stored");

      } else {
        alert("plz fill data");
      }
    }
    else {
      alert("plz fill data");
    }
  }

  return (
    <div className="card" style={{ boxShadow:"6px 3px 9px 5px gray" , marginTop:"43px",
    width: "720px",
    marginLeft: "418px",
    height: "577px",

    position: "absolute"}}>
    <form>
    Profile Image:
      <input
        type="file"
        accept="image/*"
        style={{    
          marginTop: "73px",
          marginLeft: "253px",
          position: "absolute"
           
      }}
        onChange={(event) => {
          if (event?.target?.files?.[0]) {
            let reader = new FileReader();
            reader.onloadend = () => {
              let base64StringImage = reader.result;
              // You can use this base64StringImage to upload to server or display on UI
              console.log(base64StringImage);
              // Set image preview
              if (base64StringImage) {
                let imagePreviewElement: any =
                  document.getElementById("image-preview");
                imagePreviewElement.src = base64StringImage;
                // Set state
                if (typeof base64StringImage === "string") {
                  let base64ImageWithoutPrefix: string =
                    base64StringImage.split(",")[1];
                  console.log(base64ImageWithoutPrefix);
                  // Set state here
                  setProfileImage(base64ImageWithoutPrefix);
                }
              }
            };
            reader.readAsDataURL(event?.target?.files?.[0]);
          }
        }}
      />
      <br />
      <br />
      <img id="image-preview" src={Logo} width="100" height="100" style={{marginLeft: "336px",
          marginTop: "-112px",
          borderRadius: "50%"}}/>
      <br />
      <br />
      <div>
        <TextField id="filled-basic" label="First Name" variant="filled"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
    
     
        <TextField id="filled-basic" label="Last Name" variant="filled"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
        <div>
        <TextField id="filled-basic" label="College:" variant="filled" 
          type="text"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
        />
      
     
     
        <TextField id="filled-basic" label="Year:" variant="filled" 
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
   
      <br />
      </div>
      <div>
        <TextField id="filled-basic" label="Branch:" variant="filled" 
          type="text"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        />
    
      
      <label className="label-1">
        Date of Birth:
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </label>
      <br />
      </div>
      <br />
      <div>
      <label>
      
        <TextField id="filled-basic" label=" City:" variant="filled"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
     
        <TextField id="filled-basic" label="Mobile Number:" variant="filled"
          type="number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      <br />
      </div>
            <div className="details" style={{textAlign:"center"}}>
                <label for="State">State:</label>
                <select
                  id="State"
                  name="State"
                  className="details-input"
                  value={formData.State}
                  onChange={(event) => {
                    setFormData({ ...formData, State: event.target.value });
                  }}
                >
                  <option value="Select">Select</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadar and Nagar Haveli">
                    Dadar and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
            
    </form>
    <button class="btn btn-primary"  style={{marginTop:"28px",width:"150px", marginLeft:"297px"}}>Save</button>

    </div>
  );
};

export default UserProfile;