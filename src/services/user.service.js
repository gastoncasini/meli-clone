export const userService = {
  login,
  logout
};

function login(user, pass) {
  return new Promise(function(resolve, reject) {
    if (user && pass) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          user
        })
      );

      resolve({
        user
      });
    } else {
      reject({ error: "provide a valid user and password" });
    }
  });
}

function logout() {
  localStorage.removeItem("user");
  return Promise.resolve();
}
