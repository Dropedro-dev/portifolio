import { Logo } from "@/components/logo/logo";
import {ButtonMenu} from "@/components/nav/buttonMenu"
const Page = () => {
  return (
    <main className='w-screen mt-3'>
      <header className="max-w-2xl mx-auto flex justify-between items-center bg-transparent">
        <div className="ml-3">
          <Logo  />
        </div> 
        <div className="flex lg:hidden items-center">
          <ButtonMenu />
        </div>  
      </header>
    </main>
  )
}

export default Page;