import multer from "multer";

// Why memoryStorage?
// Multer stores the uploaded file in memory as a Buffer, accessible through: req.file.buffer 

const storage = multer.memoryStorage();

const upload = multer({
    storage: storage
});

export default upload;




// Set up multer middleware for file uploads

// const upload = multer({
//   storage,
//   limits: {
//     fileSize: 5 * 1024 * 1024, // 5MB
//   },
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype.startsWith("image/")) {
//       cb(null, true);
//     } else {
//       cb(new Error("Only image files are allowed!"));
//     }
//   },
// });


// Configure disk storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Ensure this folder exists
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });



// Core Features

// • File & Text Parsing: Unlike standard JSON or body parsers,
// Multer processes multipart streams, attaches text fields to req.body, 
// and assigns uploaded file information to req.file (single) or req.files (multiple).

// • Storage Options:
// 	• diskStorage: Saves files directly to a local directory with custom filename and destination control.
// 	• memoryStorage: Keeps files in RAM as Buffer objects
//      (useful for temporary processing or piping to cloud storage like AWS S3 or Cloudinary).

// • Validation & Limits: Allows filtering by file type/extension via fileFilter 
// and setting boundaries on file sizes, counts, or fields via limits.



// Common Methods

// • upload.single(fieldname): Processes a single file attached to the specified field name, exposed as req.file.
// • upload.array(fieldname, maxCount): Processes multiple files sharing the same field name, exposed as an array at req.files.
// • upload.fields(fields): Processes multiple files across different field names, exposed as an object of arrays at req.files.
// • upload.none(): Parses text-only multipart forms (acts like a standard body parser).
// • upload.any(): Accepts all files coming through the request.
