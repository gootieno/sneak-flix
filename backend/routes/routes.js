const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');

const fs = require('fs');

const keys = require('../keys.js');

const router = express.Router();

// configuring the DiscStorage engine.
const storage = multer.diskStorage({
	destination: 'uploads/',
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});
const upload = multer({ storage: storage });

//AWS
//setting the credentials
//The region should be the region of the bucket that you created
//Visit this if you have any confusion - https://docs.aws.amazon.com/general/latest/gr/rande.html
AWS.config.update({
	accessKeyId: keys.iam_access_id,
	secretAccessKey: keys.iam_secret,
	region: 'sample-region',
});

//Creating a new instance of S3:
const s3 = new AWS.S3();

//POST method route for uploading file
router.post('/post_file', upload.single('demo_file'), function (req, res) {
	//Multer middleware adds file(in case of single file ) or files(multiple files) object to the request object.
	//req.file is the demo_file
	uploadFile(req.file.path, req.file.filename, res);
});

//GET method route for downloading/retrieving file
router.get('/get_file/:file_name', (req, res) => {
	retrieveFile(req.params.file_name, res);
});

//The uploadFile function
const uploadFile = (source, targetName, res) => {
	console.log('preparing to upload...');
	fs.readFile(source, function (err, filedata) {
		if (!err) {
			const putParams = {
				Bucket: 'sample-bucket-name',
				Key: targetName,
				Body: filedata,
			};
			s3.putObject(putParams, function (err, data) {
				if (err) {
					console.log('Could nor upload the file. Error :', err);
					return res.send({ success: false });
				} else {
					fs.unlink(source); // Deleting the file from uploads folder(Optional).Do Whatever you prefer.
					console.log('Successfully uploaded the file');
					return res.send({ success: true });
				}
			});
		} else {
			console.log({ err: err });
		}
	});
};

//The retrieveFile function
const retrieveFile = (filename, res) => {
	const getParams = {
		Bucket: 'sample-bucket-name',
		Key: filename,
	};

	s3.getObject(getParams, function (err, data) {
		if (err) {
			return res.status(400).send({ success: false, err: err });
		} else {
			return res.send(data.Body);
		}
	});
};

//Express sequelize
router.get('/', (req, res) => {
	res.json({ title: 'Home' });
});

module.exports = router;
