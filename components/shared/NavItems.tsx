'use client'

import { headerLinks } from "@/constant"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const NavItems = () => {
  const pathname = usePathname()
  return (
    <div className="md: flex-row flex w-full gap-5">
        {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return(
          <div 
          key={link.route}
            className={`${
              isActive && 'text-primary-500'
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </div>
        )
      })}
    </div>
  )
}
export default NavItems