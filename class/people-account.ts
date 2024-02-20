import { DioAccount } from './dio-account'

export class PeopleAccount extends DioAccount {
  cpf: number

  constructor(cpf: number, name: string, accountId: number) {
    super(name, accountId)
    this.cpf = cpf
  }
}