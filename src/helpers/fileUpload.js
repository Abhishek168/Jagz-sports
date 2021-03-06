import AWS from 'aws-sdk';

require('dotenv').config();

export default class S3Store {
  constructor(bucket = 'mtbguru') {
    AWS.config.update({
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey,
    });
    this.s3 = new AWS.S3();
    this.bucket = bucket;
  }

  async upload(key, file) {
    const params = {
      Bucket: this.bucket,
      Key: `${key}/${file.uniquename}`,
      Body: file.buffer, // req.file.path
      // ContentEncoding: 'base64',
      // ContentType: 'text/html',
      ACL: 'public-read',
    };
    return new Promise((res, rej) => this.s3.upload(params, (error, data) => {
      if (error) {
        rej(error);
      } else {
        res(data.Location);
      }
    }));
  }

  async multiUpload(key, files) {
    const arr = Array.isArray(files) ? files : [files];
    const uploadedFiles = arr.map(file => this.upload(key, file, true));
    return Promise.all(uploadedFiles);
  }

  async removeFiles(key, files) {
    const arrayOfFiles = Array.isArray(files) ? files : [files];
    const params = {
      Bucket: this.bucket,
      Delete: {
        Objects: arrayOfFiles.map((file) => {
          const arr = file.split('/');
          return ({ Key: `${key}/${decodeURI(arr[arr.length - 1])}` });
        }),
      },
    };

    return new Promise((res, rej) => this.s3.deleteObjects(params, (error, data) => {
      if (error) {
        console.log(error, error.stack);
        rej(error);
      } else {
        console.log('deleted object: ', data);
        res(data);
      }
    }));
  }
}
