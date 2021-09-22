# jsonToFolder
json to folder/file


```js
jsonToFolder({
    "deneme12873": {
        "deneme": {
            "a.js":`
            asdfasdfasdfasdf
            asdfasdfsadf`,
            "asd": ["de"],
            "asd": {
                "a": {
                    "c": []
                }
            }
        }
    }
});

/*
output:

creating folder deneme12873
creating folder deneme12873/deneme
creating file deneme12873/deneme/a.js
creating folder deneme12873/deneme/asd
creating folder deneme12873/deneme/asd/a
creating folder deneme12873/deneme/asd/a/c
*/
```
