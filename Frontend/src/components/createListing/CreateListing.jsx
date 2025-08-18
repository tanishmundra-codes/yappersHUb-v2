import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateListing() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    owner: "",
    image: ""
  });

  const navigate = useNavigate();
   
  // e.target.name → jo bhi input ka name="title" ya name="description" hai, wahi field update karega.
  // e.target.value → input box me jo value hai.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
  };
 
  // headers: { "Content-Type": "application/json" } → bata raha hai ki data JSON format me bheja ja raha hai.
  // body: JSON.stringify(formData) → form ka pura data JSON string me backend ko bhejta hai.
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      Title :
      <input name="title" placeholder="title" onChange={handleChange} />
      <br /> <br /> 
      Description :
      <textarea name="description" placeholder="description" onChange={handleChange} />
      <br /> <br />
      Link :
      <input name="link" placeholder="link" onChange={handleChange} />
      <br /> <br />
      Owner :
      <input name="owner" placeholder="owner" onChange={handleChange} />
      <br /> <br />
      Image :
      <input name="image" placeholder="image" onChange={handleChange} />
      <br /> 
      <button type="submit">Add</button>
    </form>
  );
}

export default CreateListing;
