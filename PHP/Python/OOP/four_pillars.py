# OOP is used in web development to be more efficient and write less code. 
# To achieve better code, there are four pillars of OOP : 

#  1 : 
# Encapsulation
class CoffeeM:
    def __init__(self,name):
        self.name = name
        self.water_temp = 200
    def brew_now(self,beans):
        print(f"Using {beans}!")
        print("Brew now brown cow!")
    def clean(self):
        print("Cleaning!")

# Encapsulation is when we add attributes and methods to objects. 

# 2 : 
# Inheritance : 

class CappuccinoM( CoffeeM ):
    def __init__(self,name):
        super().__init__(name)
        self.milk = "whole"
    def make_cappuccino(self,beans):
        super().brew_now(beans)
        print("Frothy!!!")

# Inheritance is the idea that we pass along attributes 
# and methods from one class into a "sub-class" 
# or child class, and not have to re-write the code to make it work.  
# Child classes can be more specific versions of their Parent class.  
# Using the key word "super" will call methods

# 3 : 
# Polymorphism 

class CappuccinoM( CoffeeM ):
    def __init__(self,name):
        super().__init__(name)
        self.milk = "whole"
    def make_cappuccino(self,beans):
        super().brew_now(beans)
        print("Frothy!!!")
    def clean(self):
        print("Cleaning the froth!")

"""
Polymorphism means "many forms", and the idea in OOP is that a 
Child class can have a different version of a method than the Parent class. 
In this example the child class of CappuccinoM has a clean method, 
and so does CoffeeM. Depending on the class, the clean method will do different things.
"""

# 4: 
# Abstraction 

class Barista:
    def __init__(self,name):
        self.name = name
        self.cafe = CoffeeM("Cafe")
    def make_coffee(self):
        self.cafe.brew_now()

"""
Abstraction is an extension of Encapsulation, 
and we can hide attributes or methods that a Barista doesn't need to know about, like a CoffeeM. 
That way the Barista can make a cup of coffee in a simpler manner.
"""
