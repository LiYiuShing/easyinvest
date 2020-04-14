const StockParse = (history) => {
    return Object.entries(history.Open).map(([key, value], i) => {
        const newObj = {}
        newObj["date"] = new Date(key)
        newObj["open"] = Object.values(history.Open)[i]
        newObj["high"] = Object.values(history.High)[i]
        newObj["low"] = Object.values(history.Low)[i]
        newObj["close"] = Object.values(history.Close)[i]
        newObj["volume"] = Object.values(history.Volume)[i]

        return newObj;
    });
}

export default StockParse;
