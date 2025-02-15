const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); 

router.get('/', userController.renderUsers);  
router.get('/create', (req, res) => {
  res.render('createUser');
});
router.post('/', userController.createUser);
router.get('/list', userController.getUsers);  
router.get('/:id', userController.getUserById);  
router.get('/update/:id', userController.getUserByIdForUpdate); 
router.post('/update/:id', userController.updateUser);  
router.get('/delete/:id', userController.getUserByIdForDelete);  
router.post('/delete/:id', userController.deleteUser);  

module.exports = router;
