import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import SignInAuthButton from "./SignInAuthButton";
function Topbar() {
  const isAdmin = false;
  return (
    <div className="flex items-center justify-between p-4 sticky top-0  bg-zinc-900 backdrop-blur-md z-10">
      <div className="flex gap-2 text-white items-center"> Spotify</div>
      <div className="flex items-center gap-4">
        {isAdmin && (
          <Link to="/admin">
            <LayoutDashboardIcon className="size-4 mr-2" />
          </Link>
        )}
        <SignedIn>
          <SignOutButton />
        </SignedIn>
        <SignedOut>
          <SignInAuthButton />
        </SignedOut>
      </div>
    </div>
  );
}

export default Topbar;
