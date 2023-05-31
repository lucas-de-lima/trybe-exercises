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
