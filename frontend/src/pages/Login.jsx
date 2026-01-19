import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import googleLogo from "../assets/google-icon-logo-svgrepo-com.svg"
import { Link } from "react-router-dom";

const Login = () => {


  return (
    <div className="container max-w-7xl mx-auto min-h-screen flex items-center justify-center ">
      <Card className="w-full max-w-[400px] bg-none text-inherit bg-[#111318] border-0 py-10 px-5">
        <CardHeader className="flex flex-col">
          <h1 className="text-3xl font-semibold mb-4">Welcome!</h1>
          <CardTitle className="text-xl">Login to your account</CardTitle>
          <CardDescription className="text-inherit">
            Enter your email below to login to your account
          </CardDescription>
          {/* <CardAction >
          <Button className="text-inherit" variant="link">Sign Up</Button>
        </CardAction> */}
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  className="border border-white/15 py-5 focus:!outline-none focus:!ring-2 focus:!ring-[#5C8AF2]/35 focus:!border-[#5C8AF2]/60 "
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-sm ">
                    Password
                  </Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  className="border border-white/15 py-5 focus:!outline-none focus:!ring-2 focus:!ring-[#5C8AF2]/35 focus:!border-[#5C8AF2]/60"
                  id="password"
                  type="password"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full btn-primary text-md py-5 my-1"
          >
            Login
          </Button>

          <div className="flex items-center gap-4 my-5">
            <div className="h-px flex-1 w-8 bg-white/15" />
            <span className="text-[11px] font-medium tracking-[0.3em] text-white/35">
              OR
            </span>
            <div className="h-px flex-1 bg-white/15" />
          </div>
          <Button variant="outline" className="w-full bg-color-none border py-5 border-white/15 hover:cursor-pointer">
          <img src={googleLogo} alt="Google Logo" width={15} />
          Login with Google
        </Button>
        <p className="text-[14px] mt-2 text-white/50">Don’t have an account? <Link to="/signup" className="ml-auto inline-block text-sm underline-offset-4 hover:underline hover:cursor-pointer text-[#6078DD]">Sign up</Link></p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
