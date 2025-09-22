import mongoose from "mongoose";

let cached = global.__mongoose_cache;

if (!cached) {
    cached = global.__mongoose_cache = { conn: null, promise: null };
}

export async function dbConnect() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
        throw new Error("MONGO_URI is not defined");
        }
        cached.promise = mongoose
        .connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then((mongooseInstance) => mongooseInstance);
    }

    cached.conn = await cached.promise;
    return cached.conn;
}
