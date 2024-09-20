'use client'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Address, setAddress] = useState("");
    const [Nickname, setNickname] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

    fetch('/api/post', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,Address,password,Nickname
            })
        }).then(async (r)=> {
                if(!r.ok) {
                    const message = await r.text();
                    alert(message);
                }
                alert("회원가입 성공")
                router.push(`/login`)
            })
    }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-sky-500 mb-6">Sign</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            className="border-2 p-2 rounded w-full"
            placeholder="ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="border-2 p-2 rounded w-full"
            placeholder="PW"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            className="border-2 p-2 rounded w-full"
            placeholder="Mail Address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="password"
            className="border-2 p-2 rounded w-full"
            placeholder="Nickname"
            value={Nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <button className="w-full h-10 bg-sky-500 text-white rounded hover:bg-sky-300 transition-colors">
            sign in
          </button>
        </form>
        </div>
      </div>
  );
}
