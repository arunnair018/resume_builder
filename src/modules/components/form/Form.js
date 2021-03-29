import "./Form.css";
import { React, useState, useEffect } from "react";
import Taggit from "../taggit/Taggit";

const Form = ({ formProp }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    mobile: "",
  });
  const [tags, setTags] = useState([]);

  const [edInput, setEdInput] = useState([
    { Institute: "", Year: "", Degree: "" },
  ]);

  const [exInput, setExInput] = useState([
    { Company: "", Year: "", Designation: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleTags = (value) => {
    setTags(value);
  };

  const handleEdInput = (e) => {
    e.preventDefault();
    setEdInput([...edInput, { Institute: "", Year: "", Degree: "" }]);
  };

  const handleExInput = (e) => {
    e.preventDefault();
    setExInput([...exInput, { Company: "", Year: "", Designation: "" }]);
  };

  const handleEdInputChange = async (index, e) => {
    e.preventDefault();
    console.log(e.target.name);
    const values = [...edInput];
    switch (e.target.name) {
      case "Institute":
        values[index].Institute = e.target.value;
        break;
      case "Year":
        values[index].Year = e.target.value;
        break;
      case "Degree":
        values[index].Degree = e.target.value;
        break;
      default:
        break;
    }
    await setEdInput(values);
    console.log(edInput);
  };

  const handleExInputChange = async (index, e) => {
    e.preventDefault();
    console.log(e.target.name);
    const values = [...exInput];
    switch (e.target.name) {
      case "Company":
        values[index].Company = e.target.value;
        break;
      case "Year":
        values[index].Year = e.target.value;
        break;
      case "Designation":
        values[index].Designation = e.target.value;
        break;
      default:
        break;
    }
    await setExInput(values);
    console.log(exInput);
  };

  // useEffect(() => {
  //   setForm(props.form);
  //   setTags(props.tags);
  //   setExperience(props.experience);
  //   setEducation(props.education);
  // }, [props]);

  return (
    <>
      <div className="container">
        <br />
        <br />

        <form onSubmit={handleSubmit}>
          <h3>Basic Details</h3>
          <hr />
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={form.name || ""}
              placeholder="Enter Name"
              onChange={(e) => {
                const newState = { ...form, name: e.target.value };
                setForm(newState);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
              value={form.email || ""}
              onChange={(e) => {
                const newState = { ...form, email: e.target.value };
                setForm(newState);
              }}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Mobile</label>
            <input
              type="tel"
              className="form-control"
              id="mobile"
              placeholder="Enter Mobile"
              value={form.mobile || ""}
              onChange={(e) => {
                const newState = { ...form, mobile: e.target.value };
                setForm(newState);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={form.value || ""}
              placeholder="Enter Address"
              onChange={(e) => {
                const newState = { ...form, address: e.target.value };
                setForm(newState);
              }}
            />
          </div>
          <br />
          <h3>Education</h3>
          <hr />

          <div>
            {edInput.map((field, i) => (
              <>
                <div key={i} className="row">
                  <div className="form-group col-sm-12 col-md-4">
                    <label>Institute</label>
                    <input
                      type="text"
                      className="form-control"
                      value={field.Institute}
                      id={field.Institute + i.toString()}
                      onChange={(e) => handleEdInputChange(i, e)}
                      name="Institute"
                    />
                  </div>
                  <div className="form-group col-sm-12 col-md-4">
                    <label>Year</label>
                    <input
                      type="text"
                      className="form-control"
                      value={field.Year}
                      id={field.Year + i.toString()}
                      name="Year"
                      onChange={(e) => handleEdInputChange(i, e)}
                    />
                  </div>
                  <div className="form-group col-sm-12 col-md-4">
                    <label>Degree</label>
                    <input
                      type="text"
                      className="form-control"
                      value={field.Degree}
                      id={field.Degree + i.toString()}
                      name="Degree"
                      onChange={(e) => handleEdInputChange(i, e)}
                    />
                  </div>
                </div>
              </>
            ))}
            <button className="btn btn-primary" onClick={handleEdInput}>
              + ADD
            </button>
          </div>
          <br />
          <h3>Experience</h3>
          <hr />

          <div>
            {exInput.map((field, i) => (
              <>
                <div key={i} className="row">
                  <div className="form-group col-sm-12 col-md-4">
                    <label>Company</label>
                    <input
                      type="text"
                      className="form-control"
                      value={field.Institute}
                      id={field.Institute + i.toString()}
                      name="Company"
                      onChange={(e) => handleExInputChange(i, e)}
                    />
                  </div>
                  <div className="form-group col-sm-12 col-md-4">
                    <label>Year</label>
                    <input
                      type="text"
                      className="form-control"
                      value={field.Year}
                      id={field.Year + i.toString()}
                      name="Year"
                      onChange={(e) => handleExInputChange(i, e)}
                    />
                  </div>
                  <div className="form-group col-sm-12 col-md-4">
                    <label>Designation</label>
                    <input
                      type="text"
                      className="form-control"
                      value={field.Degree}
                      id={field.Degree + i.toString()}
                      name="Designation"
                      onChange={(e) => handleExInputChange(i, e)}
                    />
                  </div>
                </div>
              </>
            ))}
            <button className="btn btn-primary" onClick={handleExInput}>
              + ADD
            </button>
          </div>
          <br />
          <h3>Skills</h3>
          <hr />
          <Taggit handler={handleTags} tags={tags} />

          <br />
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <br />
          <br />
        </form>
      </div>
    </>
  );
};

export default Form;
