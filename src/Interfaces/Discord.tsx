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

export const DiscordAuthMock = {
  id: '251091302303662080',
  username: 'EmperorSR',
  avatar: 'a_a58e3a79b9d27d6935b2fdab97a71b48',
  banner: 'a_fff1131c682c1f4e08a5da02040eba9d',
  locale: 'en-US',
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
