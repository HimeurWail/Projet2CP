import React, { useEffect, useState } from 'react'
import Chapitre from "./Chapitre";
import UserTitle from "../../Components/UserTitle";
import Form from './Form';
import ChapitreProf from '../CoursProf/ChapitreProf';

function CoursProfFr({userName, userAvatar}) {
  const [Courses, SetCourses] = useState(null);
  const [estOuvert, SetEstOuvert] = useState(false);
  const showDiv = () => {SetEstOuvert(!estOuvert)};

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetCourses(data);
      });
  }, []);

  return (
    <div className="symapp-container">
      <div className={`absolute left-0 top-0 h-screen w-screen z-10 bg-slate-300/30 flex flex-col justify-center items-center ${!estOuvert && 'hidden'}`}>
        <div className='h-12 w-4/5 flex flex-row justify-end bg-blue-200'>
            <button onClick={showDiv} className='h-12 w-12 text-2xl font-semibold text-center hover:bg-[#FAE0B2] bg-white/0' >x</button>
        </div>
        <Form />
      </div>
      <div className="w-[80%] h-32">
      
        <UserTitle message="Salut" userName={userName} userImage={userAvatar} />
        <p className="ml-2 lg:ml-3 lg:mt-5 md:mt-3 font-semibold md:text-sm lg:text-xl">
        Créeons un cours idéal pour nos étudiants !
        </p>
        <div className='w-[80%] h-14 flex flex-row justify-end'>
            <button onClick={showDiv} className='h-10 w-10 rounded-md text-2xl font-semibold text-center bg-[#FAE0B2] hover:bg-[#fde8c4]' >+</button>
        </div>
      </div>
      <div className="shadow-lg p-3 pt-6 rounded-md h-[325px] lg:h-[450px] w-[600px] lg:w-[930px] overflow-auto ">
        
        {Courses &&
          Courses.map((course) => {
            return (
              <div key={course.id}>
                <ChapitreProf
                  nomChapitre={`Chapitre ${course.id}`}
                  titreChapitre={`${course.titre}`}
                  nomQuiz={` Quiz ${course.id}`}
                  numExp={`${course.QuizExp}`}
                  image={`${course.ImageCours}`}
                  courseId={course.id}
                  image2="/Cours/Icons/flicha.svg"
                />
              </div>
              
            );
          })}
      </div>
    </div>
  );
}

export default CoursProfFr