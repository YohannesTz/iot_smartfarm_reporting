import { Flowbite } from "flowbite-react";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <Flowbite>
      <div className="flex flex-col h-screen mx-10">
        <NavbarComponent />
        <div className="px-4 lg:m-2 md:px-8 flex-1">
          <Outlet />
        </div>
        <FooterComponent />
      </div>
    </Flowbite>
  )
}

export default App
