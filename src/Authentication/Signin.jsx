import { Link } from "react-router-dom"
export default function Signin() {
  return (
    <div className="bg-[#F0F0F0] h-screen flex items-center justify-center">
      <main className="text-black">
        <div className="bg-white p-8 rounded-2xl w-[20rem] sm:w-[24rem] md:w-[28rem] lg:w-[32rem] shadow-lg">
          <h1 className="font-bold text-base lg:text-lg">AI Coach Assistant</h1>
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mt-10">
            Sign In
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            to continue to the AI coach assistant
          </p>
          <form action="">
            <div className="mt-16 w-full flex flex-col">
              <div>
                <label
                  className="text-xs block sm:text-sm font-bold mt-4"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="border-2 border-gray-400 focus:outline-[#793FDF] w-full rounded-lg mt-0.5 px-4 py-2 border-opacity-50"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div>
                <label
                  className="text-xs block sm:text-sm font-bold mt-4"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="border-2 border-gray-400 focus:outline-[#793FDF] w-full rounded-lg mt-0.5 px-4 py-2 border-opacity-50"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              
              <button className="w-full bg-[#793FDF] text-white text-center py-2 font-semibold mt-8 rounded-lg border-2 border-[#793FDF] hover:text-[#793FDF] hover:bg-white duration-500" type="submit">CONTINUE</button>
            </div>
          </form>
          <div className="py-8">
            <p className="text-xs lg:text-sm text-gray-400">No Account? <Link className="text-[#793FDF] cursor-pointer font-semibold" to="/signup"> Sign up</Link></p>
          </div>
        </div>
      </main>
    </div>
  );
}
