import { useEffect, useState } from "react";


//making a custom hook
function useCurrencyInfo (currency) {

    const [data, setData] = useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/curre ncy-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())  
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    return data
}

export default useCurrencyInfo;