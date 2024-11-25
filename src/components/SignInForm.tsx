"use client";

import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BackgroundLines } from "./ui/background-lines";
import { BlurFade } from "./ui/blur-fade";
import { signIn } from "@/lib/auth/client";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

export default function SignInForm() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(async () => {
      const response = await signIn.username(data);

      if (response.error) {
        console.error("SIGN_IN:", response.error.status);
        toast.error(response.error.message);
      } else {
        redirect("/chats");
      }
    });
  }
  return (
    <BackgroundLines className="flex w-full flex-col items-center justify-center px-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="z-50 w-full space-y-10 md:w-1/4"
        >
          <BlurFade delay={0.25} inView>
            <h1 className="text-center">Sign In</h1>
          </BlurFade>
          <BlurFade delay={0.35} inView>
            <FormField
              control={form.control}
              name="username"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="wildaanuri" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <FormField
              control={form.control}
              name="password"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </BlurFade>
          <BlurFade delay={0.45} inView>
            <Button type="submit" disabled={isPending} className="w-full">
              Submit
            </Button>
          </BlurFade>
        </form>
      </Form>
    </BackgroundLines>
  );
}
