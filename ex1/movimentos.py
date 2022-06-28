
text = open('movimentos.txt').readlines()

print('[')
for line in text:
    t = line.split('"')
    l = t[0].split(',')

    if len(t) > 1:
        l.append(t[1])
    
    print('\t{')
    print('\t\t"numero": "' + l[0] + '",')
    print('\t\t"tipo": "' + l[1] + '",')
    print('\t\t"data": "' + l[2] + '",')
    print('\t\t"valor": ' + l[3] + ',')
    print('\t\t"entidade": "' + l[4] + '",')
    print('\t\t"descricao": "' + l[5].strip('\n') + '"')
    print('\t},')

print(']')
