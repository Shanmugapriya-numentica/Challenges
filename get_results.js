

fetch('https://jsonplaceholder.typicode.com/todos/1')  
  .then(res => {
    if (res.ok) {
      console.log("Success");
    }
    else{
        throw new Error('Network response was not ok ' + res.status);
    }
    return res.json();  
  })
  .then(datas => {
    console.log(datas);  
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
