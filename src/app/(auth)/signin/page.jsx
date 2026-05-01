"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { toast } from "react-toastify";

export default function SignInPage() {
    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const toastId = toast.loading("Signing you in...");

        const { data, error } = await authClient.signIn.email({
            email,
            password
        });

        if (error) {
            toast.update(toastId, {
                render: "Sign in failed. Check your credentials.",
                type: "error",
                isLoading: false,
                autoClose: 3000,
            });
            return;
        }

        toast.update(toastId, {
            render: "Welcome back. Redirecting...",
            type: "success",
            isLoading: false,
            autoClose: 1500,
        });

        setTimeout(() => {
            window.location.href = "/";
        }, 1200);
    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google"
        });
    };

    return (
        <div className="mx-5 flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-base-100 to-base-200">

            <Card className="w-full max-w-md p-8 rounded-3xl shadow-xl border border-base-200 backdrop-blur-md">

                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold tracking-tight">
                        Welcome Back
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Sign in to continue your journey
                    </p>
                </div>

                <Form className="w-full flex flex-col gap-5" onSubmit={onSubmit}>

                    {/* Email */}
                    <TextField isRequired name="email" type="email">
                        <Label className="text-sm font-medium">Email</Label>
                        <Input
                            placeholder="john@example.com"
                            className="w-full rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary/40 transition-all"
                        />
                        <FieldError />
                    </TextField>

                    {/* Password */}
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                    >
                        <Label className="text-sm font-medium">Password</Label>
                        <Input
                            placeholder="Enter your password"
                            className="w-full rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary/40 transition-all"
                        />
                        <FieldError />
                    </TextField>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-2">
                        <Button
                            type="submit"
                            className="flex-1 rounded-xl font-medium shadow-md"
                            color="primary"
                        >
                            <Check />
                            Sign In
                        </Button>
                        <Button
                            type="reset"
                            variant="flat"
                            className="flex-1 rounded-xl hover:bg-base-200"
                        >
                            Reset
                        </Button>
                    </div>

                    {/* Register */}
                    <p className="text-center text-sm text-gray-500 mt-2">
                        Don’t have an account?{" "}
                        <Link
                            href="/signup"
                            className="text-primary font-semibold hover:underline"
                        >
                            Register
                        </Link>
                    </p>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-1">
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="text-xs text-gray-400">OR</span>
                        <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    {/* Google */}
                    <Button
                        onClick={handleGoogleSignIn}
                        variant="bordered"
                        className="w-full rounded-xl font-medium bg-base-200 transition"
                    >
                        Continue with Google
                    </Button>

                </Form>
            </Card>
        </div>
    );
}