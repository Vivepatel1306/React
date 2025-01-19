  const passwordGenerator = (() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    str += "0123456789"
    str += "!@#$%^&*()_+-={}[]|\:;'<>,.?/"
 
  for (let i = 0; i < 10; i++) {
    let char = Math.ceil(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }
// setPassword(char)
console.log(pass);


} )
passwordGenerator()