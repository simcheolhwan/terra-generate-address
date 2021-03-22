import { useSetRecoilState } from "recoil"
import { Button, Form, Input } from "antd"
import { mnemonicState } from "./database"

const PLACEHOLDER =
  "notice oak worry limit wrap speak medal online prefer cluster roof addict wrist behave treat actual wasp year salad speed social layer crew genius"

const MnemonicForm = () => {
  const setMnemonic = useSetRecoilState(mnemonicState)

  return (
    <Form
      onFinish={({ mnemonic }) => setMnemonic(mnemonic)}
      layout="vertical"
      size="large"
    >
      <Form.Item label="Mnemonic" name="mnemonic" rules={[{ required: true }]}>
        <Input.TextArea placeholder={PLACEHOLDER} />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" type="primary">
          Generate
        </Button>
      </Form.Item>
    </Form>
  )
}

export default MnemonicForm
