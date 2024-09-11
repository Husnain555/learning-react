// // first method
// export function List (){
//     const names = ['husnain',' ','awais',' ','zaman']
//     return (
//         <div>
//             {names.map(name=>(<h1>{names}</h1>))}
//         </div>
//     )
// }
//second method
// export function List (){
//     const name = ['husnain', ' ', 'awais', ' ', 'zaman']
// const names = name.map(name => <h1>{name}</h1>)
//     return (
//         <div>
//             {names}
//
//         </div>
//     )
// }
// array of objects
// export function List (){
//     const person = [
//         {
//             name: "Husnain",
//             email: "talk2husnain@.com",
//             age:'27'
//         },
//         {
//             name: "Awais",
//             email: "talk2mughals@.com",
//             age:'25'
//         },  {
//             name: "Zaman",
//             email: "talk2devilgohan7@.com",
//             age:'23'
//         }
//     ]
//     return (
//         <div>
//             {person.map(person =>(<h1>My name is {person.name} My email is {person.email} My age is {person.age}</h1>))}
//         </div>
//     )
// }
//second method of array of object
export function List (){
    const person = [
        {
            name: "Husnain",
            email: "talk2husnain@.com",
            age:'27'
        },
        {
            name: "Awais",
            email: "talk2mughals@.com",
            age:'25'
        },  {
            name: "Zaman",
            email: "talk2devilgohan7@.com",
            age:'23'
        }
    ]
const persons = person.map(person =>(<h1>My name is {person.name} My email is {person.email} my age is {person.age}</h1>))

return(
    <div>
        {persons}
    </div>
)

}