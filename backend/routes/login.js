const { jsonResponse } = require("../lib/jsonResponse");

const router = require("express").Router();

router.post("/", (req,res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json(jsonResponse(400, {
            error: "Completa todos los campos",
        })
    );
}

//autenticar usuario
const accessToken = "access_token";
const refreshToken = "refresh_token";
const user = {
    _id: "1",
    email: "test@gmail.com"
};

res.status(200).json(jsonResponse(200, { user, accessToken, refreshToken}));

});

module.exports = router;