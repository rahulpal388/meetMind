'use client'
import { MoveRight, MoveUpRight } from "lucide-react";
import { useRouter } from "next/navigation";


export function Hero() {
    const router = useRouter()

    return (
        <>
            <div className="h-screen flex flex-col items-center justify-center  ">
                <div className="flex items-center flex-col">
                    <h1 className="sm:text-6xl text-5xl font-semibold text-center ">Never Write Meeting Notes Again</h1>
                    <p className="mt-8 sm:text-xl text-lg max-w-2xl text-center ">Your AI assistant records, summarizes, and extracts action items — so your team stays focused, not buried in notes</p>
                </div>
                <div className="flex items-center sm:gap-20 gap-12  mt-10">
                    <div className="relative">
                        <button className=" hover:shadow-xl  rounded-2xl border border-neutral-600 md:py-2 py-1  text-sm md:px-4 px-2 shadow-lg md:text-lg flex gap-2 items-center cursor-pointer "

                            onClick={() => { router.push("/extension") }}

                        >
                            Try now
                            <MoveRight className="size-6 stroke-1 " />
                        </button>
                        <div className="absolute -bottom-0  h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent "></div>
                    </div>
                    <div>
                        <button className="rounded-xl py-2 text-lg px-4  bg-btn-background  cursor-pointer ">Get Start</button>
                    </div>
                </div>

            </div>
        </>
    )
}