import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image 
          src='/assets/images/logo-rsi.png' width={98} height={38}
          alt="RS Islam Jakarta Sukapura"
          /> 
          <h1 className="h1-justify-center">RSIJ Sukapura</h1>
        </Link>

        
        <SignedIn>
          <nav>
          <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <Button asChild className="rounded-full" size='lg'>
            <Link href="/sign-in">
              Login
            </Link>
          </Button>
        </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header