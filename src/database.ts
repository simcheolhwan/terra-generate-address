import { atom, selector } from "recoil"
import { Coins, Delegation } from "@terra-money/terra.js"
import { UnbondingDelegation } from "@terra-money/terra.js"
import { LazyGradedVestingAccount } from "@terra-money/terra.js"
import { getMnemonicKeys, validateMnemonic } from "@terra-money/key-utils"

export interface AddressAssets {
  vestingSchedules: LazyGradedVestingAccount.VestingSchedule[] | undefined
  balance: Coins
  delegations: Delegation[]
  unbondingDelegations: UnbondingDelegation[]
}

export const mnemonicState = atom({
  key: "mnemonic",
  default: "",
})

const lcdClientConfig = {
  chainID: "columbus-4",
  URL: "https://lcd.terra.dev",
}

export const mnemonicKeysState = selector({
  key: "mnemonicKeys",
  get: async ({ get }) => {
    const mnemonic = get(mnemonicState)

    if (!validateMnemonic(mnemonic)) throw new Error("Invalid mnemonic")

    const keys = await getMnemonicKeys(mnemonic, lcdClientConfig)

    return [
      {
        bip: 330,
        address: keys[330].mnemonicKey.accAddress,
        assets: keys[330].assets,
      },
      {
        bip: 118,
        address: keys[118].mnemonicKey.accAddress,
        assets: keys[118].assets,
      },
    ]
  },
})
