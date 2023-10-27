import { BOX_STATUS } from "./constants"

export interface KeyInfo {
  key: string
  isPressed: boolean
}

export interface BoxInfo {
  key: string
  status: BOX_STATUS
}

export interface Time {
  h?: number
  m?: number
  s?: number
}
