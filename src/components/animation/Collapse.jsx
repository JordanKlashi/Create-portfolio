import { useState } from "react"

function Collapse({ btnText,text }) {

    const [showContent, setShowContent] = useState(false)

    const handleClick = () => {
        setShowContent(!showContent);
    }

    return (
        <>
            <button onClick={handleClick}>{btnText}</button>
            {showContent && <p onClick={handleClick}>{text}</p>}
        </>
    )
}

export default Collapse