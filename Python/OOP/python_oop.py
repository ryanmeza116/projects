class User:
    def __init__(self, name, email) :
        self.name = name
        self.email = email
        self.acount_balance = 0

    def make_deposit(self, amount):
        self.acount_balance += amount
    
    