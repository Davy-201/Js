let userName = getFirstName ("joão henrique queiroz")
console.log("seja bem vindo " + userName);

userName = getFirstName ("josé-henrique-queiroz", "-")
console.log("seja bem vindo " + userName);

function getFirstName(name, splitChar = " ") {
    let firstName = name.split(splitChar)[0];
    return firstName
}