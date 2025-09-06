import { genUUid } from "../utils/uuid";
import { getDB } from "../db/DB";
import { Request, Response } from "express";
export const CodeController = {
  saveId: async (req: Request, res: Response) => {
    try {
      const { lang, code } = await req.body;

      const uuid = await genUUid();
      const db = await getDB();
      const insert = await db.collection("saveCode").insertOne({
        id: uuid,
        lang: lang,
        code: code,
      });
      console.log(insert.insertedId);
      res.status(201).send({ msg: "ok", id: uuid });
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: error });
    }
  },
  getCodeById: async (req: Request, res: Response) => {
    const id = req.params.id;
    const db = await getDB();
    const doc = await db.collection("saveCode").findOne({
      id: id,
    });
    res.status(200).send({ doc: doc });
  },
};
