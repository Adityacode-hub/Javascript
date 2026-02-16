def generator():
    yield 1
    yield 2
    yield 3
n=generator();
print(next(n));
print(next(n));
print(next(n));
def iterator():
    num=[10,30,40,5]
    it=iter(num)
    print(next(it))
    print(next(it))
iterator()