function accum(s) {

    const chars = s.split('');

    const accum = chars.map((el, index) => el.toUpperCase() + el.toLowerCase().repeat(index))

    return accum.join("-")

    // return s.split('').map((el, index) => el.toUpperCase() + el.toLowerCase().repeat(index)).join('-')
}

console.log(accum("asdas"))