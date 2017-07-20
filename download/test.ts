import Download from './index.js'; 
debugger;

Download.File("http://o6httuwar.bkt.clouddn.com/2202-ntk39234.jpg","./",null)
.then( (result) => {
  console.log(result)
})

Download.FileStream("http://o6httuwar.bkt.clouddn.com/2202-ntk39234.jpg","./",null)
.then( (result) => {
  console.log(result)
})