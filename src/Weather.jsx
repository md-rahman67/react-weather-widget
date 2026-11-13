import { useState } from "react"
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";


export default function Weather() {
    const [info, setInfo] = useState({});
    return (
        <>
            <SearchBox setInfo={setInfo} />
            <InfoBox info={info} />
        </>
    )
}