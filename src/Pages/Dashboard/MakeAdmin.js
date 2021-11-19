import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("successfully added");
        }
      });
  };
  return (
    <div className="mt-5">
      <h1>Make A Admin</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field w-25 mt-3"
          name="email"
          placeholder="Email Address"
          type="email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn-style mt-3"
          type="submit"
          value="Make As Admin"
        />
      </form>
    </div>
  );
};

export default MakeAdmin;
