'use client'
// import { UpdateUserModal } from "@/components/Profile/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { FiUserCheck } from "react-icons/fi";

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    return (
        <div className="flex items-center justify-center min-h-[54vh]">
            <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6  hover:shadow-[0_0_40px_rgba(0,0,0,0.2)]">

                {/* Profile Image */}
                <div className="flex justify-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-gray-300/40">
                        <Image
                            src={user?.image || "/default-avatar.png"}
                            alt={user?.name || "user"}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Name */}
                <div className="text-center mt-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {user?.name}
                    </h2>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                </div>

                {/* Verified Badge */}
                <div className="flex justify-center mt-3">
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${user?.emailVerified
                        ? "bg-green-100 text-green-600 border border-green-300"
                        : "bg-red-100 text-red-600 border border-red-300"
                        }`}>
                        {user?.emailVerified ? "Verified" : "Not Verified"}
                    </span>
                </div>

                {/* Info */}
                <div className="mt-5 space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                        <span>User ID</span>
                        <span className="truncate max-w-[150px]">
                            {user?.id}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>Joined</span>
                        <span>
                            {user?.createdAt
                                ? new Date(user.createdAt).toLocaleDateString()
                                : "-"}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>Updated</span>
                        <span>
                            {user?.updatedAt
                                ? new Date(user.updatedAt).toLocaleDateString()
                                : "-"}
                        </span>
                    </div>
                </div>

                {/* Button */}
                <div className="flex justify-center mt-2">
                    <Link
                        href={"/update-profile-info"}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-900">
                        <FiUserCheck className="text-lg" />
                        Update Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;