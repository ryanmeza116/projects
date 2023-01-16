variable_declaration = "this is how you declare variables"
print(variable_declaration)
# Notice the comment difference and the lack of ending syntax ";"

# indentation 
x = 10
if x > 50: 
    print("Larger than 50")
else:
    print("Smaller than 50")

# Only indent on code blocks sych as [def, if, elif, else, for, while, Class]
# Use ":" to delineate the beginning of a code block.

# Data Types : 

boolean = True 
not_boolean = False

number = 35
floating_number = 4.5

string = "Ryan Meza"

# Composite Type: 
# Tuples : Data that is immutable. Can hold group of values. Can hold mixed data types
dog = ('Bruce', "cocker spaniel", 19, False)
print(dog[0]) # output = Bruce
dog[1] = "golden retriever" # output = error : 'tuple' object does not support item assignment. 
tuple_letters = "a", "b", "c", "d", "e"

# built in tuple functions : 
"""

    max(sequence) returns the largest value in the sequence
    sum(sequence) return the sum of all values in sequence
    enumerate(sequence) used in a for-loop context to return two-item-tuple for each item in the sequence indicating the index followed by the value at that index.
    map(function, sequence) applies the function to every item in the sequence you pass in. Returns a list of the results.
    min(sequence) returns the lowest value in a sequence.
    sorted(sequence) returns a sorted sequence


"""

# List : Type of data that IS mutable (can be altered) and can hold group of values. Meant to store a collection of related data : 
empty_list = []
friends = ['Ryan', "Paul", "Tommy"]
print(friends[2])
friends[0] = "Chris"
print(friends)
friends.append("Zach")
friends.pop(2)
print(friends)

# Dictionaries : 
# Group of key value pairs. Indexed by unique keys which are used to accessed respective values. 

empty_dictionary = {}
movie_dictionary = {"Favorite movies" : {
    "First Movie Name" : "Saving Private Ryan",
    "Second Movie Name" : "Rogue One", 
    "Third Movie Name" : "Klaus",
    }}
new_favorite_movie = {'name' : 'Trolls', 'animated' : True, 'funny' : False}
new_favorite_movie['name'] = "Revenge of the Sith"
new_favorite_movie['characters'] = ["Obi-Wan", "Anakin Skywalker"]
print(new_favorite_movie)

updated_dict = new_favorite_movie.pop('animated')  # removes the key, returns the value
del new_favorite_movie['animated'] #deletes the key altogether. 
print(f"{updated_dict}, new fave dict : {new_favorite_movie}")

print(type(updated_dict))
print(type(new_favorite_movie))

# properly nested dictionaries : 

context = {
    'questions' : [
        {'id' : 1, "content" : "Why is there a light in the fridge but not in the freezer? "},
        {'id' : 2, "content" : "Why don\'t sheep shrink when it rains? "}, 
        {'id' : 3, "content" : " Why are they called apartments when they are all stuck together?  "}
    ]
}

# built in dictionary methods : 
# cmp(dic1, dic2) Compares two dictionaries, Begins with length, followed by key names and values.
#  Returns 0 if equal, -1 if dic1 > dic2, 1 if dic1< dic2
# len() returns length of dict
# str() produces string representation of dict 
#type() returns type of passed variable , if dict, returns "dict" 

# More dictionary methods : 

""" 
Python includes the following dictionary methods:
(either dict.method(yourDictionary) or yourDictionary.method() will work)

    .clear() - removes all elements from the dictionary
    .copy() - returns a shallow copy dictionary
    .fromkeys(sequence, [value] ) - create a new dictionary with keys from sequence and values set to value.
    .get(key, default=None) - For key key, returns value or default if key is not in dictionary.
    .items() - returns a list of dictionary's (key, value) tuple pairs.
    .keys() - return a list of dictionary keys.
    .setdefault(key, default=None) - similar to get(), but will set dict[key]=default if key is not already in dictionary.
    .update(dict2) = adds dictionary dict2's key-values pairs to an existing dictionary.
    .values() - returns list of dictionary values.
"""

# For Loops : 

for i in range(5): # range with 1 argument : 5 = ceiling ... everthing underneath. 
    print(i)
    # output : 0,1,2,3,4

for i in range(5,10): # range with 2 arguments. 5 = start index, 10 = ceiling. 
    print(i)
    # output : 5,6,7,8,9

for i in range(5,10,2): # range with 3 arguments. 5 = start, 10 = ceiling, 2 = step.
    print(i)
    # output 5,7,9

# Loops can also be used through strings : 
for x in "Hello":
    print(x)

# loops through lists : 
my_list = ["abc", 123, "Hello"]
for i in range(0, len(my_list)):
    print(i, my_list[i])

    # or : 

for v in my_list:
        print(v)

# for loops in dicts 

dict = {"name" : "Ryan", "weight" : 260}
for k in dict:
    print(k) # only returns the KEYS ... not the pair. 
    # to access values : 
    print(dict[k])

# Additional dict methods : 

capitals = {"Washington":"Olympia","California":"Sacramento","Idaho":"Boise","Illinois":"Springfield","Texas":"Austin","Oklahoma":"Oklahoma City","Virginia":"Richmond"}
# another way to iterate through the keys
for key in capitals.keys():
    print(key)
# output: Washington, California, Idaho, Illinois, Texas, Oklahoma, Virginia
#to iterate through the values
for val in capitals.values():
    print(val)
# output: Olympia, Sacramento, Boise, Springfield, Austin, Oklahoma City, Richmond
#to iterate through both keys and values
for key, val in capitals.items():
    print(key, " = ", val)
# output: Washington = Olympia, California = Sacramento, Idaho = Boise, etc

