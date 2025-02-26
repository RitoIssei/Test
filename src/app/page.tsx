'use client';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { RegisterBody, RegisterBodyType } from "./schemas/user";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserStore from "@/services/user";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const form = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      username: '',
      email: '',
    },
  });

  const { user, register, getUser } = useUserStore();

  // 2. Define a submit handler.
  async function onSubmit(values: RegisterBodyType) {
    if (loading) return;
    setLoading(true);
    try {
      const body = {
        username: values.username,
        email: values.email,
      };
      const result = await register(body);

   
    } catch (error: any) {
      console.log(error);

    
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <div className="h-[100svh] flex items-center justify-center">

    <div className="w-[500px] ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2 flex-shrink-0 w-full"
                noValidate
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tài khoản</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Tên tài khoản..."
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Tên tài khoản..."
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
             
                <Button
                  disabled={loading}
                  type="submit"
                  className="!mt-4 w-full text-xl rounded-lg text-white"
                >
                  {loading && <Loader2 className="animate-spin" />}
                  Đăng nhập
                </Button>
              </form>
            </Form>

    </div>
    </div>
  );
}
