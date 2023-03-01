def sales_alert(days, tolerance):
    alert_array = []
    for i in range(len(days) -1 ):
        x = days[i] / days[i+1] * 100
        difference = abs(x -100)
        if(difference >= tolerance):
            alert_array.append(i+1)

    return alert_array

print(sales_alert([16,28,29,32,15,20,19,22],15))

# given an integer "n", preform following conditional actions: 
# If n is odd, print "weird"
# if n is even and in the inclusive range of 2 to 5, print "not weird "
# if n is even and in the inclusive range of 6 to 20, print "weird"
# if n is even and greater than 20, print "Not weird"

def weird(n):
    if(n%2 != 0 ): #if number is odd.
        print('Weird')
    elif(n%2 == 0 and n > 2 and n < 5):
        print("Not Weird")
    elif(n%2 == 0 and n>6 and n<20):
        print("Weird")
    elif(n%2 == 0 and n > 20):
        print('Not Weird')


weird(10)









array = [5,10,15,20]
new_array = []
for i in range(len(array) -1 ):
    new_array.append(array[i] + array[i+1])
    print(f"index of {i} : {new_array}")



def number_is_what_percent_of_number(num1,num2):
    answer = num1 / num2 * 100
    difference = abs(answer - 100)
    return f"{num1} is {answer}% of {num2}, a difference of {difference}"
# find the difference. 
    

def what_is_X_percent_of_number(percent, num1):
    answer = percent * num1 / 100
    return f"{percent}% of {num1} is {answer}"

def number_is_X_percent_of_what_number(num1, percent):
    answer = num1 / percent * 100
    return f"{num1} is {percent}% of {answer}"

print(number_is_what_percent_of_number(1000,1115))




