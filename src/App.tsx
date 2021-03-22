import { useRecoilValue } from "recoil"
import { Layout, Typography } from "antd"
import { mnemonicState } from "./database"
import MnemonicForm from "./MnemonicForm"
import Result from "./Result"

const { Header, Content, Footer } = Layout
const { Link } = Typography

const App = () => {
  const mnemonic = useRecoilValue(mnemonicState)

  return (
    <Layout className="layout">
      <Header>
        <h1>Terra Address Generator</h1>
      </Header>

      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <MnemonicForm />
          {mnemonic && <Result />}
        </div>
      </Content>

      <Footer>
        <Link
          type="secondary"
          href="https://github.com/simcheolhwan/terra-address-generator"
        >
          GitHub
        </Link>
      </Footer>
    </Layout>
  )
}

export default App
