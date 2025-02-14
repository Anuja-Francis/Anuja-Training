const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },  
  age: { type: Number, min: 18, required: true }, 
  email: { type: String, required: true, unique: true } 
});

userSchema.pre('save', function (next) {
  console.log('Saving user:', this.name);
  next();
});

const User = mongoose.model("User", userSchema);

async function findUsers() {
  const users = await User.find({ age: { $gte: 18 } });
  console.log('Users older than 18:', users);
}

async function updateUser() {
  const updatedUser = await User.updateOne({ name: "Anu" }, { $set: { age: 26 } });
  console.log('Updated user:', updatedUser);
}

async function deleteUser() {
  const deleteResult = await User.deleteOne({ name: "Anu" });
  console.log('Deleted user:', deleteResult);
}

async function aggregateUsers() {
  const result = await User.aggregate([
    { $match: { age: { $gte: 18 } } },
    { $group: { _id: "$age", count: { $sum: 1 } } }
  ]);
  console.log('Aggregation result:', result);
}

async function populateData() {
  const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  });

  const Order = mongoose.model('Order', orderSchema);

  const user = await User.findOne({ name: "Anu" });
  const order = new Order({ userId: user._id });

  await order.save();

  const populatedOrder = await Order.findOne().populate('userId');
  console.log('Populated Order:', populatedOrder);
}

async function run() {
  try {
    const newUser = new User({ name: "Anu", age: 25, email: "anu@example.com" });

    await newUser.save();
    console.log('User saved:', newUser);

    await findUsers();
    await updateUser();
    await deleteUser();
    await aggregateUsers();

  } catch (err) {
    console.error('Error during run:', err);
  }
}

run();

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});
