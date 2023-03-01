# Asssume we want two bank accounts : Retirement and Checking. 
# We could make them like this with their own attributes and methods: 

class BankAccount:
    def __init__(self, int_rate, balance=0):
        self.int_rate = int_rate
        self.balance = balance

class CheckingAccount:
    def __init__(self, int_rate, balance=0):
        self.int_rate = int_rate
        self.balance = balance
    def deposit(self, amount):
        pass
    def withdraw(self, amount):
        pass
    def write_check(self, amount):
        pass
    def display_account_info(self):
        pass

class RetirementAccount:
    def __init__(self, int_rate, is_roth, balance=0):
        self.int_rate = int_rate
        self.balance = balance
        self.is_roth = is_roth
    def deposit(self, amount):
        pass
    def withdraw(self, amount):
        pass
    def display_account_info(self):
        pass

# But, The retirement account is almost identical to the checking account, minus the "is_roth" attribute.
# another way to create two classes is with inheritance. 

class NewRetirementAccount(BankAccount):
    def __init__(self, int_rate, is_roth, balance = 0):
        super().__init__(int_rate, balance)	
        self.is_roth = is_roth	

# by including "super()", we are allowing the parent class of BankAccount to manage the given attributes in our init function. 