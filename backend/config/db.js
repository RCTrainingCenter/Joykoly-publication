import mongoose from 'mongoose'

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://RC:Password@joykoly-ecommerce.0lni41j.mongodb.net/Book-Del'
    )
    .then(() => console.log('DB Connected'))
}
