
class Card:
    def __init__(self, suit, number):
        self._suit = suit
        self._number = number
    def __repr__(self):
        return self.number + " of " + self.suit
    @property
    def suit(self):
        return self._suit
    @property
    def number(self):
        return self._number
    @suit.setter
    def suit(self, suit):
        if suit in ["hearts", "clubs", "diamonds", "spades"]:
            self._suit = suit
        else:
            print("Invalid Suit")
    @number.setter
    def number(self, number):
        if number in ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"]:
            self._number = number
        else:
            print("Invalid Face Value")
