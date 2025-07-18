import CryptoJS  from "crypto-js";


export const mockLogin = async (username, password, secretKey) => {

  let decryptedPassword = '';
  const encryptedPassword = localStorage.getItem("currentPassword");

  if(!encryptedPassword) {decryptedPassword = "Ss@225588"}
  else if (encryptedPassword) {
    decryptedPassword = CryptoJS.AES.decrypt(encryptedPassword,secretKey).toString(CryptoJS.enc.Utf8);
  } 
  
  if (username === "admin@mail.com" && password === decryptedPassword) {
    return { success: true, token: "fakeToken", admin: true };
  } else if (username === "user@mail.com" && password === decryptedPassword) {
    return { success: true, token: "fakeToken", admin: false };
  } else {
    console.log("Invalid Credentials, try again")
    throw new Error("Invalid credentials");
  }
  };