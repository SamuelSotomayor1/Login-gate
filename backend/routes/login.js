const { jsonResponse } = require("../lib/jsonResponse");
const router = require("express").Router();
const User = require("../schema/userSchema")

router.post("/", async (req,res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json(jsonResponse(400, {
            error: "Completa todos los campos",
        })
    );
}

const user = await User.findOne({username});

if(user){
    const correctPassword = await user.comparePassword(password, user.password);

    if(correctPassword){
        //autenticar usuario
        const accessToken = "access_token";
        const refreshToken = "refresh_token";
        res.status(200).json(jsonResponse(200, { user, accessToken, refreshToken}));
    } else {
        res.status(400).json(
            jsonResponse(400, {
                error: "User or password incorrect"
            })
        );
    }
} else {
    res.status(400).json(
        jsonResponse(400, {
            error: "User not found"
        })
    );
}
});

module.exports = router;