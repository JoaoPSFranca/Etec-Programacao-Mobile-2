drop schema if exists prjProva;

create schema prjProva;

use prjProva;

create table usuario(
	cd_usuario int auto_increment,
	nm_usuario varchar(255),
	ds_email varchar(255),
	nm_senha varchar(255),
	constraint pk_usuario primary key (cd_usuario)	
) auto_increment = 1;

INSERT INTO usuario VALUES(1, "Luiz Alexandre", "luiz.alexandre@hotmail.com", "luiz");
INSERT INTO usuario VALUES(2, "Carlos", "carlos@hotmail.com", "carlos");