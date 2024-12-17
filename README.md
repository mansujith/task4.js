function greet(name) {
    try {
    
      if (name === "") {
        throw new Error("Name cannot be empty");
      }
    
      console.log(`Hello, ${name}!`);
    } catch (error) {

      console.error(error.message);
    }
  }
  
  
  greet("John");   
  greet("");       
  
