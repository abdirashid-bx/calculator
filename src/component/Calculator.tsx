import React, { useState } from 'react'

export default function Calculator() {
  const [num,setnum]=useState("");
  const handleclick=(e : any)=>{
    setnum((prev) => prev + e)
  }
  const handlework=()=>{
    try {
      setnum(eval(num))
    } catch (error) {
      setnum(error)
    }
   
  }
  const onclear=(e : any)=>{
    setnum("")
  }
  return (
    <div className='bg-black min-h-screen flex justify-center items-center'>
      <div className='flex flex-col w-full max-w-sm px-4'>
        {/* Display */}
        <div className='flex'>
          <input
            className='text-white text-7xl border-0 outline-0 p-3 w-full text-right bg-black'
            type="text"
            value={num}
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="text-white grid grid-cols-4 gap-3 mt-5  ">
          {/* Top row */}
         <button
  onClick={onclear}
  className="bg-[#a0a0a0] text-3xl rounded-full py-5 cursor-pointer"
>
  AC
</button>
<button
  onClick={(event) => handleclick(event.target.innerText)}
  className="bg-[#a0a0a0] text-3xl rounded-full py-5 cursor-pointer"
>
  +/-
</button>
<button
  onClick={(event) => handleclick(event.target.innerText)}
  className="bg-[#a0a0a0] text-3xl rounded-full py-5 cursor-pointer"
>
  %
</button>
<button
  onClick={(event) => handleclick("/")}
  className="bg-[#ff9f0a] text-3xl rounded-full py-5 cursor-pointer"
>
  /
</button>

{/* Second row */}
<button
  onClick={(event) => handleclick(event.target.innerText)}
  className="bg-[#333333] text-3xl rounded-full py-5 cursor-pointer"
>
  7
</button>
<button
  onClick={(event) => handleclick(event.target.innerText)}
  className="bg-[#333333] text-3xl rounded-full py-5 cursor-pointer"
>
  8
</button>
<button
  onClick={(event) => handleclick(event.target.innerText)}
  className="bg-[#333333] text-3xl rounded-full py-5 cursor-pointer"
>
  9
</button>
<button
  onClick={(event) => handleclick("*")}
  className="bg-[#ff9f0a] text-3xl rounded-full py-5 cursor-pointer"
>
  *
</button>

{/* Third row */}
<button
  onClick={(event) => handleclick(event.target.innerText)}
  className="bg-[#333333] text-3xl rounded-full py-5 cursor-pointer"
>
  4
</button>
<button
  onClick={(event) => handleclick(event.target.innerText)}
  className="bg-[#333333] text-3xl rounded-full py-5 cursor-pointer"
>
  5
</button>
<button
  onClick={(event) => handleclick(event.target.innerText)}
  className="bg-[#333333] text-3xl rounded-full py-5 cursor-pointer"
>
  6
</button>
<button
  onClick={(event) => handleclick("-")}
  className="bg-[#ff9f0a] text-3xl rounded-full py-5 cursor-pointer"
>
  −
</button>

{/* Fourth row */}
<button
  onClick={(event) => handleclick(event.target.innerText)}
  className="bg-[#333333] text-3xl rounded-full py-5 cursor-pointer"
>
  1
</button>
<button
  onClick={(event) => handleclick(event.target.innerText)}
  className="bg-[#333333] text-3xl rounded-full py-5 cursor-pointer"
>
  2
</button>
<button
  onClick={(event) => handleclick(event.target.innerText)}
  className="bg-[#333333] text-3xl rounded-full py-5 cursor-pointer"
>
  3
</button>
<button
  onClick={(event) => handleclick(event.target.innerText)}
  className="bg-[#ff9f0a] text-3xl rounded-full py-5 cursor-pointer"
>
  +
</button>

{/* Fifth row */}
<button
  onClick={(event) => handleclick(event.target.innerText)}
  className="bg-[#333333] text-3xl rounded-full py-5 col-span-2 text-left pl-8 cursor-pointer"
>
  0
</button>
<button
  onClick={(event) => handleclick(event.target.innerText)}
  className="bg-[#333333] text-3xl rounded-full py-5 cursor-pointer"
>
  .
</button>
<button
  onClick={handlework}
  className="bg-[#ff9f0a] text-3xl rounded-full py-5 cursor-pointer"
>
  =
</button>

        </div>
      </div>
    </div>
  )
}
