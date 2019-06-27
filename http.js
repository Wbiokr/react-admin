// 本地检测打包之后项目


const http=require('http');
const url=require('url');
const path=require('path');
const fs=require('fs');
const os=require('os')

// var pn='';
const hostLocal='101.132.73.125';
// const hostLocal=require('ipv4');
const port=8808;


http.createServer((req,res)=>{
    let pathname=url.parse(req.url).pathname;
    if(pathname.indexOf('.')==-1){
        pathname+='/index.html';
    }
    let fileURL='./'+path.normalize(pathname);
    // let fileURL='./index.html';
    console.log('地址为:'+fileURL)
    // if(fileURL)
    let extname=path.extname(pathname);
    fs.readFile(fileURL,(Error,data)=>{
        if(Error){
            res.writeHead(404,{'Content-type':'text/html;charset=UTF8'});
            res.end('404,资源没有找到！')
        }
        getMime(extname,(mime)=>{
            res.writeHead(200,{'Content-type':mime});
            res.end(data);
        })
    })
    
}).listen(port);

console.log(`we are listening:${hostLocal}:${port}`)

// http.createServer((req,res)=>{
//   let pathname=url.parse(req.url).pathname;
//   if(pathname.indexOf('.')==-1){
//       pathname+='/index.html';
//   }
//   let fileURL='./'+path.normalize(pathname);
//   // let fileURL='./index.html';
//   console.log('地址为:'+fileURL)
//   // if(fileURL)
//   let extname=path.extname(pathname);
//   fs.readFile(fileURL,(Error,data)=>{
//       if(Error){
//           res.writeHead(404,{'Content-type':'text/html;charset=UTF8'});
//           res.end('404,资源没有找到！')
//       }
//       getMime(extname,(mime)=>{
//           res.writeHead(200,{'Content-type':mime});
//           res.end(data);
//       })
//   })
// }).listen(port,hostIpv4);
// console.log(`You can also access us by IP:${hostIpv4}:${port}`)


function getMime(extname,callback){
    fs.readFile('./config/mime.json',(err,data)=>{
        if(err){
            throw Error('sorry')
        };
        let mimeJson=JSON.parse(data);
        let mimeType=mimeJson[extname]||'text/plain';
        callback(mimeType)
    })
}


function getIPv4(){ 
    var interfaces = os.networkInterfaces();//获取网络接口列表 
    var ipv4s = [];//同一接口可能有不止一个IP4v地址，所以用数组存
    
    Object.keys(interfaces).forEach(function (key){
        interfaces[key].forEach(function (item){
    
            //跳过IPv6 和 '127.0.0.1'
            if ( 'IPv4' !== item.family || item.internal !== false )return;
    
            ipv4s.push(item.address);//可用的ipv4s加入数组
            console.log(key+'--'+item.address);
        })        
    })
    
    return ipv4s[0];//返回一个可用的即可
}