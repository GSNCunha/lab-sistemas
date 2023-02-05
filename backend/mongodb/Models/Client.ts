import mongoose from "mongoose"

const schema = new mongoose.Schema({

    state: String,

});

export const ClientMongo = mongoose.model("Client", schema)