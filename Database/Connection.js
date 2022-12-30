import mongoose from 'mongoose';

const connect = () => {
    return mongoose.connect(process.env.DATABASE_URI, {})
};

export default connect;