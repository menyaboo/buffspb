'use client'

import {useState} from "react";

export const Filter = ():JSX.Element => {
  const[isPushkinCard, setIsPushkinCard] = useState()

  return (
    <div className={'afisha-filter container mx-auto'}>
      <div className={'toggle'}>
        <p>Пушкинская карта</p>
        <label className="switch">
          <input type="checkbox"/>
            <span className="slider"></span>
        </label>
      </div>
      <div className={'toggle'}>
        <p>Для молодежи</p>
        <label className="switch">
          <input type="checkbox"/>
          <span className="slider"></span>
        </label>
      </div>
    </div>
  )
}