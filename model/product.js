const fs= require('fs')
const path= require('path');

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        const linkData= path.join(path.dirname(require.main.filename),'data','products.json')
        fs.readFile(linkData,(err, fileContent)=>{
            let products = []; 
            if(!err){
                products=JSON.parse(fileContent)
            }
            products.push(this);
            fs.writeFile(linkData, JSON.stringify(products), err =>{
                console.log(err)
            })
        })        
    }

    static fetchAll(cb) {
        const linkData= path.join(path.dirname(require.main.filename),'data','products.json')
             
            fs.readFile(linkData, (err, fileContent) => {
                if (err) {
                  return []
                }
                return (JSON.parse(fileContent));
              });      
    }
}