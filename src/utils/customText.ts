export function addCommas(number: any) {
    // Convert the number to a string and use a regular expression to add commas
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatRupee(number: number) {
    // Convert number to string
    let strNumber = String(number);

    // Split the number into integer and decimal parts
    let parts = strNumber.split('.');
    let integerPart = parts[0];
    let decimalPart = parts.length > 1 ? '.' + parts[1] : '';

    // Add commas for thousands separator
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Add ₹ symbol and return formatted number
    return '₹ ' + integerPart + decimalPart;
}

export default function formatFees(amount: number) {
    if (amount >= 100000) {
        return `₹${(amount / 100000).toFixed(1)} Lakhs`;
    } else if (amount >= 1000) {
        return `₹${(amount / 1000).toFixed(1)} Thousand`;
    } else {
        return `₹${amount}`;
    }
}
