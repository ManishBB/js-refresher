const myObject = {
    js: 'JavaScript',
    cpp: 'c++',
    rb: 'Ruby',
    swift: 'Swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} is a shortcut for ${myObject[key]}`);
}

const programming = ["JS", "Python", "CPP", "Java"]

for (const key in programming) {
    console.log(programming[key]);
}
