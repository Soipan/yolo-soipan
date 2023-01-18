db.createUser{
    {
        user: "admin" 
        pass: "password"
        roles: [
            {
                role: "readWrite"
                db: "yolomy"
            }

        ]
    }
}