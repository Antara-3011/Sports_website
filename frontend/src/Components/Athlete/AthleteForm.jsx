import "./ath.css";
import { useState } from "react";
const Form = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>
      <div className="ath-profile ">
        <form className="ProfileClass bg-slate-300">
          <div className="profile-head">
            <h1 className="heading font-extrabold text-3xl text-center pb-8">
              Profile Information
            </h1>
          </div>

          <div className="flex justify-around">
            <div className="border border-stone-600 rounded-lg px-5 ">
              <div className="mt-5 mb-6 px-20 py-20 bg-slate-500 h-16 ">
                <p>IMAGE</p>
                <input type="file" onChange={handleChange} />
                <img src={file} />
              </div>
            </div>
            <div className="flex-col ml-10">
              <div className="flex">
                <div className="ml-3 mt-3">
                  <label htmlFor="username">Name</label>
                  <input
                    type="text"
                    placeholder="type here"
                    className="border ml-3 p-2 rounded-lg"
                    name="username"
                    id="username"
                  ></input>
                </div>

                <div className="ml-3 mt-5">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    placeholder="type here"
                    className="border ml-3 p-2 rounded-lg"
                    name="email"
                    id="email"
                  ></input>
                </div>
              </div>
              <div className="flex">
                <div className="ml-3 mt-3">
                  <label htmlFor="Age">Age</label>
                  <input
                    type="number"
                    placeholder="type here"
                    className="border ml-3 p-2 rounded-lg"
                    name="age"
                    id="age"
                  ></input>
                </div>
                <div className="ml-3 mt-3">
                  <label htmlFor="gender">Gender</label>
                  <input
                    type="text"
                    placeholder="type here"
                    className="border ml-3 p-2 rounded-lg"
                    name="gender"
                    id="gender"
                  ></input>
                </div>
              </div>
              <div className="flex">
                <div className="ml-3 mt-3">
                  <label htmlFor="height">Height</label>
                  <input
                    type="number"
                    placeholder="type here"
                    className="border ml-3 p-2 rounded-lg"
                    name="height"
                    id="height"
                  ></input>
                </div>
                <div className="ml-3 mt-3">
                  <label htmlFor="weight">Weight(kg)</label>
                  <input
                    type="number"
                    placeholder="type here"
                    className="border ml-3 p-2 rounded-lg w-24"
                    name="weight"
                    id="weight"
                  ></input>
                </div>
              </div>
              <div className="flex">
                <div className="ml-3 mt-3">
                  <label htmlFor="coachname">Coach</label>
                  <input
                    type="text"
                    placeholder="type here"
                    className="border ml-3 p-2 rounded-lg"
                    name="coachname"
                    id="coachname"
                  ></input>
                </div>
                <div className="ml-3 mt-3">
                  <label htmlFor="experience">Experience(yrs)</label>
                  <input
                    type="number"
                    placeholder="type here"
                    className="w-24 border ml-3 p-2 rounded-lg"
                    name="experience"
                    id="experience"
                  ></input>
                </div>
              </div>
              <div className="ml-3 mt-3">
                <label htmlFor="club">Club</label>
                <input
                  type="text"
                  placeholder="type here"
                  className="border ml-3 p-2 rounded-lg"
                  name="club"
                  id="club"
                ></input>
              </div>

              <div className="ml-3 mt-3">
                <label htmlFor="eachievement">Achievements</label>
                <textarea cols={50}></textarea>
              </div>
              <div className="flex mt-3">
                <div className="mt-5 border w-20 rounded-lg bg-black">
                  <button type="cancel" className="px-5 py-1 text-white">
                    Cancel
                  </button>
                </div>
                <div className="mt-5 border w-20 ml-6 rounded-lg bg-black">
                  <button type="save" className="px-5 py-1 text-white">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;
