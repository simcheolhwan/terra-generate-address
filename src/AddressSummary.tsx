import { Card, Tag } from "antd"
import { AddressAssets } from "./database"

interface Props {
  bip: number
  address: string
  assets: AddressAssets
}

const AddressSummary = ({ bip, address, assets }: Props) => {
  const { balance, delegations, unbondingDelegations } = assets
  const { vestingSchedules } = assets

  const tags = (
    <p>
      <Tag>{bip}</Tag>
      {!!balance.toData().length && <Tag color="blue">Balance</Tag>}
      {!!delegations.length && <Tag color="blue">Staked</Tag>}
      {!!unbondingDelegations.length && <Tag color="blue">Unbonding</Tag>}
      {vestingSchedules && <Tag color="blue">Vested</Tag>}
    </p>
  )

  return (
    <Card>
      {tags}
      <code>{address}</code>
    </Card>
  )
}

export default AddressSummary
