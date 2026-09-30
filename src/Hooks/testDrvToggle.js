import { useSelector } from "react-redux"

let TestPToggle = () => { 
    let Theme = useSelector((Theme) => Theme.Theme.value)
    let txtColorElement = Theme == 'black' && '!text-white'
    let borderColor = Theme == 'black' && '!border-white'
    let plcHolderTxt = Theme == 'black' && 'placeholder:!text-white'
    return{
        svgColorAndTxt : txtColorElement,
        placeholderTxt : plcHolderTxt,
        borderColor : borderColor
    }

 }

export default TestPToggle