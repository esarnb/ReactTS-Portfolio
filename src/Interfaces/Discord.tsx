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
  setData = "SETDATA",
  clearData = "CLEARDATA"
}

export interface DiscordActionI {
  type: DiscordActionEnum,
  payload: DiscordAuthStateType
}

export interface DiscordAuthStateType {
  id: string | null,
  username: string | null,
  avatar: string | null,
  banner: string | null,
  locale: string | null,
}

export const DiscordAuthInitial = {
  id: null,
  username: null,
  avatar: null,
  banner: null,
  locale: null,
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
