// 1
let drink = prompt("What do you want to drink - coffee, juice, or tea?").toLowerCase()
switch (drink) {
    case "coffee":
        alert("You Chose Coffee!");
        break;

    case "coffee":
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
    case "January":
    case "February" :
    case "December":
        alert("The month is during Winter")
        break;

    case "March" :
    case "April" :
    case "May":
        alert("The month is during Spring")
        break;

    case "June" :
    case "July" :
    case "August":
        alert("The month is during Summer")
        break;

    case "September" :
    case "October" :
    case "November":
        alert("The month is during Autumn")
        break;

    default:
        alert("There aint a month like that.")
        break;
}
// 4
let number1 = prompt("Choose a number").toLowerCase()
let number2 = prompt("Choose a number").toLowerCase()
let operator = prompt("Choose a operator ('+', '-', '*', '/') На 0 не ділити").toLowerCase()
switch (month) {
    case "+":
        alert("Click OK")
        let total1 = (number1 + number2)
        alert(number1 ,"+", number2, "=", total1)
        break;

    case "-":
        alert("Click OK")
        let total2 = (number1 - number2)
        alert(number1 ,"-", number2, "=", total2)
        break;

    case "/":
        alert("Click OK")
        let total3 = (number1 / number2)
        alert(number1 ,"/", number2, "=", total3)
        break;

    case "*":
        alert("Click OK")
        let total4 = (number1 + number2)
        alert(number1 ,"*", number2, "=", total4)
        break;

    default:
        alert("Looks like something wrong")
        break;
}
// не треба 5