create schema proyectoIntegrador;
use proyectoIntegrador;

/*CREAR TABLAS DE LA APP*/

CREATE TABLE usuario(
id INT unsigned primary key auto_increment,
nombre varchar (50) not null,
apellido varchar(50) not null,
email varchar (50) not null,
usuario varchar (50) not null,
contrasenia varchar (50) not null,
fecha_nacimiento date not null,
numero_documento INT UNSIGNED NOT NULL,
foto varchar (100) not null,
createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT current_timestamp);


CREATE TABLE posteo(
id INT unsigned primary key auto_increment,
id_usuarios INT UNSIGNED NOT NULL,
image_name varchar (50) not null,
pie_post varchar (50) not null,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (id_usuarios) REFERENCES usuario(id)
);



CREATE TABLE comentario(
id INT UNSIGNED NOT NULL,
id_usuarios INT UNSIGNED NOT NULL,
id_posteos INT UNSIGNED NOT NULL,
texto_comentario varchar (50) not null,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (id_usuarios) REFERENCES usuario(id),
FOREIGN KEY (id_posteos) REFERENCES posteo(id)
);

/*CREAR DATOS DE LA APP*/

INSERT INTO usuario values (default, 'Zendaya', 'Coleman', 	'zendayac75', 	'1888','1998-08-02',	44232556, 'Zendaya.jpg', default, default, default);
INSERT INTO usuario values (default, 'Noah', 	'Schnapp', 	'nchnapp', 		'2514','1999-10-05',	35676553, '/img/usuarios/jb.png', default, default, default);
INSERT INTO usuario values (default, 'Lady', 	'Gaga', 	'ladygaga56', 	'25689','1988-06-07',	33367114, '/img/usuarios/lady.png', default, default, default);
INSERT INTO usuario values (default, 'Miley', 	'Cyrus', 	'mcyrus', 		'2875','1990-05-08',	34534555, '/img/usuarios/lady.png', default, default, default);
INSERT INTO usuario values (default, 'Adele', 	'Blue', 	'ablue', 		'4563','1988-05-05',	35674663, '/img/usuarios/lady.png', default, default, default);

INSERT INTO posteo  values (default, 1 , '/img/usuarios/mc.png', 'Hola');
INSERT INTO  posteo values (default, 2 , '/img/usuarios/mc.png', 'Hola');
INSERT INTO posteo values (default, 3 , '/img/usuarios/mc.png', 'Hola');
INSERT INTO posteo values (default, 4 , '/img/usuarios/mc.png', 'Hola');
INSERT INTO posteo values (default, 5 , '/img/usuarios/mc.png', 'Hola');
INSERT INTO posteo values (default, 1 , '/img/usuarios/mc.png', 'Hola');
INSERT INTO posteo values (default, 2 , '/img/usuarios/mc.png', 'Hola');
INSERT INTO posteo values (default, 3 , '/img/usuarios/mc.png', 'Hola');
INSERT INTO posteo values (default, 4 , '/img/usuarios/mc.png', 'Hola');
INSERT INTO posteo values (default, 5, '/img/usuarios/mc.png', 'Hola');



INSERT INTO comentario values (default, 1, 1, 'Me gusta tu foto');
INSERT INTO comentario values (default, 1, 1, 'Me gusta tu foto');
INSERT INTO comentario values (default, 1, 1, 'Me gusta tu foto');
INSERT INTO comentario values (default, 1, 1, 'Me gusta tu foto');

