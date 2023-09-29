import React, { useState } from "react";
import { jsPDF } from "jspdf";
const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [intro, setIntro] = useState("");
  const [exp, setExp] = useState("");
  const [edu, setEdu] = useState("");
  const [skill, setSkill] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeIntro = (e) => {
    setIntro(e.target.value);
  };
  const changeExp = (e) => {
    setExp(e.target.value);
  };
  const changeEdu = (e) => {
    setEdu(e.target.value);
  };
  const changeSkill = (e) => {
    setSkill(e.target.value);
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (!email || !intro) {
      alert("Fields are required");
    } else {
      alert("Your form is submitted");
    }
  };

  let generatePDF = () => {
    const doc = new jsPDF({
      // orientation: "p",
      // unit: "mm",
      // format: [100, 100],
    });

    doc.setFontSize(20);
    // doc.text(10, 20, "Name: " + name);
    doc.text(`Name: \n${name}`, 10, 30);
    // doc.text(10, 20, "Email: " + email);
    doc.text(`Email: \n${email}`, 10, 50);

    doc.setFontSize(15);
    doc.text(`About Me: \n${intro}`, 10, 70);

    if (exp) {
      doc.setFontSize(15);
      doc.text(`Experiance: `, 10, 90);
      doc.setFontSize(12);
      const expPoints = exp.split("\n");
      let yPosition = 100;
      expPoints.forEach((point) => {
        doc.text("\u2022 " + point, 10, yPosition);
        yPosition += 10;
      });
    }

    // doc.text(`Experiance: ${exp}`, 10, 50);

    // doc.text(`Education: ${edu}`, 10, 60);
    if (edu) {
      doc.setFontSize(15);
      doc.text(`Education:`, 10, 130);
      doc.setFontSize(12);
      const eduPoints = edu.split("\n");
      let yPosition = 140;
      eduPoints.forEach((point) => {
        doc.text("\u2022 " + point, 10, yPosition);
        yPosition += 10;
      });
    }

    if (skill) {
      doc.setFontSize(15);
      doc.text(`Skills:`, 10, 170);
      doc.setFontSize(12);
      const skillPoints = skill.split("\n");
      let yPosition = 180;
      skillPoints.forEach((point) => {
        doc.text("\u2022 " + point, 10, yPosition);
        yPosition += 10;
      });
    }

    doc.save("a4.pdf");
  };

  return (
    <div className="form-data">
      <form onSubmit={handleChange} className="form">
        <br />
        <br />
        <label>Name</label>
        <br />
        <input
          placeholder="Enter Your Name"
          type="text"
          onChange={changeName}
          value={name}
          name="name"
          required
          autoFocus
        />
        <br />
        <br />

        <label>Email</label>
        <br />
        <input
          placeholder="Enter Your Email"
          type="text"
          onChange={changeEmail}
          value={email}
          name="email"
          required
          autoFocus
        />

        <br />
        <br />
        <label>About Me</label>
        <br />
        <textarea
          placeholder="Enter Your Introduction"
          type="text"
          onChange={changeIntro}
          value={intro}
          name="intro"
          required
          autoFocus
        />
        <br />
        <br />
        <label>Experiance</label>
        <br />
        <textarea
          placeholder="Enter Your Experiance"
          type="text"
          onChange={changeExp}
          value={exp}
          name="exp"
          required
          autoFocus
        />
        <br />
        <br />
        <label>Education</label>
        <br />
        <textarea
          placeholder="Enter Your Education"
          type="text"
          onChange={changeEdu}
          value={edu}
          name="edu"
          required
          autoFocus
        />
        <br />
        <br />
        <label>Skills</label>
        <br />
        <textarea
          placeholder="Enter Your Skills"
          type="text"
          onChange={changeSkill}
          value={skill}
          name="skill"
          required
          autoFocus
        />
        <br />
        <br />
        <input type="submit" />
      </form>

      <div className="display">
        Name: {name}
        <br />
        <br />
        Email: {email}
        <br />
        <br />
        About Me: {intro}
        <br />
        <br />
        Experiance: {exp}
        <br />
        <br />
        Education: {edu}
        <br />
        <br />
        Skills: {skill}
      </div>

      <button onClick={generatePDF}>Download</button>
    </div>
  );
};

export default Login;
