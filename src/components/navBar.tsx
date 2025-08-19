import { navItems } from "@/constant/navItems"
import { AlignJustify } from "lucide-react"
import Image from "next/image"


export function NavBar() {

    return (
        <>
            <div className=" py-4 flex items-center justify-between ">
                <div>
                    <Image src="/meetmind-logo.png" alt="logo" width={150} height={150} ></Image>

                </div>
                <div className="hidden lg:flex items-center gap-7  ">
                    {navItems.map((item, i) => (
                        <h1 key={i}>{item}</h1>
                    ))}
                </div>
                <div className="hidden lg:flex items-center gap-6">
                    <h1>Login</h1>
                    <button className="rounded py-1 px-4 bg-btn-background ">SignUp for free</button>
                </div>
                <div className="lg:hidden">
                    <AlignJustify className="size-10" />
                </div>
            </div>

        </>
    )
}