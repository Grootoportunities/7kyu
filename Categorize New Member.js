function openOrSenior(data) {

    let output = []

    data.map(el => {if (el[0] >= 55 && el[1] > 7) output.push("Senior");  else output.push("Open")})

    // if (data[0] > 55 && data[1] > 7) output.push("Senior")
    // else output.push("Open")

    return output
}

console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))

// function openOrSenior(data){
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }