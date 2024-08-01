import mongoose from "mongoose";
const BookSchmea = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
},{
    timestamps: true
});

const Book = mongoose.model("Book", BookSchmea)
export default Book

