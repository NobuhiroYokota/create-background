import { BrowserRouter, Routes,Route } from "react-router-dom"
import { Home } from "./components/Home"
import { Output } from "./components/Output"
import { FormProvider } from "./components/FormProvider"

export default function App() {

  return (
  <>
  <FormProvider>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/Output" element={<Output />}/>
    </Routes>
    </BrowserRouter>
  </FormProvider>

  </>
  )
}
