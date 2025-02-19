// 1
let drink = prompt("What do you want to drink - coffee, juice, or tea?").toLowerCase()
switch (drink) {
    case "coffee":
        alert("You Chose Coffee!");
        break;

    case "tea":
        alert("You Chose Tea!");
        break;

    case "juice":
        alert("You Chose Juice!");
        break;
    
        default :
        alert("Huh?");
}
// 2
let day = prompt("Choose a day in a week").toLowerCase()
switch (day) {
    case "monday" :
    case "tuesday" :
    case "wednesday" :
    case "thursday" :
    case "friday":
        alert("Its a working day")
        break;
    
    case "saturday" :
    case "sunday":
        alert("Its a weekend!! Yayy!!")
        break;

    default:
        alert("That is not a day.")
        break;
}
// 3
let month = prompt("Choose a month").toLowerCase()
switch (month) {
    case "january":
    case "february" :
    case "december":
        alert("The month is during Winter")
        break;

    case "march" :
    case "april" :
    case "may":
        alert("The month is during Spring")
        break;

    case "june" :
    case "july" :
    case "august":
        alert("The month is during Summer")
        break;

    case "september" :
    case "october" :
    case "november":
        alert("The month is during Autumn")
        break;

    default:
        alert("There aint a month like that.")
        break;
}
// 4
let number1 = prompt("Choose a number")
let number2 = prompt("Choose a number")
let operator = prompt("Choose a operator ('+', '-', '*', '/') На 0 не ділити")
switch (operator) {
    case "+":
        alert("Click OK")
        let total1 = (Number(number1) + Number(number2))
        alert(`${number1} + ${number2} = ${total1}`)
        break;

    case "-":
        alert("Click OK")
        let total2 = (Number(number1) - Number(number2))
        alert(`${number1} - ${number2} = ${total2}`)
        break;

    case "/":
        alert("Click OK")
        let total3 = (Number(number1) / Number(number2))
        alert(`${number1} / ${number2} = ${total3}`)
        break;

    case "*":
        alert("Click OK")
        let total4 = (Number(number1) * Number(number2))
        alert(`${number1} * ${number2} = ${total4}`)
        break;

    default:
        alert("Looks like something wrong")
        break;
}
// не треба 5