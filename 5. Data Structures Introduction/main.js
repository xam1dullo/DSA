/* 
    1 . How to build One
    2.  How to Use it



    *  CPU - Central processing unit
    *  RAM - Random Access memory
    *  Storage - Storage is something you use to put your stuff in
 */



const process = require('node:process');

let running

const stopWorker = () => {
  running = false;
}

const startWorker = function ({ st, rt }) {
  refreshTime = rt
  running = true;
  setTimeout(() => {
    fn();
}, st);
};
const fn = async () => {
  if (running) {
    let executedAt = Date.now();
    setTimeout(async () => {
      executedAt = Date.now();
      console.log("start");
      fn();
  }, refreshTime - (executedAt % refreshTime));
} else { 
    process.on('exit', (code) => {
      setTimeout(() => {
        console.log('This will not run');
    }, 0);
  });
}
};


startWorker({st:3000, rt:2000})

setTimeout(()=> stopWorker(), 6000)