a = int(input())
binaryA = ""
q = 0
while q==0:
    q = (a/2)
    print(q)
    a = (a%2)
    binaryA += str(a)
print(binaryA)
