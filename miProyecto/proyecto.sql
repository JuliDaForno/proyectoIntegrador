create schema proyectoIntegrador;
use proyectoIntegrador;

/*CREAR TABLAS DE LA APP*/

CREATE TABLE usuario(
id INT unsigned primary key auto_increment,
nombre varchar (50) not null,
apellido varchar(50) not null,
email varchar (50) not null,
usuario varchar (50) not null,
contrasenia varchar (150) not null,
fecha_nacimiento date not null,
numero_documento INT UNSIGNED NOT NULL,
foto varchar (100) not null,
createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

);


CREATE TABLE posteo(
id INT unsigned primary key auto_increment,
id_usuarios INT UNSIGNED NOT NULL,
image_name varchar (50) not null,
pie_post varchar (50) not null,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (id_usuarios) REFERENCES usuario(id)
);



CREATE TABLE comentario(
id INT UNSIGNED NOT NULL primary key auto_increment,
id_usuarios INT UNSIGNED NOT NULL,
id_posteos INT UNSIGNED NOT NULL,
texto_comentario varchar (50) not null,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (id_usuarios) REFERENCES usuario(id),
FOREIGN KEY (id_posteos) REFERENCES posteo(id)
);

CREATE TABLE seguidores(
id INT UNSIGNED NOT NULL primary key auto_increment,
id_seguido INT UNSIGNED NOT NULL,
id_seguidor INT UNSIGNED NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (id_seguido) REFERENCES usuario(id),
FOREIGN KEY (id_seguidor) REFERENCES usuario(id)
);

/*CREAR DATOS DE LA APP*/

INSERT INTO usuario values (default, 'Zendaya', 'Coleman','zendayac75@gmail.com', 	'zendayac75', 	'1888','1998-08-02',	44232556, 'fotoPerfilZendaya.jpg', default, default);
INSERT INTO usuario values (default, 'Noah', 	'Schnapp', 	'nschnapp@gmail.com', 	'nchnapp',	'2514','1999-10-05',	35676553, 'posteo2Noah.jpeg', default, default);
INSERT INTO usuario values (default, 'Lady', 	'Gaga', 'ladygaga56@gmail.com', 'ladygaga56',	'25689','1988-06-07',	33367114, 'ladygagaFotoperfil.jpg', default, default);
INSERT INTO usuario values (default, 'Miley', 	'Cyrus', 'mcyrus@gmail.com', 	'mcyrus'	,	'2875','1990-05-08',	34534555, 'mileyfotoPerfil.jpg', default, default);
INSERT INTO usuario values (default, 'Adele', 	'Blue', 'ablue@gmail.com', 'ablue'	,	'4563','1988-05-05',	35674663, 'adeleFotoPerfil.jpg', default, default);

INSERT INTO posteo values (default, 1 , 'posteoZendaya.jpg', 'Zendaya', default, default);
INSERT INTO posteo values (default, 2 , 'posteo1Noah.jpg', 'Noah', default, default);
INSERT INTO posteo values (default, 3 , 'ladygagaposteo1.jpg', 'LadyGaga', default, default);
INSERT INTO posteo values (default, 4 , 'mileyposteo1.jpg', 'Miley', default, default);
INSERT INTO posteo values (default, 5 , 'adeleposteo1jpg', 'Adele', default, default);
INSERT INTO posteo values (default, 1 , 'posteo2Zendaya.jpg', 'Zendaya', default, default);
INSERT INTO posteo values (default, 2 , 'poseteNoah.jpg', 'Noah', default, default);
INSERT INTO posteo values (default, 3 , 'ladygagaposteo2.jpg', 'LadyGaga', default, default);
INSERT INTO posteo values (default, 4 , 'mileyposteo2.jpg', 'Miley', default, default);
INSERT INTO posteo values (default, 5, 'adeleposteo2.jpg', 'Adele', default, default);



INSERT INTO comentario values (default, 1, 9, 'Me gusta tu foto', default, default);
INSERT INTO comentario values (default, 2, 3, 'Me gusta tu foto', default, default);
INSERT INTO comentario values (default, 5, 6, 'Me gusta tu foto', default, default);
INSERT INTO comentario values (default, 3, 4, 'Me gusta tu foto', default, default);
INSERT INTO comentario values (default, 1, 2, 'Me gusta tu foto', default, default);
INSERT INTO comentario values (default, 4, 8, 'Me gusta tu foto', default, default);

INSERT INTO seguidores values (default, 1, 2, default, default);
INSERT INTO seguidores values (default, 2, 1, default, default);
INSERT INTO seguidores values (default, 1, 3, default, default);