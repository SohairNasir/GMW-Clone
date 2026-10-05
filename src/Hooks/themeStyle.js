import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

function usethemeStyle() {
    
    let Theme = useSelector(({Theme}) => Theme.value)
    
return useMemo(()=>{

    return ({
          bodyBg : Theme,
          bodyTxt : Theme == 'black' ? 'white' : 'black',
          btnBg : Theme == 'black' ? 'white' : 'black',
          btnTxt : Theme})
        
        },[Theme])
        
}

export default usethemeStyle