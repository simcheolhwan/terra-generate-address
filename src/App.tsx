import { useRecoilValue } from "recoil"
import { Layout } from "antd"
import { mnemonicState } from "./database"
import MnemonicForm from "./MnemonicForm"
import Result from "./Result"

const { Header, Content } = Layout

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
    </Layout>
  )
}

export default App
