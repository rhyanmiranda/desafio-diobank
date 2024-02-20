import { DioAccount } from "./dio-account";

export class EmployeeAccount extends DioAccount {
  
  constructor(name: string, accountId: number) {
    super(name, accountId)
  }

  deposit = (value: number): void => {
    let status = this.getStatus()
    let employeeBalance = this.getBalance()
    if(status) {
      employeeBalance += value + 10
    console.log('Depósito para o Funcionário. Saldo = R$' + employeeBalance)
    } else {
      throw new Error('Conta Invalida')
    }
  }
}
