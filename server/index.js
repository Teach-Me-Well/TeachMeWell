let express = require("express")
let path = require("path");

let bodyParser = require("body-parser");
let compiler = require("compilex");

let app = express();
app.use(bodyParser());

let option = {stats:true};
compiler.init(option);
app.get("/",function(req,res){
    res.sendfile(__dirname + "/index.html");
});

app.post("/compilecode", function(req,res){
    let code = req.body.code;
    let input = req.body.input;
    let inputRadio = req.body.inputRadio;
    let lang = req.body.lang;

    if(lang ==="C" || lang==="C++"){
        if(inputRadio === "true"){
            let envData ={OS : "windows",cmd:"g++", options:{timeout: 10000 } };
            compiler.compileCPPWithInput(envData , code , input,function(data){
                if(data.error){
                    res.send(data.error)
                }
                else{
                    res.send(data.output)
                }
            });
        }else{
            let envData ={OS : "windows",cmd:"g++", options:{timeout: 10000 } };
            compiler.compileCPP(envData , code ,function(data){
                    res.send(data);
            });
        }
    }

    if(lang==="Python"){
        if(inputRadio=== "true"){
        let envData = {OS : "windows"};
        compiler.compilePythonWithInput(envData, code,input,function(data){
            if(data.error){
                res.send(data.error)
            }
            else{
                res.send(data.output)
            }
        });
    }else{
        let envData = {OS : "windows"};
        compiler.compilePython(envData,code,function(data){
            if(data.error){
                res.send(data.error)
            }
            else{
                res.send(data.output)
            }
        });
    }
}
});

app.get("/fullstat",function(req,res){
    compiler.fullStat(function(data){
        res.send(data);
    });
});

app.listen(8080);
