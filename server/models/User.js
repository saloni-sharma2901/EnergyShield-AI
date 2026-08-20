import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: true,
            minlength: 6,
        },
    },
    {
        timestamps: true,
    }
);

// Hash password only when password is new/changed
userSchema.pre("save", async function (next) {
    try {
        if (!this.isModified("password")) {
            return next();
        }

        this.password = await bcrypt.hash(this.password, 10);

        next();
    } catch (error) {
        next(error);
    }
});

// Compare entered password with hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;