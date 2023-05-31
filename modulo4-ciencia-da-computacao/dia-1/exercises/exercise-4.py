def print_maior_nome(arrayNomes):
    maior_nome = arrayNomes[0]
    for nome in arrayNomes:
        if len(nome) > len(maior_nome):
            maior_nome = nome
    return maior_nome