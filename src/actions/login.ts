"use server";

import { z } from "zod";

import { LoginSchema } from "@/schemas";

export const login = (values: z.infer<typeof LoginSchema>) => {
  console.log(values);
};
