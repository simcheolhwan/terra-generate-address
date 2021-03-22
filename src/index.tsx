import { render } from "react-dom"
import { RecoilRoot } from "recoil"
import "./index.scss"
import App from "./App"

render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("root")
)
