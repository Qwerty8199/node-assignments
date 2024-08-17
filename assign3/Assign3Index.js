// import fs from 'fs'

// const FilePath = 'README.md'
// const writePath = "temp.txt"
// let datas = {}

// const read = () => {

//     fs.readFile(FilePath ,'utf-8' , (err,data) => {
//         if(err){
//         console.log(`Error reading file - ${err}`)
//     }

//     console.log(data)
//     let newData = data.split(" ")
//     for(let i of newData){
//         if(i in datas){
//             datas[i] += 1
//         }else{
//             datas[i] = 1
//         }
//     }

//     write()

// })
// }



// const write = () => {

//     const writeStream = fs.createWriteStream(writePath)
//     console.log("Writing..")
//     for(let word in datas){
//         console.log(word)
//         writeStream.write(word+"-"+datas[word]+"\n", (err) => {
//             if(err){
//                 console.log(err)
//             }
//         })
//     }
// }

// read()
// console.log("completed reading..")
