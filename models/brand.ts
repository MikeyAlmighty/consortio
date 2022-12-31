export enum IPR {
  PATENT = 'Patent',
  TRADE_SECRET = 'Trade secret',
  TRADEMARK = 'Trademark',
  COPYRIGHT = 'Copyright',
  INVENTION = 'Invention'
}

export type Brand = {
  name: String
  id: String
  origin: String
  active: Boolean
  incorporationDate: Date
  IPR: IPR
}
