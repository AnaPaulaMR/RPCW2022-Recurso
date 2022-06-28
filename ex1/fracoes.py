
text = open('fracoes.txt').readlines()

print('[')
for line in text:
    l = line.split(',')
    print('\t{')
    print('\t\t"fracao": "' + l[0] + '",')
    print('\t\t"permilhagem": ' + l[1] + ',')
    print('\t\t"mensalidade": ' + l[2].strip('\n'))
    print('\t},')

print(']')
