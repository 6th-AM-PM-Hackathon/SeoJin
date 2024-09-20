import Link from "next/link";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-sky-500 mb-6">Login</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            className="border-2 p-2 rounded w-full"
            placeholder="ID"
          />
          <input
            type="password"
            className="border-2 p-2 rounded w-full"
            placeholder="PW"
          />
          <button className="w-full h-10 bg-sky-500 text-white rounded hover:bg-sky-300 transition-colors">
            <Link href="/">Login</Link>
          </button>
        </form>
        <div className="flex justify-center mt-4">
          <button className="text-sky-500 hover:underline">
            <Link href="/sign">Sign in</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
