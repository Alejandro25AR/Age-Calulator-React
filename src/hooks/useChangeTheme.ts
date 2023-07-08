import { useLayoutEffect, useState } from "react";

const prefersDark = window.matchMedia('(prefers-color-scheme)').matches;

function useChangeTheme():[dark: boolean, handleChangeTheme:()=>void] {
  const [dark,setDark] = useState(prefersDark);

  const handleChangeTheme = () => setDark((dark) => !dark);
  
  useLayoutEffect(()=>{ 
    if(dark){
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  },[dark]);

  return [dark,handleChangeTheme];
}

export { useChangeTheme }