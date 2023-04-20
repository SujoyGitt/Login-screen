import { useState } from "react";
import "../scss/Basicform.scss";
let Basicform = () => {
  let [email, setemail] = useState();
  let [password, setpassword] = useState();
  let [allentry, setallentry] = useState([]);

  let submitform = (e) => {
    e.preventDefault();
    if (email && password) {
      const newEntry = { id: new Date().getTime().toString(), email, password };
      setallentry([...allentry, newEntry]);
      alert(`you are loggin successfully Your email is ${email} and password ${password}`)
      setemail("");
      setpassword("");
      console.log("User login id "+newEntry.id);
    } else {
      alert("plese fill the data");
    }
  };
  return (
    <>
      <form action="" onSubmit={submitform} className="loginform">
        <div className="email">
          <input
            id="email"
            type="email"
            placeholder="example123@gmail.com"
            value={email}
            autoComplete="off"
            onChange={(e) => setemail(e.target.value)}
            required
          />
        </div>

        <div className="password">
          <input
            id="password"
            placeholder="exam@123"
            type="password"
            value={password}
            autoComplete="off"
            onChange={(e) => setpassword(e.target.value)}
            required
          />
        </div>

        <div className="loginbtn text-center cursor-pointer">
          <button className="btn bg-white text-info " type="submit">
            Login
          </button><br />
          <a href="/">Forgot password</a>
        </div>
      </form>

    </>
  );
};
export default Basicform;
