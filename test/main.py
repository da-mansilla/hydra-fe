import os
import random
import string

# Función para generar contenido aleatorio
def generar_contenido_aleatorio(tamano_en_mb=5):
    tamano_en_bytes = tamano_en_mb * 1024 * 1024  # Convertir MB a bytes
    letras = string.ascii_letters + string.digits + string.punctuation + ' '  # Incluye espacios
    return ''.join(random.choice(letras) for _ in range(tamano_en_bytes))

# Crear carpeta
carpeta = 'documentos_aleatorios'
if not os.path.exists(carpeta):
    os.makedirs(carpeta)

# Crear 50 documentos con contenido aleatorio de 5 MB
for i in range(1, 51):
    nombre_archivo = f'documento_{i}.txt'
    ruta_archivo = os.path.join(carpeta, nombre_archivo)
    with open(ruta_archivo, 'w') as archivo:
        contenido = generar_contenido_aleatorio()
        archivo.write(contenido)

print(f"Se han creado 50 documentos de aproximadamente 5 MB en la carpeta '{carpeta}'.")