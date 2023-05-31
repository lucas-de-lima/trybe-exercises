# 🚀 Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

def main(numeros):
    total = 0
    for numero in numeros:
        total += numero
    return total / len(numeros)

