import React from 'react'

export default function UserTitleAr(props) {
  return (
    <div className="flex items-center lg:gap-2 gap-1 ">
        <div className=" flex justify-center items-center rounded-full lg:h-16 lg:w-16 md:h-12 md:w-12 lg:border-[3.5px] md:border-2 border-symapp-blue-light">
          <img
            className="rounded-full bg-symapp-blue-light lg:h-12 md:h-10 md:w-10 lg:w-12 pt-2 "
            src={`/menu/${props.userImage}.svg`}
          />
        </div>
        <p className="lg:text-2xl font-['Tajawal'] md:text-base font-bold"> مرحبا {props.userName} !</p>
    </div>
  )
}
