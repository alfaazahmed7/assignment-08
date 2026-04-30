"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
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
        <div className="mx-5 flex items-center justify-center min-h-[80vh]">
            <Card className="w-full max-w-md py-10">
                <h1 className="text-center text-2xl font-bold">Sign In</h1>

                <Form className="w-full px-6 flex flex-col gap-4" onSubmit={onSubmit}>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                    >
                        <Label>Email</Label>
                        <Input
                            placeholder="john@example.com"
                            className={"w-full rounded-full"} />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                    >
                        <Label>Password</Label>
                        <Input
                            placeholder="Enter your password"
                            className={"w-full rounded-full"}
                        />
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit">
                            <Check />
                            Submit
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>

                    <div>
                        <p className="text-center mb-1">or</p>
                        <Button
                            onClick={handleGoogleSignIn}
                            variant="outline"
                            className={"w-full p-2"}
                        >
                            Login with Google
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
}