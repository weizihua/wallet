import Address from './Address'
import Funds from './Funds'
import Mnemonic from './Mnemonic'
import { DenomTag, NumberInput, RawNumberInput } from './Number'
import Text from './Text'
import PrivateKey from './PrivateKey'
import BaseInput from './BaseInput'

export default {
  Address,
  Funds,
  Mnemonic,
  Number: NumberInput,
  RawNumberInput,
  Text,
  PrivateKey,
  DenomTag,
  Base: BaseInput
}
