export const mockLogin = async (username, password) => {
  if (username === "admin@mail.com" && password === "Ss@225588") {
    return { success: true, token: "fakeToken" };
  } else {
    console.log("Invalid Credentials, try again")
    throw new Error("Invalid credentials");
  }
};