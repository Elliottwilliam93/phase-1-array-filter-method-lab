function findMatching(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

function fuzzyMatch(array, string) {
    let newArr = array.filter(name => string[0] === name[0])
    return newArr
}

  function matchName(array, string) {
    let newArr = array.filter(driver => driver.name === string)
    return newArr
}
