"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    console.log(authHeader);
    console.log(token);
    if (token == null)
        return res.sendStatus(401);
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err);
        if (err)
            return res.sendStatus(403);
        req.user = user;
        next();
    });
}
exports.default = authenticateToken;
//# sourceMappingURL=authenticateToken.js.map