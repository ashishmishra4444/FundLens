import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const Login = () => {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values, mode);
  };

  return (
    <div className="w-full rounded-2xl bg-[#0b1220]/80 backdrop-blur-xl border border-white/10 p-8 text-white shadow-2xl">

      {/* BRAND */}
      <div className="pt-6 pb-6 text-center relative overflow-visible">
      
        {/* MAIN TEXT */}
        <h1 className="relative z-10 text-3xl font-bold tracking-wide text-blue-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]">
          FUNDLENS
        </h1>

        <div
          className="
            absolute left-1/2 -translate-x-1/2
            top-[3.2rem]
            text-3xl font-bold tracking-wide
            text-blue-400
            opacity-30
            blur-sm
            pointer-events-none
        "
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)",
          }}
        >
          FUNDLENS
        </div>

        <p className="mt-12 text-sm text-gray-300 relative z-10">
          {mode === "login" ? "Log in to FUNDLENS" : "Create your account"}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* NAME */}
          {mode === "signup" && (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Full Name"
                        className="pl-10 bg-[#111827] border border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-blue-500"
                        {...field}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          )}

          {/* EMAIL */}
          <FormField
            control={form.control}
            name="email"
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="Email"
                      className="pl-10 bg-[#111827] border border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-blue-500"
                      {...field}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          {/* PASSWORD */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="pl-10 pr-10 bg-[#111827] border border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-blue-500"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          {/* FORGOT */}
          {mode === "login" && (
            <div className="text-right text-xs text-blue-400 cursor-pointer">
              Forgot password?
            </div>
          )}

          {/* PRIMARY CTA */}
          <Button
            type="submit"
            className="w-full bg-linear-to-r from-blue-700 to-cyan-600 hover:opacity-80 text-white font-semibold cursor-pointer"
          >
            {mode === "login" ? "SIGN IN" : "CREATE ACCOUNT"}
          </Button>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 my-4">
            <Separator className="flex-1 bg-white/10" />
            <span className="text-xs text-gray-400">OR</span>
            <Separator className="flex-1 bg-white/10" />
          </div>

          {/* GOOGLE */}
          <Button
            type="button"
            variant="outline"
            className="w-full bg-white text-black hover:bg-gray-400 cursor-pointer"
          >
            CONTINUE WITH GOOGLE
          </Button>

          {/* TOGGLE */}
          <p className="text-center text-sm text-gray-400 mt-4">
            {mode === "login" ? (
              <>
                Don't have an account?{" "}
                <span
                  onClick={() => setMode("signup")}
                  className="text-blue-400 cursor-pointer"
                >
                  SIGN UP NOW
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => setMode("login")}
                  className="text-blue-400 cursor-pointer"
                >
                  LOGIN
                </span>
              </>
            )}
          </p>
        </form>
      </Form>
    </div>
  );
};

export default Login;
