'use client'
import {useEffect, useState} from "react";

const TheInfo = () => {
  const [theme, setTheme] = useState(true);
  const handleThemeSwitch = () => setTheme(!theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-color-scheme", theme ? "dark" : "light");
  }, [theme]);

  return (
    <div className={'prew-info'}>
      <p>Прототип <span style={{fontStyle: "italic"}}>(только ПК версия)</span></p>
      <button className={'btn-accent'} onClick={handleThemeSwitch}>сменить тему</button>
    </div>
  )
}

export {TheInfo}
