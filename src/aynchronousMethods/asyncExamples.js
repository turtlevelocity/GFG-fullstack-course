function someProcessing(url, callbackfn) {
  setTimeout(()=>{
    const data = {naem: "shubham", job: "mentor"}
    callbackfn(data);
  }, 2000);
}


// -------- promise examples ----

function promiseExample(data) {
  const success = false;

  return new Promise((resolve, reject) => {
    if(success) {
      console.log("success is true");
       resolve(data);
    }
    else{
      const error = new Error("success is false");
      reject(error);
    }

  })
}


// -------------async await ---

async function asyncFnExample(data) {
  return data;
}

function syncFnExample(data) {
  return data;
}

async function getData() {
  try{
    const response = await promiseExample("calling from sync await");
    console.log(response);
  }
  catch(err) {
    console.log(err);
  }
  
}

getData();

