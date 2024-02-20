export abstract class DioAccount {
  readonly name: string
  readonly accountId: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountId: number) {
    this.name = name
    this.accountId = accountId
  }     


// GETTERS
  public getName = (): string => {
    return this.name
  }

  public getBalance = (): number => {
    return this.balance 
  }

  public getStatus = (): boolean =>{
    return this.status
  } 


  deposit = (value: number): void => {
    if(this.validateStatus()) {
      this.balance += value
    console.log('Depósito realizado com sucesso. Saldo = R$' + this.balance)
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.balance > value) {
      this.balance -= value
    console.log('Saque realizado com sucesso. Saldo = R$' + this.balance) 
    } else {
      throw new Error('Conta Inválida ou Saldo Insuficiente')
    }
  }

  private validateStatus = (): boolean => {
    if (this.status){
      return this.status
    }else{
      throw new Error('Conta inválida')
    }
  }
}