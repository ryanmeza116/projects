class Bank_account:
    accounts = []
    def __init__(self,int_rate,balance):
        self.int_rate = int_rate
        self.balance = balance
        Bank_account.accounts.append(self)

    def deposit(self,amount):
        self.balance += amount
        print(f"Successful deposit of ${amount}")
        return self

    def withdraw(self,amount):
        if self.balance < amount:
            print(f"Insufficient funds, cannot withdraw ${amount}")
        self.balance -= amount
        return self

    def display_account_info(self):
        print(f'Account balance: {self.balance} -- Account interest rate: {self.int_rate}')
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance = self.balance * self.int_rate
            return self

    @classmethod
    def print_all_accounts(cls):
        for i in cls.accounts:
            i.display_account_info()
# comment has been changed


class User:
    def __init__(self, name):
        self.name = name
        self.account = {
            "checking": Bank_account(.02,0),
            "savings" : Bank_account(.05,0)
        }

    def make_withdrawal_from_checking(self,amount):
        if self.account['checking'].balance < amount:
            print(f"Insufficient funds! Cannot withdraw ${amount}")
        else:
            self.account['checking'].balance -= amount
            print(f"Successful withdrawal of ${amount}")
        print(f"After withdrawal, current balance is ${self.account['checking'].balance}")
        return self
        

    def make_withdrawal_from_savings(self,amount):
        if self.account['savings'].balance < amount:
            print(f"Insufficient funds! Cannot withdraw ${amount}")
        else:
            self.account['savings'].balance -= amount
        print(f"Successful withdrawal of ${amount}")
        print(f"After withdrawal, current balance is ${self.account['savings'].balance}")
        return self

    def deposit_to_checking(self,amount):
        self.account['checking'].balance += amount
        print(f"After deposit, current balance is ${self.account['checking'].balance}")
        return self

    def deposit_to_savings(self,amount):
        self.account['savings'].balance += amount
        print(f"After deposit, current balance is ${self.account['savings'].balance}")
        
        return self

    def display_checking_balance(self):
        print(f"Checking Balance : {self.account['checking'].balance}")
        return self

    def display_checking_savings(self):
        print(f"Checking Balance : {self.account['savings'].balance}")
        return self

'''
    def make_deposit(self,amount):
        self.account_balance += amount
        print(f"Successful deposit for {self.name} of ${amount}")
        print(f"Current balance after deposit: {self.account_balance}")
        return self

    def display_user_balance(self):
        print(f"Current balance for {self.name} is ${self.account_balance}")
        return self

    def transfer_money(self,other_user,amount):
        if self.account_balance < amount:
            print(f"Insufficient funds, cannot transfer ${amount} to {other_user.name}")
        else:
            self.account_balance -= amount
            other_user.account_balance += amount
            print(f"Successful transfer to {other_user.name} for ${amount} from {self.name}'s account")
            print(f"Current balance for {self.name} : {self.account_balance}")
            print(f"Current balance for {other_user.name} : {other_user.account_balance}")
        return self
'''

ryan = User('Ryan')

ryan.account['checking'].deposit(100)




'''
checking = Bank_account(.03,500)
savings = Bank_account(.05,10000)

checking.deposit(100).deposit(10).deposit(50).withdraw(400).yield_interest().display_account_info()
savings.deposit(500).deposit(300).withdraw(100).withdraw(400).withdraw(200).withdraw(50).yield_interest().display_account_info()

Bank_account.print_all_accounts()
'''