// /pages/api/posts/get.js

import { connectDB } from "../../database";

export default async function handler(req, res) {
    if(req.method != 'GET') { return res.status(400).json('잘못된 접근입니다.') }
    

    const db = (await connectDB).db('test')
    let recipe = await db.collection('recipe').find().toArray()

    console.log(recipe)
    return res.status(200).json(recipe);
}
