# Exercício 6: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo",
#  caso não seja possível formar um triângulo.

# 🦜 Dica:

#   Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
#   Triângulo Equilátero: três lados iguais;
#   Triângulo Isósceles: quaisquer dois lados iguais;
#   Triângulo Escaleno: três lados diferentes.

def tipo_de_triangulo(lado1, lado2, lado3):
        triangulo_valido = (
            lado1 + lado2 > lado3 and
            lado2 + lado3 > lado1 and
            lado1 + lado3 > lado2
    )
        if not triangulo_valido:
                return 'Não é um triangulo'
        elif lado1 == lado2 == lado3:
                return "equilátero"
        elif lado1 == lado2 or lado2 == lado3 or lado3 == lado1:
                return "isósceles"
        else:
                return "escaleno"
