import { connectDB } from '../../utils/database';  // MongoDB 연결 유틸리티
import bcrypt from 'bcrypt';  // 비밀번호 해시 검증을 위한 라이브러리

export default async function handler(req, res) {
    if(req.method != 'POST') { return res.status(400).json({message: '잘못된 접근입니다.'}) }
    
    const db = (await connectDB).db('users')

    const data = req.body
    const email= data.email
    const pw = data.password

    const result = await db.collection('list').findOne({email: email, password: pw})

    if (result) {
        return res.status(404).json("이메일을 찾을 수 없음")
    }
    else {
        return res.status(200).json()
    }

}

<div>
<form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="PW"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
</div>

