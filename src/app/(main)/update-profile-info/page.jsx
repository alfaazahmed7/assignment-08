"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, TextField } from "@heroui/react";
import { BiUser, BiSave } from "react-icons/bi";
import { useRouter } from "next/navigation";

export function UpdateUserForm() {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;

        await authClient.updateUser({
            name,
            image
        });

        router.push("/profile");
    };

    return (
        <div className="min-h-[54vh] flex items-center justify-center px-4">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

                {/* Header */}
                <div className="flex items-center gap-2 mb-6">
                    <BiUser className="text-xl text-gray-700" />
                    <h2 className="text-lg font-semibold text-gray-800">
                        Update Profile
                    </h2>
                </div>

                {/* Form */}
                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                    <TextField name="name" type="text">
                        <Label className="text-sm text-gray-600">Name</Label>
                        <Input
                            placeholder="Your name"
                            className="rounded-lg"
                        />
                    </TextField>

                    <TextField name="image" type="url">
                        <Label className="text-sm text-gray-600">Image URL</Label>
                        <Input
                            placeholder="https://..."
                            className="rounded-lg"
                        />
                    </TextField>

                    {/* Actions */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-900 cursor-pointer"
                        >
                            <BiSave className="text-lg" />
                            Save Changes
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default UpdateUserForm;