const names = ['Mohammad' , 'Amir' , 'Nili' , 'Shiva' , 'Mahsa'];
const user = {
    name : 'Moahammad' ,
    age : 22 ,
    fild : 'software' ,
    job : 'programmer'
}

const users = [
    {
        name : 'Moahammad' ,
        age : 22 ,
        fild : 'software' ,
        job : 'programmer'
    } ,
    {
        name : 'Ali' ,
        age : 228 ,
        fild : 'software' ,
        job : 'programmer'
    } ,
    {
        name : 'Amir' ,
        age : 224 ,
        fild : 'software' ,
        job : 'programmer'
    }
        
    
]

// for (let  i = 0; i < names.length; i++) {
//     console.log(`${i} : ${names[i]}`);
// }

// names.forEach(function (name , index) {
//     console.log(`${index} : ${name}`);
// });

// for (let x in user) {
//     console.log(`${x} : ${user[x]}`);
// }

users.map(
    function (user) {
        console.log(user.age);
    }
)