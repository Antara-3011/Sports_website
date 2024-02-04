import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function TournamentCreateform() {
  const navigate = useNavigate();
  const [tournamentName, setTournamentName] = useState("");
  const [tournamentID, setTournamentID] = useState("");
  const [tournamentDate, setTournamentDate] = useState("");
  const [tournamentVenue, setTournamentVenue] = useState("");
  const [registrationStart, setregistrationStart] = useState("");
  const [registrationEnd, setregistrationEnd] = useState("");
  const [hName, sethName] = useState("");
  const [hEmail, sethEmail] = useState("");
  const [hMobile, sethMobile] = useState("");
  const handleCreate = () => {
    if (tournamentName.length == 0) {
      alert("Invalid form,tournament name can not be empty");
      return;
    }
    if (tournamentID.length == 0) {
      alert("Invalid Form, Tournament ID can not be empty");
      return;
    }
    if (tournamentVenue.length == 0) {
      alert("Invalid Form,Tournament Venue can not be empty");
      return;
    }
    if (tournamentDate.length == 0) {
      alert("Invalid Form,Tournament Date can not be empty");
      return;
    }
    if (registrationStart.length == 0) {
      alert("Invalid Form,Tournament  start date can not be empty");
      return;
    }
    if (registrationEnd.length == 0) {
      alert("Invalid Form,Tournament End date can not be empty");
      return;
    }
    if (hName.length == 0) {
      alert("Invalid Form,name can not be empty");
      return;
    }
    if (hEmail.length == 0) {
      alert("Invalid Form,email can not be empty");
      return;
    }
    if (hMobile.length == 0) {
      alert("Invalid Form,mobile number can not be empty");
      return;
    }
    navigate("/admin");
  };

  return (
    <div className="flex flex-col justify-center h-full items-center bg-lime-200">
      <h1 className="font-bold text-2xl mt-10">Create Tournament</h1>
      <form className="max-w-4xl mx-auto rounded-lg bg-slate-300">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="tournament-name"
            >
              Tournament Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="tournament-name"
              type="text"
              placeholder=""
              onChange={(e) => setTournamentName(e.target.value)}
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="tournament-id"
            >
              Tournament ID
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="tournament-id"
              type="text"
              placeholder=""
              onChange={(e) => setTournamentID(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="doe"
            >
              Date Of Event
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="doe"
              type="date"
              placeholder=""
              onChange={(e) => setTournamentDate(e.target.value)}
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="venue"
            >
              Venue
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="venue"
              type="text"
              placeholder=""
              onChange={(e) => setTournamentVenue(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="rsd"
            >
              Registration Start date
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="rsd"
              type="date"
              placeholder=""
              onChange={(e) => setregistrationStart(e.target.value)}
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="red"
            >
              Registration End date
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="red"
              type="date"
              placeholder=""
              onChange={(e) => setregistrationEnd(e.target.value)}
            />
          </div>
        </div>
        <h1 className="font-bold p-1 mb-4">Single Point of Contact</h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="hname"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="hname"
              type="text"
              placeholder=""
              onChange={(e) => sethName(e.target.value)}
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="hemail"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="hemail"
              type="email"
              placeholder=""
              onChange={(e) => sethEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="ph-number"
            >
              Mobile number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="ph-number"
              type="text"
              placeholder=""
              onChange={(e) => sethMobile(e.target.value)}
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-6 mb-6 w-40 bg-cyan-600 text-white ml-auto"
          onClick={handleCreate}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
