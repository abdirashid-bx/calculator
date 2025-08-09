import React, { useRef, useState } from 'react'
import { questions } from "../Question.js"

export default function Quizapp() {
  const [finished, setfinished] = useState(false)
  const [currentindex, setcurrentindex] = useState(0)
  const [selected, setselected] = useState(false)
  const [answerIndex, setAnswerIndex] = useState(null)
  const ref = useRef(0);

  const handlenext = () => {
    if (currentindex < questions.length - 1 ) {
      setcurrentindex(prev => prev + 1)
      setselected(false)
      setAnswerIndex(null)
    } else {
      setfinished(true)
      setcurrentindex(0)
    }
  }

  const handlecorrect = (index) => {
    if (selected) return;
    setselected(true);
    setAnswerIndex(index);

    if (questions[currentindex].correct === questions[currentindex].options[index]) {
      ++ref.current;
    }
  }

  const again = () => {
    ref.current = 0;
    setfinished(false);
    setselected(false);
    setAnswerIndex(null);
    setcurrentindex(0);
  }

  return (
    <div className='bg-blue-800 min-h-screen flex items-center justify-center p-4'>
      <div className='bg-amber-50 flex flex-col gap-3 w-full max-w-lg mt-6 p-5 sm:p-7 rounded-lg shadow-md'>
        <div className='border-b pb-2 border-gray-400'>
          <h1 className='text-lg sm:text-xl font-semibold text-blue-950 text-center'>
            Simple Quiz
          </h1>
        </div>

        {finished ? (
          <>
            <div className='mt-4 text-center'>
              <h1 className='text-blue-950 text-lg sm:text-xl font-medium'>
                You scored {ref.current} out of {questions.length}!
              </h1>
            </div>
            <div className='flex justify-center mt-4'>
              <button
                onClick={again}
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-md shadow-sm hover:shadow-lg transition-all duration-200 text-sm sm:text-base">
                Play again
              </button>
            </div>
          </>
        ) : (
          <>
            <div className='mt-3 flex flex-col gap-3'>
              <h1 className='text-blue-950 font-semibold text-base sm:text-lg'>
                {questions[currentindex].question}
              </h1>

              {questions[currentindex].options.map((option, index) => {
                let bgColor = "bg-white";
                let textColor = "text-black";

                if (selected && answerIndex === index) {
                  if (questions[currentindex].correct === option) {
                    bgColor = "bg-green-500";
                    textColor = "text-white";
                  } else {
                    bgColor = "bg-red-500";
                    textColor = "text-white";
                  }
                }

                return (
                  <div className='flex gap-2 mb-2 flex-row' key={index}>
                    <p
                      onClick={() => handlecorrect(index)}
                      className={`cursor-pointer w-full border border-gray-500 rounded-lg px-4 py-2 text-sm sm:text-base shadow-sm   hover:border-blue-400 transition-all duration-200 ${bgColor} ${textColor}`}
                    >
                      {option}
                    </p>
                  </div>
                )
              })}

            <div className='mt-2'>
  <button
    onClick={handlenext}
    disabled={!selected} // ⬅️ disable if no selection
    className={`w-full sm:w-auto font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-200 text-sm sm:text-base
      ${selected 
        ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg active:scale-95' 
        : 'bg-gray-400 text-gray-200 cursor-not-allowed'}
    `}
  >
    Next Question
  </button>
</div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
