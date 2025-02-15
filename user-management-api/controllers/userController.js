const User = require('../models/user');

const renderUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.render('users', { users });  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newUser = new User({ name, email, age });
    
    await newUser.save();
    
    res.redirect(`/api/users/${newUser._id}`);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

// const createUser = async (req, res) => {
//   try {
//     const { name, email, age } = req.body;
//     const newUser = new User({ name, email, age });
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating user', error });
//   }
// };

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

const getUserById = async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      if (!user) {
          return res.status(404).send('User not found');
      }

      res.render('userDetails', { user: user });
  } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
  }
};

const updateUser = async (req, res) => {
  try {
      const { name, email, age } = req.body;
      const userId = req.params.id;

      const user = await User.findByIdAndUpdate(userId, { name, email, age }, { new: true });

      if (!user) {
          return res.status(404).send('User not found');
      }

      res.redirect(`/api/users/${user._id}`);
  } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
  }
};
// const updateUser = async (req, res) => {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!updatedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json(updatedUser);  
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating user', error });
//   }
// };

const getUserByIdForUpdate = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.render('updateUser', { user }); 
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user for update', error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.redirect('/api/users'); 
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};

// const deleteUser = async (req, res) => {
//   try {
//     const deletedUser = await User.findByIdAndDelete(req.params.id);
//     if (!deletedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json({ message: 'User deleted' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting user', error });
//   }
// };

const getUserByIdForDelete = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.render('deleteUser', { user });  
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user for delete', error });
  }
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser, renderUsers, getUserByIdForDelete, getUserByIdForUpdate};
