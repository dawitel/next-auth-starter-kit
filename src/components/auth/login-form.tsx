"use client";

import * as z from "zod";
import { useTransition } from "react";
import { LoginSchema } from "@/schemas/form.schema";
import { CardWrapper } from "@/components/auth/card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { logUserInAction } from "@/actions/login";
export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  // form hook
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
   startTransition(() => {
     logUserInAction(values); 
   })
  };
  return (
    <div>
      <CardWrapper
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/register"
        showSocial
        headerLabel="Welcome Back"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        {...field}
                        placeholder="jhon.doe@example.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="********"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormSuccess />
            <FormError />
            <Button
              disabled={isPending}
              type="submit"
              className="w-full font-semibold text-gray-300"
            >
              Login
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
};
