import { useState, useContext } from "react";
import { AuthContext } from "../contexts/auth";

// create state that will store the user name & the password the user enter inside the state 
export default function LoginForm() {
    const [username, SetUsername] = useState("");
    const [password, SetPassword] = useState("");
    const { login } = useContext(AuthContext);

function usernameChangeHandler(e) {
    SetUsername(e.target.value);
  }

function passwordChangeHandler(e) {
    SetPassword(e.target.value);
  }

function submitHandler(e) {
  e.preventDefault();
  // call login func. from context
  login({
    username,
    password,
  });
}


  return (
    <>
      <div class="h-screen font-sans bg-yellow-50 bg-cover">
        <div class="container mx-auto h-full flex flex-1 justify-center items-center">
          <div class="w-full max-w-lg">
            <div class="leading-loose">
              <form onSubmit={submitHandler} class="max-w-sm m-4 p-10 bg-red-500 bg-opacity-25 rounded shadow-xl">
                <p class="text-red font-medium text-center text-lg font-bold">
                  LOGIN
                </p>
                <div class="">
                  <label class="block text-sm text-white" for="Username">
                    Username
                  </label>
                  <input
                    class="w-full px-5 py-1 text-gray-700 bg-yellow-50 rounded focus:outline-none focus:bg-white"
                    type="text"
                    id="username"
                    placeholder="username"
                    aria-label="username"
                    required
                    onChange={usernameChangeHandler}
                  />
                </div>
                <div class="mt-2">
                  <label class="block  text-sm text-white">Password</label>
                  <input
                    class="w-full px-5 py-1 text-gray-700 bg-yellow-50 rounded focus:outline-none focus:bg-white"
                    type="password"
                    id="password"
                    placeholder="Password"
                    arial-label="password"
                    required
                    onChange={passwordChangeHandler}
                  />
                </div>

                <div class="mt-4 items-center flex justify-between">
                  
                    <button
                      type="submit"
                      title="Start"
                      class="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
                    >
                      <span class="block text-yellow-900 font-semibold text-sm">
                        Login
                      </span>
                    </button>
                  </div>
                
                <div class="text-center"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <style>
  .login{
  background: url('http://bit.ly/2gPLxZ4');
  background-repeat: no-repeat;
  background-size: cover;
}
</style> */}
    </>
  );
}
