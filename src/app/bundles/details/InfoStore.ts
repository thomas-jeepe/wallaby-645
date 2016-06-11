import { observable, computed, transaction, action } from 'mobx'

export class Details {
  @observable data: any
  @observable error: string = '' 
  @observable loading: boolean = false
  
  @computed get text(): string {
    if(this.error) {
      return this.error
    }
    let { Email = null, Address = null, Company = null, Name = null, Phone = null } = this.data || {}
    return [Name, Address, Email, Phone]
        .filter(v => v != null)
        .join(' · ')
  }
  
  @action getDetails = (id: string): void => {
    // shhhhhh
  }
}

export default new Details()