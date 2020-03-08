import { timeParse } from "d3-time-format";

const StockParse = (data) => {
    return Object.entries(data).reverse().map(([key, value]) => {
        const newObj = {}
        newObj["date"] = new Date(key)
        newObj["open"] = Object.values(value)[0]
        newObj["high"] = Object.values(value)[1]
        newObj["low"] = Object.values(value)[2]
        newObj["close"] = Object.values(value)[3]
        newObj["volume"] = Object.values(value)[5]
        newObj["split"] = ""
        newObj["dividend"] = Object.values(value)[6]
        newObj["absoluteChange"] = ""
        newObj["percentChange"] = ""

        return newObj;
    });
}

const parseDate = timeParse("%Y-%m-%d");

export default StockParse;
