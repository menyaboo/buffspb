'use client'

export const Filter =  ():JSX.Element => {

  return (
    <div className={'afisha-filter container mx-auto'}>
      <div className={'toggle'}>
        <p>Пушкинская карта</p>
        <label className="switch">
          <input type="checkbox"/>
            <span className="slider"></span>
        </label>
      </div>
    </div>
  )
}