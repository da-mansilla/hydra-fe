# Etapa 1: Compilar la aplicación Angular
FROM node:18 as build

RUN npm install -g @angular/cli

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración de la aplicación y las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente de la aplicación
COPY src .

# Construye la aplicación Angular para producción
RUN npm run build

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Copia el archivo nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos de la aplicación Angular construida en la imagen Nginx
COPY --from=build /app/dist/hydra-fe /usr/share/nginx/html

# Expone el puerto en el que correrá la aplicación
EXPOSE 80

# Comando para correr Nginx
CMD ["nginx", "-g", "daemon off;"]
