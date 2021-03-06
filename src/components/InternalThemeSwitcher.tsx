import React from 'react';

const getInternalThemeInitialState = () => {
  let userTheme = localStorage.getItem('internalTheme');
  return (userTheme && userTheme === "light") ? true : false;
}

const rememberInternalThemeSetting = (theme: string) => {
  localStorage.setItem("internalTheme", theme);
}

const setDarkTheme = () => {
  document.body.classList.replace("light", "dark");
}

const setLightTheme = () => {
  document.body.classList.replace("dark", "light");
}

const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
  if(e.target.checked){
    setLightTheme();
    rememberInternalThemeSetting("light");
  }
  else{
    setDarkTheme();
    rememberInternalThemeSetting("dark");
  }
}


const InternalThemeSwither: React.FC = () => {
  return (
    <div className="themeSwither">
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="internalThemeSwither" onChange={handleSwitch} defaultChecked={getInternalThemeInitialState()}/>
      </div>
    </div>
  );
}

export default InternalThemeSwither;
