# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres.
# Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".

# 🦜 Uma dica: Utilize a função len() para verificar o tamanho do nome.

def print_maior_nome(arrayNomes):
    maior_nome = arrayNomes[0]
    for nome in arrayNomes:
        if len(nome) > len(maior_nome):
            maior_nome = nome
    return maior_nome