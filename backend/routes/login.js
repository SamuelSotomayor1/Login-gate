const { jsonResponse } = require("../lib/jsonResponse");
const router = require("express").Router();
const User = require("../schema/userSchema")
const getUserInfo = require("../lib/getUserInfo");

router.post("/", async (req,res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json(jsonResponse(400, {
            error: "Completa todos los campos",
        })
    );
}

const user = await User.findOne({email});

if(user){
    const correctPassword = await user.comparePassword(password, user.password);

    if(correctPassword){
        //autenticar usuario
        const accessToken = user.createAccessToken();
        const refreshToken = await user.createRefreshToken();
        res.status(200).json(jsonResponse(200, { user: getUserInfo(user), accessToken, refreshToken}));
    } else {
        res.status(400).json(
            jsonResponse(400, {
                error: "Email or password incorrect"
            })
        );
    }
} else {
    res.status(400).json(
        jsonResponse(400, {
            error: "Email not found"
        })
    );
}
});

module.exports = router;