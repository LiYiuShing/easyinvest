export default function parseAmount(amount) {

    return amount === undefined
    
    ? "0.00"

    : Math.abs(Number(amount)) >= 1.0e+9

    ? (Math.abs(Number(amount)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(amount)) >= 1.0e+6

    ? (Math.abs(Number(amount)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(amount)) >= 1.0e+3

    ? (Math.abs(Number(amount)) / 1.0e+3).toFixed(2) + "K"

    : (Math.abs(Number(amount))).toFixed(2);
}