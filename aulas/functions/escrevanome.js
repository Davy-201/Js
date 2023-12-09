function writeName(name) {
    return `meu nome é ${name}`;
};

function checkAge(age) {
    if (age >= 18) {
        console.log(`${writeName('Davy')}, maior de idade `)
    }else{
        console.log(`de menor`)
    };
};
checkAge(22);