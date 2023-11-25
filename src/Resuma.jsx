import React, { useState } from "react";
import { jsPDF } from "jspdf";
const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [intro, setIntro] = useState("");
  const [exp, setExp] = useState("");
  const [edu, setEdu] = useState("");
  const [skill, setSkill] = useState("");
  const [inter, setInter] = useState("");

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
  const changeInter = (e) => {
    setInter(e.target.value);
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
      // orientation: "portrait",
      // unit: "mm",
      // format: a4,
    });

    // doc.text(`Name: \n${name}`, 10, 30);
    if (name) {
      doc.setFontSize(20);
      doc.setTextColor(255, 0, 0);
      doc.text(`Name: `, 10, 30);
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(15);
      doc.text(`\n${name}`, 20, 30);
    }

    // doc.text(`Email: \n${email}`, 10, 50);

    if (email) {
      doc.setFontSize(20);
      doc.setTextColor(255, 0, 0);
      doc.text(`Email: `, 10, 50);
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(15);
      doc.text(`\n${email}`, 20, 50);
    }

    // doc.setFontSize(15);
    // doc.text(`About Me: \n${intro}`, 10, 70);

    if (intro) {
      doc.setFontSize(20);
      doc.setTextColor(255, 0, 0);
      doc.text(`About Me: `, 10, 70);
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(15);
      doc.text(` \n${intro}`, 20, 70);
    }

    if (exp) {
      doc.setFontSize(20);
      doc.setTextColor(255, 0, 0);
      doc.text(`Experiance: `, 10, 90);
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(15);
      const expPoints = exp.split("\n");
      let yPosition = 100;
      expPoints.forEach((point) => {
        doc.text("\u2022 " + point, 20, yPosition);
        yPosition += 10;
      });
    }

    // doc.text(`Experiance: ${exp}`, 10, 50);

    // doc.text(`Education: ${edu}`, 10, 60);
    if (edu) {
      doc.setFontSize(20);
      doc.setTextColor(255, 0, 0);
      doc.text(`Education:`, 10, 130);
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(15);
      const eduPoints = edu.split("\n");
      let yPosition = 140;
      eduPoints.forEach((point) => {
        // doc.setTextColor(255, 0, 0);
        doc.text("\u2022 " + point, 20, yPosition);
        yPosition += 10;
      });
    }

    if (skill) {
      doc.setFontSize(20);
      doc.setTextColor(255, 0, 0);
      doc.text(`Skills:`, 10, 170);
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(15);
      const skillPoints = skill.split("\n");
      let yPosition = 180;
      skillPoints.forEach((point) => {
        doc.text("\u2022 " + point, 20, yPosition);
        yPosition += 10;
      });
    }

    if (inter) {
      doc.setFontSize(20);
      doc.setTextColor(255, 0, 0);
      doc.text(`Interest:`, 10, 210);
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(15);
      const interPoints = inter.split("\n");
      let yPosition = 220;
      interPoints.forEach((point) => {
        doc.text("\u2022 " + point, 20, yPosition);
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
        <label>Interest</label>
        <br />
        <textarea
          placeholder="Interest"
          type="text"
          onChange={changeInter}
          value={inter}
          name="inter"
          required
          autoFocus
        />
        <br />
        <br />
        <input type="submit" />
      </form>

      <div className="display">
        Name:
        <br />
        {name}
        <br />
        <br />
        Email:
        <br />
        {email}
        <br />
        <br />
        About Me:
        <br />
        {intro}
        <br />
        <br />
        Experiance:
        <br />
        <ul>
          {exp.split("\n").map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        Education:
        <br />
        <ul>
          {edu.split("\n").map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        Skills:
        <br />
        <ul>
          {skill.split("\n").map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        Interest:
        <br />
        <ul>
          {inter.split("\n").map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <button onClick={generatePDF}>Download</button>
    </div>
  );
};

export default Login;
