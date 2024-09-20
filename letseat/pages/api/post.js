import { connectDB } from "../../database"

export default async function handler(req, res) {
    if(req.method != 'POST') { return res.status(400).json({message: '잘못된 접근입니다.'}) }
    
    const db = (await connectDB).db('users')
    
    // 게시글 작성
    await db.collection('list').insertOne(req.body)

    return res.status(200).json("회원가입 성공")
    
}