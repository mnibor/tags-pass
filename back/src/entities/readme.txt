usuarios:
{
username
email
password
status
created_at
updated_at
  profile: {
      nombre y apellido
      avatar
      direccion
      localidad
      biografia
  }
}

categoria_bookmarks:
nombre

etiquetas_bookmarks:
nombre

bookmarks:
categoria_bookmarks
titulo
link
descripcion
etiquetas_bookmarks



passords:


categoria_password ("Aplicaciones", "Correos", "Paginas Random" "Sensibles" "Privados")

[aplicaciones]
aplicación
correo electrónico
usuario
contraseña
comentarios

[correos - paginas web]
pagina web
correo electrónico
correo electrónico de respaldo
contraseña
comentarios

[aplicaciones de pago - bancos]
entidad
correo electrónico
usuario
contraseña
pin de acceso
comentarios




Tabla aplicaciones
id: Identificador único de la entrada.

user_id: Identificador del usuario al que pertenece la entrada (clave foránea que referencia a la tabla de usuarios).

aplicacion: Nombre de la aplicación.

correo_electronico: Correo electrónico asociado a la aplicación.

usuario: Nombre de usuario para la aplicación.

contraseña: Contraseña cifrada.

comentarios: Notas adicionales o información relevante.

created_at: Fecha de creación de la entrada.

updated_at: Fecha de última actualización de la entrada.

Tabla correos_paginas_web
id: Identificador único de la entrada.

user_id: Identificador del usuario al que pertenece la entrada (clave foránea que referencia a la tabla de usuarios).

pagina_web: URL de la página web.

correo_electronico: Correo electrónico principal asociado a la cuenta.

correo_electronico_respaldo: Correo electrónico de respaldo.

contraseña: Contraseña cifrada.

comentarios: Notas adicionales o información relevante.

created_at: Fecha de creación de la entrada.

updated_at: Fecha de última actualización de la entrada.

Tabla aplicaciones_pago_bancos
id: Identificador único de la entrada.

user_id: Identificador del usuario al que pertenece la entrada (clave foránea que referencia a la tabla de usuarios).

entidad: Nombre de la entidad bancaria o servicio de pago.

correo_electronico: Correo electrónico asociado a la cuenta.

usuario: Nombre de usuario para la aplicación.

contraseña: Contraseña cifrada.

pin_de_acceso: PIN de acceso cifrado.

comentarios: Notas adicionales o información relevante.

created_at: Fecha de creación de la entrada.

updated_at: Fecha de última actualización de la entrada.

Tabla usuarios
id: Identificador único del usuario.

username: Nombre de usuario.

email: Dirección de correo electrónico.

password: Contraseña hasheada y salada.

created_at: Fecha de creación de la cuenta.

updated_at: Fecha de última actualización de la cuenta.