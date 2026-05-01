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
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function SignUpPage() {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const toastId = toast.loading("Creating your account...");

        const { data, error } = await authClient.signUp.email({
            name,
            image,
            email,
            password
        });

        if (error) {
            toast.update(toastId, {
                render: "Sign up failed. Please try again.",
                type: "error",
                isLoading: false,
                autoClose: 3000,
            });
            return;
        }

        toast.update(toastId, {
            render: "Account created. Welcome aboard.",
            type: "success",
            isLoading: false,
            autoClose: 1500,
        });

        setTimeout(() => {
            router.push("/");
        }, 1200);
    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google"
        });
    };

    return (
        <div className="mx-5 flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-base-100 to-base-200">

            <Card className="w-full max-w-md p-8 rounded-3xl shadow-xl border border-base-200">

                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold tracking-tight">
                        Create Account
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Join us and start your journey
                    </p>
                </div>

                <Form
                    className="w-full flex flex-col gap-5"
                    onSubmit={onSubmit}
                >
                    {/* Name */}
                    <TextField isRequired name="name" type="text">
                        <Label className="text-sm font-medium">Name</Label>
                        <Input
                            placeholder="Enter your name"
                            className="w-full rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary/40 transition-all"
                        />
                        <FieldError />
                    </TextField>

                    {/* Image */}
                    <TextField isRequired name="image" type="text">
                        <Label className="text-sm font-medium">Profile Image</Label>
                        <Input
                            placeholder="https://example.com/avatar.jpg"
                            className="w-full rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary/40 transition-all"
                        />
                        <FieldError />
                    </TextField>

                    {/* Email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
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
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-sm font-medium">Password</Label>
                        <Input
                            placeholder="Enter your password"
                            className="w-full rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary/40 transition-all"
                        />
                        <Description className="text-xs text-gray-400">
                            At least 8 characters, 1 uppercase & 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-2">
                        <Button
                            type="submit"
                            color="primary"
                            className="flex-1 rounded-xl font-medium shadow-md"
                        >
                            <Check />
                            Create Account
                        </Button>

                        <Button
                            type="reset"
                            variant="flat"
                            className="flex-1 rounded-xl hover:bg-base-200"
                        >
                            Reset
                        </Button>
                    </div>

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