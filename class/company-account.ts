import { DioAccount } from "./dio-account"

export class CompanyAccount extends DioAccount {
  private cnpj: number

  constructor(cnpj: number, name: string, accountId: number){
    super(name, accountId)
    this.cnpj = cnpj
  }

  getLoan = (value: number): void => {
    let status = this.getStatus()
    if(status){
      let balanceCompany = this.getBalance() 
      balanceCompany += value
      console.log('Empréstimo solicitado com sucesso. Saldo = R$ ' + balanceCompany)
    }else {
      throw new Error ('Conta Inválida')
    }
  }
}