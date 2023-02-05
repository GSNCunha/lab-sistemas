import mongoose from "mongoose"

const schema = new mongoose.Schema({

    led: String,
    state: String,

});

export const ClientMongo = mongoose.model("Client", schema)