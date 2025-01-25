import { useEffect, useState } from "react"

function useCurrencyConvertor(currency) {
    let [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
            .then((e) =>  e.json() )
            .then((re) => setData(re[currency]))
    
    

    }, [currency])
    return data;
}
export default useCurrencyConvertor