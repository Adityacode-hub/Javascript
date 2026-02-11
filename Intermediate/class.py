class vehicle():
    def __init__(self, make,model):
        self.make=make
        self.model=model
    def start(self):
        return f"{self.model} is from {self.make}"
class car(vehicle):
    def __init__(self, make, model,price):
        super().__init__(make, model) #to inherit from the parent
        self.price=price
    def drive(self):
        return f"{self.make} {self.model} {self.price}"
c=car("TOYOTA","COROLLA",250000)
print(c.price)
print(c.model)
print(c.make)

    