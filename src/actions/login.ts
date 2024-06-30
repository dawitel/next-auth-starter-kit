// server actions code will not get bundled with the client code
"use server";
import * as z from "zod"
import {LoginSchema} from "@/schemas/form.schema"

export const logUserInAction = (values: z.infer<typeof LoginSchema>) => {
    // server side validation
    const validatedValues = LoginSchema.safeParse(values)

    if(!validatedValues) return {error: "Invalid fields"}

    return {success: "Email and password sent"}
};
