// domain/.netlify/functions/hello

// const items = [
//     {id: 1, name: "sourabh"},
//     {id: 2, name: "kumar"}
// ]

// exports.handler = async function (event, context){
//     return {
//         statusCode: 200,
//         body: JSON.stringify(items),
//     }
// }


exports.handler = async function (event, context){
    return {
        statusCode: 200,
        body: "Hello World",
    }
}