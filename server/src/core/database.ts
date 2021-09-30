import mongoose from 'mongoose';

const URL = process.env.MONGODB_URL as string;
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  try {
    await mongoose.connect(URL, options);

    console.log(`Database succesfully connected to: ${URL}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
