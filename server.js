// const express = require('express');
// const fs = require('fs');
// const multer = require('multer');
// const path = require('path');

// const app = express();


// // Middleware to parse form data
// const upload = multer();

// // Serve static files (if needed)
// app.use(express.static('public'));

// // Handle form submission
// app.post('/submit-form', upload.none(), (req, res) => {
//   const { name, email, message } = req.body;

//   // Create a data object
//   const formData = {
//     name,
//     email,
//     message,
//     timestamp: new Date().toISOString()
//   };

//   // Convert the data to a string
//   const dataString = JSON.stringify(formData, null, 2);

//   // Save the data to a file
//   fs.writeFile('form-data.json', dataString, (err) => {
//     if (err) {
//       console.error('Error writing file:', err);
//       return res.status(500).json({ success: false, message: 'Failed to save data.' });
//     }

//     console.log('Form data saved successfully!');
//     res.json({ success: true, message: 'Message Sent Successfully! Thank You' });
//   });
// });

// // Start the server
// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
// module.exports = {
//   path
// }