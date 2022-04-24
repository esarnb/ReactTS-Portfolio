export interface userObj {
  id: string,
  username: string,
  avatar: string,
  discriminator: string,
  public_flags: number,
  flags: number,
  banner: string,
  banner_color: string,
  accent_color: number,
  locale: string,
  mfa_enabled: boolean,
  premium_type: number
}

export enum DiscordActionEnum {
  setCode = "SETCODE",
  clearCode = "CLEARCODE"
}

export interface DiscordActionI {
  type: DiscordActionEnum,
  payload: string
}

export interface DiscordAuthState {
  code: string | null
}

export function DiscordReducer(state: DiscordAuthState, action: DiscordActionI) {
  const {type, payload} = action;
  switch (type) {
    case DiscordActionEnum.setCode:
      return {
        ...state, value: payload 
      }

    case DiscordActionEnum.clearCode:
      return {
        ...state, value: null 
      }

    default: return state;

  }
}


// export interface command {
//   help: {
//     desc: string,
//     guild: boolean,
//     locked: boolean,
//     name: string,
//     owner: boolean,
//     type: string,
//     usage: string,
//   }
// }

export interface botData {
  user: any, // discord User Object
  users: number,
  servers: number,
  commands: any // command Object
}
