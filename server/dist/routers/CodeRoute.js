"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CodeController_1 = require("../controllers/CodeController");
const router = (0, express_1.Router)();
router.post("/", CodeController_1.CodeController.saveId);
router.get("/:id", CodeController_1.CodeController.getCodeById);
exports.default = router;
