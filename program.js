console.log('Welcome to my program!')

let number = Math.floor(Math.random() * 100)

if (number < 50) {
    for (let i = 0; i < 10; i++) {
        console.log(i+1 + ' hello')
    }
} else {
    console.log('The number is bigger then 10! =(')
}
