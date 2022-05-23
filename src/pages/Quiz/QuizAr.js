import React, { useState } from "react";
import { Link } from "react-router-dom";

function QuizAr(props) {
  const [hide, setHide] = useState(true);
  const [correcte, SetCorrect] = useState(false);
  const [evaluer, setEvaluer] = useState("");
  const [desact, SetDesact] = useState(false);

  const [check1, SetCheck1] = useState(false);
  const [check2, SetCheck2] = useState(false);
  const [check3, SetCheck3] = useState(false);

  const voirSolution = () => {
    if (props.propoCor === "1") SetCheck1(true);
    if (props.propoCor === "2") SetCheck2(true);
    if (props.propoCor === "3") SetCheck3(true);
  };

  const handleSubmit = (e) => {
    SetDesact(true);
    if (e.target.value === props.propoCor) {
      SetCorrect(true);
      setHide(false);
      setEvaluer("ممتاز 🎉✨");
    } else {
      SetCorrect(false);
      setHide(false);
      setEvaluer("خطأ 🤯");
    }
  };
  const handleReset = () => {
    SetCheck1(false);
    SetCheck2(false);
    SetCheck3(false);
    setEvaluer("");
    SetDesact(false);
    setHide(true);
    SetCorrect(false);
  };
  return (
    <div className="flex flex-col lg:gap-10 md:gap-2 lg:rounded-r-[50px] md:rounded-r-[30px] bg-white h-screen  font-['Tajawal'] w-screen">
      <div className=" flex flex-col justify-center gap-5">
        <div
          dir="rtl"
          className="bg-symapp-blue lg:h-28 md:h-20 lg:rounded-tr-[50px] md:rounded-tr-[30px] flex justify-between pl-4 pr-4"
        >
          <div dir="rtl" className="flex items-center gap-10">
            <Link to="../cours">
              <div className="flex justify-center items-center md:w-10 lg:w-14 md:h-10 lg:h-14 bg-[#FAE0B2] rounded-lg hover:cursor-pointer hover:scale-110 hover:shadow-sm">
                <img
                  className="scale-x-flip w-fit"
                  src="/quiz/return.svg"
                  alt=""
                />
              </div>
            </Link>
            <div dir="rtl" className="flex flex-col gap-1 items-start">
              <h1 className="text-white font-bold md:text-2xl lg:text-3xl">
                السؤال {props.position}
              </h1>
            </div>
          </div>
          <button onClick={handleReset}>
            <img
              className="md:w-10 lg:w-12 scale-x-flip hover:scale-x-flip hover:cursor-pointer hover:scale-110 hover:shadow-sm"
              src="/quiz/reload.svg"
              alt=""
            />
          </button>
        </div>

        <div className="mx-10 flex flex-row gap-20 justify-center items-center">
          <div className="flex flex-col mt-5 gap-5 justify-around items-end">
            <div className="flex flex-col justify-center items-end gap-10">
              <div className="form-check flex flex-row-reverse items-center gap-5">
                <input
                  className="form-check-input appearance-none rounded-full h-7 w-7 border-4 border-[#5F6368] bg-[#C4C4C4] hover:shadow-lg hover:shadow-[#5F6368] hover:border-[#3B52B5] checked:bg-[#7EABFF] checked:border-[#3B52B5] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="1"
                  onChange={handleSubmit}
                  disabled={desact}
                />
                <label
                  className={`form-check-label ${
                    check1 && "text-green-400"
                  } md:text-xl lg:text-2xl text-right ${
                    !check1 && "text-gray-800"
                  }`}
                  htmlFor="flexRadioDefault1"
                >
                  {props.propo1}
                </label>
              </div>
              <div className="form-check flex flex-row-reverse items-center gap-5">
                <input
                  className="form-check-input appearance-none rounded-full h-7 w-7 border-4 border-[#5F6368] bg-[#C4C4C4] hover:shadow-lg hover:shadow-[#5F6368] hover:border-[#3B52B5] checked:bg-[#7EABFF] checked:border-[#3B52B5] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value="2"
                  onChange={handleSubmit}
                  disabled={desact}
                />
                <label
                  className={`form-check-label ${
                    check2 && "text-green-400"
                  } inline-block md:text-xl lg:text-2xl ${
                    !check2 && "text-gray-800"
                  }`}
                  htmlFor="flexRadioDefault2"
                >
                  {props.propo2}
                </label>
              </div>
              <div className="form-check flex flex-row-reverse items-center gap-5">
                <input
                  className="form-check-input appearance-none rounded-full h-7 w-7 border-4 border-[#5F6368] bg-[#C4C4C4] hover:shadow-lg hover:shadow-[#5F6368] hover:border-[#3B52B5] checked:bg-[#7EABFF] checked:border-[#3B52B5] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  value="3"
                  onChange={handleSubmit}
                  disabled={desact}
                />
                <label
                  className={`form-check-label ${
                    check3 && "text-green-400"
                  } inline-block md:text-xl lg:text-2xl ${
                    !check3 && "text-gray-800"
                  }`}
                  htmlFor="flexRadioDefault3"
                >
                  {props.propo3}
                </label>
              </div>
            </div>

            <div
              className={`${hide && "hidden"} ${
                !hide && "flex"
              } mt-5 lg:mt-10 flex gap-1 flex-col justify-center items-end`}
            >
              <p className="md:text-2xl lg:text-3xl">{evaluer}</p>
              <div className="flex flex-col justify-center items-end">
                <Link to="../cours">
                  <button className="container bg-[#4ED964] rounded-2xl px-7 py-3 h-fit w-fit mt-4 md:text-xl lg:text-2xl font-bold text-black text-center shadow-sm hover:scale-105 hover:shadow-md">
                    المواصلة
                  </button>
                </Link>
                <button
                  onClick={voirSolution}
                  className={`container ${
                    correcte && "hidden"
                  } bg-[#FAE0B2] rounded-2xl px-7 py-3 h-fit w-fit mt-4 md:text-xl lg:text-2xl font-bold text-black text-center shadow-sm hover:scale-105 hover:shadow-md`}
                >
                  الحـل
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-[40%] lg:w-[30%] p-5 flex flex-col gap-5 bg-[#FAE0B2] rounded-3xl">
            <div className="flex justify-center">
              <img
                className="w-full md:max-h-72 lg:max-h-96 bg-white rounded-3xl"
                src={props.QuizImage}
                alt=""
              />
            </div>

            <p dir="rtl" className="md:text-lg lg:text-xl font-bold">
              {props.QuizQuest}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default QuizAr;