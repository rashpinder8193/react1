const { Storage } = require('@google-cloud/storage');
const path = require('path');

const storage = new Storage({
  keyFilename: path.join(__dirname, 'path_to_your_service_account_key.json'),
  projectId: 'your_project_id',
});

const bucket = storage.bucket('your_bucket_name');

