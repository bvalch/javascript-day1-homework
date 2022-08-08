let filterNames = function (names, letter) {
    let filteredNames = [];
    for (let name of names) {
        if (name[0]===letter){
            filteredNames.push(name);
        }
    }
    console.log(name)
    return filteredNames
}
let namesArray=['Ben','Brenda','Allice','Amy'];

console.log(filterNames(namesArray,'A'));