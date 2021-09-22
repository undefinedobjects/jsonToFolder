const fs = require('fs');

function jsonToFolder (object, parent) {

    for(let key in object) {
        
        if(parent) {
            if(object[key] instanceof Object) {
                parent += '/' + key;
            } 
        } else {
            parent = key;
        }

        if(object[key] instanceof Object) {
            createFolder(parent);
            jsonToFolder(object[key], parent);
        } else if(object[key] instanceof Array) {
            jsonToFolder(object[key], parent);
        } else {
            if(isNaN(key)) {
                createFile(parent + '/' + key, object[key]);
            } else {
                createFile(parent + '/' + object[key]);
            }
        }

    }

    function createFile(path, content = '') {

        fs.writeFile(path, content, function (err) {
            if (err) {
                throw err;
            }
        });

        console.log('creating file', path);

    }

    function createFolder(path) {
        fs.mkdirSync(path, { recursive: true });
        
        console.log('creating folder', path);
    }

}