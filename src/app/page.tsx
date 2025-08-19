import Features from "@/components/features";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import { NavBar } from "@/components/navBar";




export default function Page() {
  return (
    <>

      <div className="h-screen ">
        <div className=" lg:pl-30 pl-6 pr-8">
          <NavBar />
          <Hero />
          <Features />
        </div>
        <Footer />
      </div>

    </>
  )
}