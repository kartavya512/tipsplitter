import { useEffect, useState } from "react";
import Split from "./assets/images/logo.svg";
import People from "./assets/images/icon-person.svg";
import Dollar from "./assets/images/icon-dollar.svg";
import "./App.css";

function App() {
  const [bill, setBill] = useState(0);
  const [Amount, setAmount] = useState(0);
  const [billPerson, setBillPerson] = useState(0);
  const [person, setPerson] = useState(0);
  const [tipPercent, setTipPercent] = useState();
  useEffect(() => {

if (bill===NaN || person===NaN || tipPercent===NaN){
  setAmount(0);
  setBillPerson(0);
}

    if (person !== 0) {
      const tipAmount = (bill * (tipPercent / 100)) / person;
      const totalPerPerson =
        (parseInt(bill * (tipPercent / 100), 10) + parseFloat(bill, 10)) /
        person;

      if (tipAmount === NaN || totalPerPerson === NaN) {
        setAmount(0);
        setBillPerson(0);
      }

      setAmount(tipAmount.toFixed(2));
      setBillPerson(totalPerPerson.toFixed(2));
      return
    } else {
      setAmount(0);
      setBillPerson(0);
    }
  }, [person, bill, tipPercent ,Amount]);

  // ... rest of your component code

  return (
    <>
      <div className="bg flex justify-center items-center h-screen flex-col ">
        <img className="lg:-mt-[100px] -mt-60" src={Split}></img>
        <div className="bg-white w-1/2  lg:m-0  lg:mt-20 mt-8 rounded-2xl">
          <div className="flex lg:flex-row flex-col">
            <div className="lg:w-[45%] m-5">
              <label className=""> Bill</label>
              <br />
              <img className="absolute m-2 mt-4" src={Dollar}></img>
              <input
                className="w-full bg-neutral-100 text-right rounded-md outline-0 mb-2 border-teal-400 pr-2 py-1.5 mt-2  placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-teal-400"
                type="number"
                name="BillAmount"
                onChange={(e) => setBill(parseFloat(e.target.value, 10))}
                value={bill}
              ></input>
              <br />
              <label className="">Select Tip %</label>
              <br />
              
              <div className="grid grid-cols-3 mt-2">
                <button
                  type="button"
                  onClick={() => setTipPercent(5)}
                  className="focus:outline-none text-white bg-teal-900 hover:bg-teal-400  font-medium rounded-lg text-sm  me-11 mb-2  dark:hover:bg-teal-400 dark:focus:ring-teal-400 focus:bg-teal-400"
                >
                  5%
                </button>
                <button
                  type="button"
                  onClick={() => setTipPercent(10)}
                  className="focus:outline-none text-white bg-teal-900 hover:bg-teal-400   font-medium rounded-lg text-sm  me-11 mb-2 dark:hover:bg-teal-400 dark:focus:ring-teal-400 focus:bg-teal-400"
                >
                  10%
                </button>
                <button
                  type="button"
                  onClick={() => setTipPercent(15)}
                  className="focus:outline-none text-white bg-teal-900 hover:bg-teal-400  font-medium rounded-lg text-sm  me-11 mb-2 py-2 dark:hover:bg-teal-400 dark:focus:ring-teal-400 focus:bg-teal-400"
                >
                  15%
                </button>
                <button
                  type="button"
                  onClick={() => setTipPercent(25)}
                  className="focus:outline-none text-white bg-teal-900 hover:bg-teal-400  font-medium rounded-lg text-sm  me-11 mb-2 dark:hover:bg-teal-400 dark:focus:ring-teal-400 focus:bg-teal-400"
                >
                  25%
                </button>
                <button
                  type="button"
                  onClick={() => setTipPercent(50)}
                  className="focus:outline-none text-white bg-teal-900 hover:bg-teal-400  font-medium rounded-lg text-sm  me-11 mb-2 dark:hover:bg-teal-400 dark:focus:ring-teal-400 focus:bg-teal-400"
                >
                  50%
                </button>
                <input
                  className=" py-2  me-11 mb-1 outline-0 border-teal-400 placeholder:text-center  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-400"
                  placeholder="Custom"
                  type="number"
                  onChange={(e) => setTipPercent(parseInt(e.target.value, 10))}
                  value={tipPercent}
                ></input>
              </div>
              <div className="flex justify-between">
                <label className="">Number of People</label>
              </div>
              <br />
              <img className="absolute m-2 " src={People}></img>
              <input
                className="mb-5 bg-neutral-100 w-full text-right rounded-md outline-0 border-teal-400 pr-2 py-1.5  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-400 "
                type="number"
                onChange={(e) => setPerson(parseInt(e.target.value, 10))}
                value={person}
              ></input>
            </div>

            <div className="bg2 lg:w-[50%] p-10 m-5">
              <div className="flex justify-between">
                <div className="">
                  <span className=" text-white">Tip Amount</span>
                  <br />
                  <span className="text-sm">/ person</span>
                </div>
                <div className="text-4xl text-teal-400">${Amount}</div>
              </div>
              <div className="flex justify-between mt-5">
                <div className="">
                  <span className=" text-white">Total</span>
                  <br />
                  <span className="text-sm">/ person</span>
                </div>
                <div className="text-4xl text-teal-400">${billPerson}</div>
              </div>

              <button
                onClick={() => {
                  setAmount(0);
                  setBill(0);
                  setBillPerson(0);
                  setPerson(0);
                  setTipPercent("");
                }}
                className="rounded mt-14  ml-10 py-1 w-3/4 bg-teal-400 text-teal-900"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
