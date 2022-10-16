import { z } from "zod";

const authSchema = z.object({
    email: z.string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string'
    }).trim().email({
        message: 'Email should be a valid address'
    }),
    password: z.string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be a string'
    }).trim().min(5, {message: 'Password should be non-empty'})
});

export default authSchema;