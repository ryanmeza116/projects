def countdown(input):
    new_list = []
    for i in range(input, -1, -1):
        new_list.append(i)
    return new_list
print(countdown(10))

def print_and_return(list):
    print(list[0])
    return list[1]

print(print_and_return([1,2]))



