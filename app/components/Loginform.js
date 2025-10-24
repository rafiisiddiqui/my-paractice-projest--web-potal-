"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Loginformpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const validEmail = "admin@aesthetic.com";
  const validPassword = "12345";
  const validUsername = "admin"
  const router = useRouter();



  const handleLogin = (e) => {
    e.preventDefault();

    // Email  + password
    if ((email === validEmail || email === validUsername)  && password === validPassword) {
      router.push("/dashboard"); 

    } else {
      setError("Invalid  email/username or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/futuristic.jpg')]">
      <div className="h-96 flex items-center justify-center ">
        <div className="relative">
          {/* Glassmorphism effect + neon border */}
          <div className="absolute -top-4 -left-4 -right-4 -bottom-4 rounded-xl border-2 border-cyan-400 shadow-[0_0_40px_5px_rgba(0,255,255,0.2)] animate-pulse backdrop-blur-xl"></div>

          <div
            id="form-container"
            className="bg-cyan-800/20 p-16 rounded-xl w-120 relative z-12 transition duration-600 ease-in-out border border-cyan-400/40 shadow-lg shadow-cyan-400/30  backdrop-blur-xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-lg">
                LogIn
              </span>
            </h2>

            
            <form onSubmit={handleLogin}>
                {/* Email & Password fields */}
              <div className="mb-8">
                <label
                  htmlFor="Email"
                  className="block text-cyan-500 text-sm font-bold mb-2"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 inline-block w-4.5" />
                  Email
                </label>
                <div>
                  <input
                    id="Email"
                    type="text"
                    autoComplete="off"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-cyan-500 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your email/username"
                  />
                </div>
              </div>
              <div className="mb-8">
                <label
                  htmlFor="Password"
                  className="block text-cyan-500 text-sm font-bold mb-2"
                >
                  <FontAwesomeIcon icon={faLock} className="mr-2 inline-block w-4.5" />
                  Password
                </label>
                <div>
                  <input
                    id="password"
                    type="password"
                    autoComplete="off"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-cyan-500 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              
              {error && <p className="text-red-500 text-center mt-4">{error}</p>}

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-700 via-blue-500 to-cyan-700 hover:from-cyan-700 hover:to-cyan-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg focus:outline-none focus:shadow-outline w-full"
                >
                  LogIn
                </button>
              </div>

              <div className="text-center mb-6 mt-6 ">
                <Link href="/" className="text-cyan-400 hover:underline">
                  Forget Password
                </Link>
              </div>
            </form>

            <p className="text-center text-cyan-200 mb-6 mt-6 ">
              Don't have an account?
              <Link href="/" className="text-cyan-500 hover:underline mb-4 mt-6">
                Sign up
              </Link>
            </p>

            <div className="mt-4 mb-4">
              <p className="text-center text-cyan-400 mt-4"> Login in with </p>
              <div className="flex justify-center mt-4">
                <Link
                  href="/"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="w-4" />
                </Link>
                <Link
                  href="/"
                  className="bg-pink-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mx-2"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-6" />
                </Link>
                <Link
                  href="/"
                  className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded mx-2"
                >
                  <FontAwesomeIcon icon={faTwitter} className="w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginformpage;
