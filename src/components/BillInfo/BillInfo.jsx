import React, { useState } from "react";
import "./BillInfo.css";

const BillInfo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [townCity, setTownCity] = useState("");
  const [stateCountry, setStateCountry] = useState("");
  const [code, setCode] = useState("");
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [isNoSpam, setIsNoSpam] = useState(false);
  const [agreeTerm, setAgreeTerm] = useState(false);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleTownCity = (e) => {
    setTownCity(e.target.value);
  };

  const handleStateCountry = (e) => {
    setStateCountry(e.target.value);
  };

  const handleCode = (e) => {
    setCode(e.target.value);
  };

  const handleCheckbox = () => {
    setIsCheckbox(!isCheckbox);
  };

  const handleNoSpam = () => {
    setIsNoSpam(!isNoSpam);
  };

  const handleAgreeTerm = () => {
    setAgreeTerm(!agreeTerm);
  };

  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !phone || !address || !townCity || !stateCountry || !code ||!isCheckbox || !isNoSpam || !agreeTerm) { 
      alert("Hãy điền đầy đủ thông tin");
    }else {
      return;
    }
  };
  return (
    <div className="m-billing-info">
      <h2>Billing info</h2>
      <div className="m-billing-info-step">
        <p>Please enter your billing info</p>
        <p>Step 1 of 3</p>
      </div>
      <div className="m-billing-field">
        <div className="m__small-billing-field">
          <h3>First name</h3>
          <input type="text" placeholder="First name" value={firstName} onChange={handleFirstName}/>
        </div>
        <div className="m__small-billing-field">
          <h3>Last name</h3>
          <input type="text" placeholder="Last name" value={lastName} onChange={handleLastName}/>
        </div>
      </div>

      <div className="m-billing-field">
        <div className="m__small-billing-field">
          <h3>Email address</h3>
          <input type="text" placeholder="Email address" value={email} onChange={handleEmail} />
        </div>
        <div className="m__small-billing-field">
          <h3>Phone number</h3>
          <input type="text" placeholder="Phone number" value={phone} onChange={handlePhone}/>
        </div>
      </div>

      <div className="m-billing-field">
        <div className="m__small-billing-field">
          <h3>Address</h3>
          <input type="text" placeholder="Address" value={address} onChange={handleAddress}/>
        </div>
        <div className="m__small-billing-field">
          <h3>Town / City</h3>
          <input type="text" placeholder="Town / City" value={townCity} onChange={handleTownCity}/>
        </div>
      </div>

      <div className="m-billing-field">
        <div className="m__small-billing-field">
          <h3>State / Country</h3>
          <input type="text" placeholder="State / Country" value={stateCountry} onChange={handleStateCountry}/>
        </div>
        <div className="m__small-billing-field">
          <h3>ZIP/Postal code</h3>
          <input type="text" placeholder="ZIP/Postal code" value={code} onChange={handleCode} />
        </div>
      </div>

      <div className="m__billing-checkbox">
        <img
          src={isCheckbox ? "/icons/Checkboxes.svg" : "/icons/Uncheckboxes.svg"}
          alt="Uncheckboxes"
          onClick={handleCheckbox}
        />
        <p>Ship to a different address?</p>
      </div>

      <div className="m-billing-infor-container">
        <h2>Additional informations</h2>
        <div className="m-billing-info-step">
          <p>Need something else? We will make it for you!</p>
          <p>Step 4 of 3</p>
        </div>

        <p>Order notes</p>
        <textarea
          name=""
          placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..."
        ></textarea>
      </div>

      <div className="m-billing-infor-container">
        <h2>Confirmation</h2>
        <div className="m-billing-info-step">
          <p>
            We are getting to the end. Just few clicks and your order si ready!
          </p>
          <p>Step 3 of 3</p>
        </div>

        <div className="m-billing-nospam">
          <img
            src={isNoSpam ? "/icons/Checkboxes.svg" : "/icons/Uncheckboxes.svg"}
            alt=""
            onClick={handleNoSpam}
          />
          <p>
            I agree with sending an Marketing and newsletter emails. No spam,
            promissed!
          </p>
        </div>

        <div className="m-billing-agreeterm">
          <img
            src={
              agreeTerm ? "/icons/Checkboxes.svg" : "/icons/Uncheckboxes.svg"
            }
            alt=""
            onClick={handleAgreeTerm}
          />
          <p>I agree with our terms and conditions and privacy policy.</p>
        </div>
      </div>

      <button className="btn-complete" type="submit" onClick={(event) => {
          event.preventDefault();
          handleSubmit();
        }}>Complete order</button>

      <div className="m-billing-safe">
        <img src="/icons/ic-security-safety.svg" alt="" />
        <h4>All your data are safe</h4>
        <p>
          We are using the most advanced security to provide you the best
          experience ever.
        </p>
      </div>
    </div>
  );
};

export default BillInfo;
