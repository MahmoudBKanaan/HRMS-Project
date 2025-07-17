export const mockLogin = async (username, password) => {
  if (username === "admin@mail.com" && password === "Ss@225588") {
    return { success: true, token: "fakeToken", admin: true };
  } else if (username === "user@mail.com" && password === "Ss@225588") {
    return { success: true, token: "fakeToken", admin: false };
  } else {
    console.log("Invalid Credentials, try again")
    throw new Error("Invalid credentials");
  }
};