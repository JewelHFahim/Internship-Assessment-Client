import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";



const Layout1 = () => {
  const [startDate, setStartDate] = useState(new Date());
  
  const { register, handleSubmit } = useForm();

  const handleSubmitForm = (data, event) =>{
    const form = event.target;
    console.log(data, startDate);

    const user = {data, startDate };
  
      fetch("https://internship-assessment-server.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.acknowledged > 0){
            toast.success("Submited Succssfully")
          }
          form.reset();
        });
  }

  
  return (

      <div className="border border-slate-300 mt-5 ">


        <form  className="p-8" onSubmit={handleSubmit(handleSubmitForm)} >

          <div className="flex mb-3">
            <p className="w-1/3"></p>
            <p className="w-2/3 text-[25px] font-medium">Contact me</p>
          </div>

          <div className="flex mb-3">
            <p className="w-1/3 text-[22px]">Full Name: </p>

            <input name="name"  type="text" placeholder="Full Name"
            className="w-2/3 input input-bordered rounded-none bg-[#D9D9D9]"
            {...register("name")}
            />

          </div>

          <div className="flex mb-3">
            <p className="w-1/3 text-[22px]">Date of Birth: </p>
            <span className="w-2/3 input input-bordered rounded-none bg-[#D9D9D9]">
           <input type="date"
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-3  ml-52"
          /> 
        </span>

          </div>

          <div className="flex mb-3">
            <p className="w-1/3 text-[22px]">Email: </p>
            <input name="email"  type="email" placeholder="Email"
            className="w-2/3 input input-bordered rounded-none bg-[#D9D9D9]"
            {...register("email")}
            />
          </div>

          <div className="flex mb-3">
            <p className="w-1/3 text-[22px]">Phone Number: </p>
            <input name="number"  type="text" placeholder="Phone Number"
            className="w-2/3 input input-bordered rounded-none bg-[#D9D9D9]"
            {...register("number")}
            />
          </div>

          <div className="text-right">
            <button type="submit" className="btn btn-info rounded-none px-5 text-[22px] text-right">
              Submit
            </button>
          </div>
        </form>

      </div>
  );
};

export default Layout1;