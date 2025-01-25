import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyInfo = [],
    selectCurrency = "usd",
    amountDisable = false

}) {
    const tempoId = useId()

    return (
        <div className="bg-blue-200 p-3 w-170 rounded-lg text-sm flex gap-60">
            <div className="flex flex-col gap-10 ">
                <label className="font-semibold text-lg" htmlFor={tempoId}>{label}</label>
                <input
                    type="number"
                    className=" text-xl"
                    id={tempoId}
                    value={amount}
                    placeholder="Amount"
                    disabled={amountDisable}
                    onChange={(e) => { onAmountChange && onAmountChange(Number(e.target.value)) }}
                />
            </div>
            <div className="flex-col flex gap-10">
                <p className=" text-lg font-semibold">Currency Type</p>
                <select className="rounded-lg text-lg px-1 py-1 bg-blue-100 cursor-pointer font-semibold outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyInfo.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>)
}

export default InputBox;