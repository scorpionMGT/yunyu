import AES from 'crypto-js/aes'
import ENC from 'crypto-js/enc-utf8'

const KEY = 'yunyu'

export const EncryptFunc = (payload: any, key: string = KEY) => {
  return AES.encrypt(JSON.stringify(payload), key).toString()
}

export const DecryptFunc = (payload: any, key: string = KEY) => {
  const bytes = AES.decrypt(payload, key)
  const result = JSON.parse(bytes.toString(ENC))
  return result
}

export default {
  EncryptFunc,
  DecryptFunc,
}
