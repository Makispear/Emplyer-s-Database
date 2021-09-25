const fs = require('fs');

// WRITE FILE PROMISE 
const writeFile = teamMembers => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', teamMembers, err => {
        if (err) {
            reject(err);
            return;
        }
        resolve({
            ok: true,
            message: 'File created!'
        });
      });
    });
  };



module.exports = writeFile