"use client"

import { Button } from "@/components/ui/button"
import { UserCircleIcon } from "lucide-react"

import { UserButton, SignInButton, SignedOut, SignedIn } from "@clerk/nextjs"

export const AuthButton = () => {
  // TODO : Add different auth state
  return (
    <>
      <SignedIn>
        <UserButton />
        {/* Add Menu items for strudio and profile  */}
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none"
          >
            <UserCircleIcon />
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  )
}
