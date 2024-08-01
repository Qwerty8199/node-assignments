import { MyError } from "../middleware/ErrorHandler.js";
import Book from "../model/Book.js"


export const getAllBook = async(req, res, next) =>{

    try{
        const AllBooks = await Book.find({})
        res.status(200)
            .send(AllBooks);
    }catch(err){
        next(
             new MyError( `Failed to Retrieve Books - ${err}`, 500)
        )
    }
}


export const getBookById = async(req, res, next) =>{

    const bookId  = req.params.id

    try{
        const ReqBook = await Book.findById(bookId);
        if(ReqBook){
            res.status(200)
                .send(ReqBook)
        }
    }catch(err){
        console.log(`Err - ${err}`)
        next(
            new MyError( `Book not FOUND - ${err}`, 404)
       )
    }
}

export const addBook = async(req, res, next) =>{
    // console.log(JSON.stringify(req))
    const { title } = req.body

    try{

        const newBook = new Book({title})
        await newBook.save();
        res.status(201)
        .json({message: `Book Added..`})
    }catch(err){
        console.log(`Err - ${err}`)
        next(
            new MyError( `Failed to Add Book - ${err}`, 500)
       )
    }
}

export const updateBook = async(req, res, next) => {
    const bookId = req.params.id
    const { title } = req.body
    try{

        const ReqBook = await Book.findByIdAndUpdate(
            bookId,
            {title},
            {new: true}
        )

        if(!ReqBook){
            next(
                new MyError( `Book not FOUND`, 404)
           )
        }
        res.status(200)
            .json({message: "Book Updated.."})
    }catch(err){
        console.log(err)
        next(
            new MyError( `Exception - ${err}`, 500)
       )
    }
}


export const deleteAllBook = async(req, res, next) =>{

    try{
        await Book.deleteMany({})
        res.status(200)
            .json({message: `Deleted All Books`})

    }catch(err){
        console.log(err)
        next(
            new MyError( `Exception - ${err}`, 500)
       )
    }
}

export const deleteBookById = async(req, res, next) =>{
    
    const bookId = req.params.id
    try{
        const result = await Book.deleteOne({ bookId });
        if (result.deletedCount === 1) {
          res.status(200).send(`Book with ID ${bookId} was deleted.`);
        } else {
            next(
                new MyError( `Book not FOUND `, 404)
           )
        }
    }catch(err){
        console.log(err)
        next(
            new MyError( `Exception - ${err}`, 500)
       )
    }
}
