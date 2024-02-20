import { PeopleAccount } from './class/people-account'
import { CompanyAccount } from './class/company-account'
import { EmployeeAccount } from './class/employee-account'

const peopleAccount = new PeopleAccount(777, 'rhz', 1)
peopleAccount.deposit(40)
peopleAccount.withdraw(10)

const companyAccount = new CompanyAccount(9090, 'Empresa', 2)
console.log(companyAccount.getLoan(80))

const employeeAccount = new EmployeeAccount('funcionario', 9)
employeeAccount.deposit(50)


