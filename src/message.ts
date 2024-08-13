import { Request, Response } from "express";

type MessageBody = {
    "attachments": any[],
    "avatar_url": string,
    "created_at": number,
    "group_id": string,
    "id": string,
    "name": string,
    "sender_id": string,
    "sender_type": string,
    "source_guid": string,
    "system": boolean,
    "text": string,
    "user_id": string
  }

export default function messageRoute(req:Request, res:Response) {
    const body = req.body as MessageBody;
    console.log(body);
    res.send('Hello World!');
}