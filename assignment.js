
// 1st problem
function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Invalid Number";
    }
    else {
        const ticketPrice = 120;
        const ticket = ticketSale * ticketPrice;
        const giveMoney = 500 + (8 * 50);
        const money = ticket - giveMoney;
        return money;
    }
}
// 2nd problem
function checkName(name) {
    if (typeof name !== "string") {
        return "invalid";
    }
    const letter = ["a", "y", "i", "e", "o", "u", "w"];
    const lastLatter = name[name.length - 1].toLowerCase();
    for (const s of lastLatter) {
        if (letter.includes(s)) {
            return "Good name ";
        }
        else {
            return "Bad name";
        }
    }
}
// 3rd problem
function deleteInvalids(array) {
    let number = [];
    for (const num of array) {
        if (typeof num == "number") {
            number.push(num);
        }
    }
    return number;
}
// 4th problem 
function password(obj) {
    if ((obj.name && obj.birthYear && obj.siteName)) {
        const { name, birthYear, siteName } = obj;
        const pass = `${siteName}#${name}@${birthYear}`;
        const userName = pass.charAt(0).toUpperCase() + pass.slice(1);
        return userName;
    }
    else {
        return "invalid";
    }
}
// 5th problem
function monthlySavings(array, livingCost) {
    if ((!Array.isArray(array)) || (typeof livingCost !== 'number')) {
        return 'invalid input';
    }
    let sum = 0;
    for (const num of array) {
        if (num >= 3000) {
            discount = num * (20 / 100);
            sum = sum - discount;
        }
        sum = sum + num;
    }
    let result = sum - livingCost;
    if (result < 0) {
        return "earn more"
    }
    return result;
}