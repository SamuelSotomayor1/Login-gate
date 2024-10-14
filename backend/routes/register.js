const { jsonResponse } = require("../lib/jsonResponse");
const router = require("express").Router();
const User = require("../schema/userSchema");

router.post("/", async(req,res) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password){
        return res.status(400).json(jsonResponse(400, {
            error: "Completa todos los campos",
        })
    );
}

//crear usuario en la base de datos
//const user = new User({username, email, password});
    try {
        const user = new User();
    const exists = await user.usernameExist(username);

    if(exists ){
        return res.status(400).json(
            jsonResponse(400, {
                error: "Username already exists",
            })
        );
    }

    const newUser = new User({username, email, password});

    try {
        await newUser.save();
        res.status(200).json(jsonResponse(200, { message: "User created successfully" }));
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json(jsonResponse(500, {
            error: "Failed to create user",
            details: error.message
        }));
    }

    } catch (error) {
        res.status(500).json(jsonResponse(500, {
            error: "Error creating user",
            })
        );
    }

});

module.exports = router;