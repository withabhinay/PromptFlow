import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required'],
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String
    },
})

//see firstly models won't be there so it will create since it. but since it is a nextjs so whenever we will call to connect it will try to create same user model and to avoid this we need to see if models have User or not. Rember this the model not the data which we are entering. 
//every single time connection is established it creates this model 
const User = models.User || model("User", UserSchema);

export default User;