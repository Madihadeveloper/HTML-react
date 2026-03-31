import { useState } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    month: "",
    day: "",
    year: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  const months = ["Month","January","February","March","April","May","June","July","August","September","October","November","December"];
  const days = ["Day", ...Array.from({ length: 31 }, (_, i) => i + 1)];
  const years = ["Year", ...Array.from({ length: 50 }, (_, i) => 2025 - i)];

  return (
    <section>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input type="text" name="firstName" placeholder="John" onChange={handleChange} />

          <label> Last Name: </label>
          <input type="text" name="lastName" placeholder="Smith" onChange={handleChange} />
        </div>

        <div>
          <label>Male </label>
          <input type="radio" name="gender" value="male" onChange={handleChange} />
          <label> Female </label>
          <input type="radio" name="gender" value="female" onChange={handleChange} />
          <label> Other </label>
          <input type="radio" name="gender" value="other" onChange={handleChange} />
        </div>

        <div>
          <label>Email: </label>
          <input type="email" name="email" placeholder="your email" onChange={handleChange} />

          <label> Password: </label>
          <input type="password" name="password" placeholder="your password" onChange={handleChange} />
        </div>

        <div>
          <label>Birthday: </label>
          <select name="month" onChange={handleChange}>
            {months.map((m, i) => <option key={i} value={m}>{m}</option>)}
          </select>
          <select name="day" onChange={handleChange}>
            {days.map((d, i) => <option key={i} value={d}>{d}</option>)}
          </select>
          <select name="year" onChange={handleChange}>
            {years.map((y, i) => <option key={i} value={y}>{y}</option>)}
          </select>
        </div>

        <div>
          <label>I agree to the terms and conditions </label>
          <input type="checkbox" name="agreed" onChange={handleChange} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default RegisterForm;