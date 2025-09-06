"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeController = void 0;
const uuid_1 = require("../utils/uuid");
const DB_1 = require("../db/DB");
exports.CodeController = {
    saveId: async (req, res) => {
        try {
            const { lang, code } = await req.body;
            const uuid = await (0, uuid_1.genUUid)();
            const db = await (0, DB_1.getDB)();
            const insert = await db.collection("saveCode").insertOne({
                id: uuid,
                lang: lang,
                code: code,
            });
            console.log(insert.insertedId);
            res.status(201).send({ msg: "ok", id: uuid });
        }
        catch (error) {
            console.log(error);
            res.status(500).send({ error: error });
        }
    },
    getCodeById: async (req, res) => {
        const id = req.params.id;
        const db = await (0, DB_1.getDB)();
        const doc = await db.collection("saveCode").findOne({
            id: id,
        });
        res.status(200).send({ doc: doc });
    },
};
