import mongoose from "mongoose";


(async () => {
    const db = await mongoose.connect('mongodb://localhost/pastelesapi')
    console.log('Database is connected to: ', db.connection.name);
})();