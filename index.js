function submitData(name,email){
  const userData = {
    name: "Steve",
    email: "steve@steve.com"
  };
  const configurationObject = {
    method: "POST",
    headers: {
      'Content-Type':'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(userData),
  };
  return fetch('http://localhost:3000/users', configurationObject)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    document.body.innerHTML = data.id;
  })
  .catch(function(error){
    document.body.innerHTML = error.message;
  });

}

   


