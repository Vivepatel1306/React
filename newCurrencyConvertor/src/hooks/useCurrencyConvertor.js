import { useEffect,useState } from "react";

function useCurrencyInfo(currency) {
    let [ data, setData ] = useState({})
    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
            .then((e) => e.json())
            .then((e) =>  setData(e[currency]) )
    }, [currency])
    return data
}

export default useCurrencyInfo;