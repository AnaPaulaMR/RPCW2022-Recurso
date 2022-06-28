
text = open('pagamentos.txt').readlines()

print('[')
for line in text:
    t = line.split('"')
    l = t[0].split(',')

    if len(t) > 1:
        l.append(t[1])
    
    print('\t{')
    print('\t\t"fracao": "' + l[0] + '",')
    print('\t\t"jan": ' + l[1] + '0,')
    print('\t\t"fev": ' + l[2] + '0,')
    print('\t\t"mar": ' + l[3] + '0,')
    print('\t\t"abr": ' + l[4] + '0,')
    print('\t\t"mai": ' + l[5] + '0,')
    print('\t\t"jun": ' + l[6] + '0,')
    print('\t\t"jul": ' + l[7] + '0,')
    print('\t\t"ago": ' + l[8] + '0,')
    print('\t\t"set": ' + l[9] + '0,')
    print('\t\t"out": ' + l[10] + '0,')
    print('\t\t"nov": ' + l[11] + '0,')
    print('\t\t"dez": ' + l[12].strip('\n') + '0')
    print('\t},')

print(']')
