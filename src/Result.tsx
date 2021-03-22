import { useRecoilValueLoadable } from "recoil"
import { Space, Spin } from "antd"
import { mnemonicKeysState } from "./database"
import AddressSummary from "./AddressSummary"

const Result = () => {
  const loadable = useRecoilValueLoadable(mnemonicKeysState)

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {loadable.state === "hasError" ? (
        <p>{loadable.contents.message}</p>
      ) : loadable.state === "loading" ? (
        <Spin />
      ) : (
        loadable.state === "hasValue" &&
        loadable.contents?.map((item) => (
          <AddressSummary {...item} key={item.bip} />
        ))
      )}
    </Space>
  )
}

export default Result
