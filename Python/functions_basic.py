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

def first_plus_length(list):
    return list[0] + len(list)

print(first_plus_length([1,2,3,4,5]))

def values_greater_than_second(list):
    new_list = []
    for i in list:
        if(i > list[1]):
            new_list.append(i)
    print(new_list)
    return new_list

values_greater_than_second([1,2,3,4,5,6,7,8])

def this_length_that_value(size, value):
    new_list = []
    for i in range(size):
        new_list.append(value)
    return new_list

print(this_length_that_value(5,9))








