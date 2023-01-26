# Blackjack or 21
print("Welcome to Blackjack!")
import random
dealer_cards = []
player_cards = []

while len(dealer_cards) != 2:
    dealer_cards.append(random.randint(1,11))
    if len(dealer_cards) == 2: 
        print('Dealer has X and', dealer_cards[1])

while len(player_cards) != 2:
    player_cards.append(random.randint(1,11))
    if len(player_cards) == 2:
        print("You have ", player_cards)

if sum(dealer_cards) == 21:
    print("Dealer has 21 and wins the game!")
elif sum(dealer_cards) > 21:
    print("Dealer has busted. You Win!")

while sum(player_cards) < 21:
    action_taken = str(input("Do you want to stay or hit? "))
    if action_taken == "hit":
        player_cards.append(random.randint(1,11))
        print("You now have a total of " + str(sum(player_cards)) + "from these cards ", player_cards)
    else:
        print("The Dealer has a total of " + str(sum(dealer_cards)) + "with", dealer_cards)
        print("You have a total of " + str(sum(player_cards)) + "with ", player_cards)
        if sum(dealer_cards) > sum(player_cards):
            print("Dealer Wins")

        else:
            print("You Win!")
            break

if sum(player_cards) > 21:
    print("You BUSTED! Dealer wins! ")
elif sum(player_cards) == 21:
    print("You have BlackJack! You Win!")
