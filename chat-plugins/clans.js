exports.commands = {
	/*********************************************************
	 * Comandos de Clanes
	 *********************************************************/

	ayudaclan: 'clanshelp',
	clanhelp: 'clanshelp',
	clanshelp: function () {
		if (!this.canBroadcast()) return false;
		this.sendReplyBox(
		    "<hr>" +
		    "<center><big><b>Sistema de clanes de Pokémon Hispano</font></b></big></center>" +
			"<center><font color=green>Introducción al sistema de clanes del servidor</font></center>" +
			"<br><li><strong>¿Cómo registrar un clan?</strong>: <a href=\"https://www.agregarlinkdelforo.com\">Registro de clanes</a><br />" +
			"<li><strong>Reglas a cumplir</strong>: <a href=\"https://www.agregarlinkdelforo.com\">Reglamento de clanes</a>" +
			"<center><br><i>En caso de tener alguna duda contactar al staff de clanes:</i></br></center>" +
			"<center><i>Para más información acerca de cómo funcionan los clanes, leer el listado de comandos</i></br></center>" +
            "<hr>" +
			"<center><big><b>Comandos Generales</b></big></center>" +
			"<br><li><strong>/clanes</strong> - Lista los clanes registrados.</li></b>" +
			"<li><strong>/clan</strong> <i>[clan]</i> - Muestra la ficha de un clan.</li>" +
			"<li><strong>/miembrosclan</strong> <i>[clan]</i> - Muestra los miembros con los que cuenta un clan.</li>" +
			"<li><strong>/clanauth</strong> <i>[clan]</i> - Muestra la jerarquía de miembros de un clan.</li>" +
			"<li><strong>/warlog</strong> <i>[clan]</i> - Muestra las 10 últimas wars de un clan.</li>" +
			"<li><strong>/aceptarclan</strong> <i>[clan]</i> - Acepta una invitación al clan.</li>" +
			"<li><strong>/abandonarclan</strong> - Abandona el clan.</li>" +
			"<br /><hr>" +
			"<center><big><b>Comandos Administrativos</b></big></center>" +
			"<center><font color=green>Requieren ser al menos Oficial del clan</font></center>" +
			"<br><li><strong>/subliderclan</strong> <i>[miembro]</i> - Nombra a un miembro sub-líder del clan. Requiere: líder de clan.<br />" +
			"<li><strong>/oficialclan</strong></b> <i>[miembro]</i> - Nombra a un miembro oficial del clan. Requiere: sub-líder de clan.<br />" +
			"<li><strong>/degradarclan</strong></b> <i>[miembro]</i> - Borra a un miembro del staff del clan. Requiere: líder de clan.<br />" +
			"<li><strong>/invitarclan</strong></b> <i>[miembro]</i> - Invita a un usuario a unirse al clan.<br />" +
			"<li><strong>/expulsarclan</strong></b> <i>[miembro]</i> - Expulsa a un miembro del clan. Requiere: sub-líder de clan.<br />" +
			"<li><strong>/solicitudesclan</strong></b> - Muestra las solicitudes de ingreso al clan.</li>" +
			"<li><strong>/cerrarsalaclan</strong></b> - Bloquea la sala del clan a todos aquellos que no sean miembros. Requiere: sub-líder de clan.<br />" +
			"<li><strong>/abrirsalaclan</strong></b> - Reabre la sala del clan a todos aquellos que no sean miembros. Requiere: sub-líder de clan.<br />" +
			"<li><strong>/llamarmiembros</strong></b> - Reúne a los miembros conectados del clan en su sala. Requiere: oficial de clan.<br />" +
			"<br /><hr>"
		);
	},
	
	clanadmin: function () {
        if (!this.canBroadcast()) return;
        this.sendReplyBox(
		    "<hr>" +
            "<center><big><b>Comandos de Administración</b></big></center>" +
			"<center><font color=green>Información de los comandos para la creación de clanes</font></center>" +
			"<b>Notas:</b>" +
			"<br><font color=red><b>*</b></font> El Staff solo tiene permitido crear clanes de usuarios que hayan pedido un registro.</br>" +
			"<br><font color=red><b>*</b></font> Al momento de registrar un clan se agrega su abreviatura y posteriormente se agrega el nombre completo del clan con /settituloclan." +
			"<br>" +
			"<br><li><strong>/crearclan</strong> <i>[nombre]</i> - Crea un clan.<br />" +
			"<li><strong>/borrarclan</strong> <i>[nombre]</i> - Elimina un clan.<br />" +
			"<li><strong>/liderclan</strong> <i>[usuario, clan]</i> - Nombra a un miembro líder del clan.<br />" +
			"<li><strong>/añadirmiembro</strong> <i>[clan, usuario]</i> - Fuerza a un usuario a unirse a un clan.<br />" +
			"<li><strong>/removermiembro</strong> <i>[clan, usuario]</i> - Expulsa a un usuario del clan.<br />" +
			"<li><strong>/setlemaclan</strong> <i>[clan, lema]</i> - Establece un lema para un clan.<br />" +
			"<li><strong>/setlogoclan</strong> <i>[clan, logo]</i> - Establece un logotipo para un clan.<br />" +
			"<li><strong>/setsalaclan</strong> <i>[clan, sala]</i> - Establece una sala para un clan.<br />" +
			"<li><strong>/setgxeclan</strong> <i>[clan, ganadas, perdidas, empates]</i> - Establece la puntuación de un clan.<br />" +
			"<li><strong>/serankclan</strong> <i>[clan, puntos]</i> - Establece la puntuación de un clan.<br />" +
			"<li><strong>/settituloclan</strong> <i>[clan, nombre]</i> - Estable un nuevo título para el clan.<br />" +
            "<br><hr>" +
			"<center><big><b>Guerras entre clanes</b></big></center>" +
			"<center><font color=green>Información de los comandos para la organización de guerras</font></center>" +
			"<br><li><strong>/war new</strong> <i>[standard/total], [tier/multitier], [tamaño], [clanA], [clanB]</i> - Crea una guerra.</li>" +
			'<li><strong>/war new</strong> <i>[lineups], [tier/multitier], [tamaño], [clanA], [clanB], [capitanA], [capitanB]</i> - Crea una guerra con alinaciones fijas.</li>' +
			"<li><strong>/war end</strong> - Finaliza una guerra en curso." +
			"<li><strong>/war join</strong> - Comando para unirse." +
			"<li><strong>/war leave</strong> - Comando para salir." +
			"<li><strong>/war</strong> - Muestra el estado de la guerra.</li>" +
			"<li><strong>/war dq</strong> <i>[usuario]</i> - Comando para descalificar.</li>" +
			"<li><strong>/war replace</strong> <i>[usuario1], [usuario2]</i> - Comando para reemplazar.</li>" +
			"<li><strong>/war invalidate</strong> <i>[participante]</i> - Comando para invalidar una batalla o un resultado.</li>" +
			"<li><strong>/war size</strong> <i>[Jugadores por team]</i> - Cambia el tamaño de la guerra.</li>" +
			"<li><strong>/war auth</strong> <i>[Capitan1], [Capitan2]</i> - Establece los capitanes de los clanes.</li>" +
		    "<li><strong>/war reg</strong> <i>[P1], [P2]...</i> - Comando para registrar alineaciones, solo usable por los capitanes.</li>" +
			"<li><strong>/war start</strong> - Inicia una guerra una vez registradas las alineaciones.</li>" +
		    "<li><strong>/war search</strong> - Muestra las guerras en curso del servidor.</li>" +
			"<br><hr>"
			);
    },
	
	crearclan: function (target) {
		if (!this.can('clans')) return false;
		if (target.length < 2)
			this.sendReply("El nombre del clan es demasiado corto.");
		else if (!Clans.createClan(target))
			this.sendReply("No se pudo crear el clan. Es posible que ya exista otro con el mismo nombre.");
		else
			this.sendReply("El clan " + target + " ha sido creado con éxito.");

	},

	borrarclan: function (target) {
		if (!this.can('clans')) return false;
		if (!Clans.deleteClan(target))
			this.sendReply("No se pudo eliminar el clan. Es posble que no exista o que se encuentre en war.");
		else
			this.sendReply("El clan " + target + " ha sido eliminado con éxito.");
	},

	getclans: 'clans',
	clanes: 'clans',
	clans: function (target, room, user) {
		if (!this.canBroadcast()) return false;
		var clansTableTitle = "Lista de Clanes";
		if (toId(target) === 'rank' || toId(target) === 'puntos' || toId(target) === 'prestigio' || toId(target) === 'puntuacion') {
			target = "rank";
			clansTableTitle = "Lista de Clanes por Puntuaci&oacute;n";
		}
		if (toId(target) === 'miembros' || toId(target) === 'members') {
			target = "members";
			clansTableTitle = "Lista de Clanes por Miembros";
		}
		var clansTable = '<center><big><big><strong>' + clansTableTitle + '</strong></big></big><center><br /><table class="clanstable" width="100%" border="1" cellspacing="0" cellpadding="3" target="_blank"><tr><td><center><strong>Clan</strong></center></td><td><center><strong>Nombre Completo</strong></center></td><td><center><strong>Miembros</strong></center></td><td><center><strong>Sala</strong></center></td><td><center><strong>Wars</strong></center></td><td><center><strong>Puntuaci&oacute;n</strong></center></td></tr>';
		var clansList = Clans.getClansList(toId(target));
		var auxRating = {};
		var nMembers = 0;
		var membersClan = {};
		var auxGxe = 0;
		for (var m in clansList) {
			auxRating = Clans.getElementalData(m);
			membersClan = Clans.getMembers(m);
			if (!membersClan) {
				nMembers = 0;
			} else {
				nMembers = membersClan.length;
			}
			clansTable += '<tr><td><center>' + Tools.escapeHTML(Clans.getClanName(m)) + '</center></td><td><center>' +Tools.escapeHTML(auxRating.compname) + '</center></td><td><center>' + nMembers + '</center></td><td><center>' + '<button name="send" value="/join ' + Tools.escapeHTML(auxRating.sala) + '" target="_blank">' + Tools.escapeHTML(auxRating.sala) + '</button>' + '</center></td><td><center>' + (auxRating.wins + auxRating.losses + auxRating.draws) + '</center></td><td><center>' + auxRating.rating + '</center></td></tr>';
		}
		clansTable += '</table>';
		this.sendReply("|raw| " + clansTable);
	},

	clanauth: function (target, room, user) {
		var autoclan = false;
		if (!target) autoclan = true;
		if (!this.canBroadcast()) return false;
		var clan = Clans.getRating(target);
		if (!clan) {
			target = Clans.findClanFromMember(target);
			if (target)
				clan = Clans.getRating(target);
		}
		if (!clan && autoclan) {
			target = Clans.findClanFromMember(user.name);
			if (target)
				clan = Clans.getRating(target);
		}
		if (!clan) {
			this.sendReply("El clan especificado no existe o no está disponible.");
			return;
		}
		//html codes for clan ranks
		var leaderClanSource = Clans.getAuthMembers(target, 3);
		if (leaderClanSource !== "") {
			leaderClanSource = "<big><b>Líderes</b></big><br /><br />" + leaderClanSource + "</b></big></big><br /><br />";
		}
		var subLeaderClanSource = Clans.getAuthMembers(target, 2);
		if (subLeaderClanSource !== "") {
			subLeaderClanSource = "<big><b>Sub-Líderes</b></big><br /><br />" + subLeaderClanSource + "</b></big></big><br /><br />";
		}
		var oficialClanSource = Clans.getAuthMembers(target, 1);
		if (oficialClanSource !== "") {
			oficialClanSource = "<big><b>Oficiales</b></big><br /><br />" + oficialClanSource + "</b></big></big><br /><br />";
		}
		var memberClanSource = Clans.getAuthMembers(target, 0);
		if (memberClanSource !== "") {
			memberClanSource = "<big><b>Resto de Miembros</b></big><br /><br />" + memberClanSource + "</b></big></big><br /><br />";
		}

		this.sendReplyBox(
			"<center><big><big><b>Jerarquía del clan " + Tools.escapeHTML(Clans.getClanName(target)) + "</b></big></big> <br /><br />" + leaderClanSource + subLeaderClanSource + oficialClanSource + memberClanSource + '</center>'
		);
	},

	clanmembers: 'miembrosclan',
	miembrosclan: function (target, room, user) {
		var autoclan = false;
		if (!target) autoclan = true;
		if (!this.canBroadcast()) return false;
		var clan = Clans.getRating(target);
		if (!clan) {
			target = Clans.findClanFromMember(target);
			if (target)
				clan = Clans.getRating(target);
		}
		if (!clan && autoclan) {
			target = Clans.findClanFromMember(user.name);
			if (target)
				clan = Clans.getRating(target);
		}
		if (!clan) {
			this.sendReply("El clan especificado no existe o no está disponible.");
			return;
		}
		var nMembers = 0;
		var membersClan = Clans.getMembers(target);
		if (!membersClan) {
			nMembers = 0;
		} else {
			nMembers = membersClan.length;
		}
		this.sendReplyBox(
			"<strong>Miembros del clan " + Tools.escapeHTML(Clans.getClanName(target)) + ":</strong> " + Clans.getAuthMembers(target, "all") + '<br /><br /><strong>Número de miembros: ' + nMembers + '</strong>'
		);
	},
	solicitudesclan: function (target, room, user) {
		var autoclan = false;
		if (!target) autoclan = true;
		if (!this.canBroadcast()) return false;
		var clan = Clans.getRating(target);
		if (!clan) {
			target = Clans.findClanFromMember(target);
			if (target)
				clan = Clans.getRating(target);
		}
		if (!clan && autoclan) {
			target = Clans.findClanFromMember(user.name);
			if (target)
				clan = Clans.getRating(target);
		}
		if (!clan) {
			this.sendReply("El clan especificado no existe o no está disponible.");
			return;
		}
		this.sendReplyBox(
			"<strong>Solicitudes pendientes del clan " + Tools.escapeHTML(Clans.getClanName(target)) + ":</strong> " + Tools.escapeHTML(Clans.getInvitations(target).sort().join(", "))
		);
	},
	clan: 'getclan',
	getclan: function (target, room, user) {
		var autoClan = false;
		var memberClanProfile = false;
		var clanMember = "";
		if (!target) autoClan = true;
		if (!this.canBroadcast()) return false;
		var clan = Clans.getProfile(target);
		if (!clan) {
			clanMember = target;
			target = Clans.findClanFromMember(target);
			memberClanProfile = true;
			if (target)
				clan = Clans.getProfile(target);
		}
		if (!clan && autoClan) {
			target = Clans.findClanFromMember(user.name);
			if (target)
				clan = Clans.getProfile(target);
			memberClanProfile = true;
			clanMember = user.name;
		}
		if (!clan) {
			this.sendReply("El clan especificado no existe o no está disponible.");
			return;
		}
		var salaClanSource = "";
		if (clan.sala === "none") {
			salaClanSource = 'Aún no establecida.';
		} else {
			salaClanSource = '<button name="send" value="/join ' + Tools.escapeHTML(clan.sala) + '" target="_blank">' + Tools.escapeHTML(clan.sala) + '</button>';
		}
		var clanTitle = "";
		if (memberClanProfile) {
			var authValue = Clans.authMember(target, clanMember);
			if (authValue === 3) {
				clanTitle = clanMember + " - Líder del clan " + clan.compname;
			} else if (authValue === 2) {
				clanTitle = clanMember + " - Sub-Líder del clan " + clan.compname;
			} else if (authValue === 1) {
				clanTitle = clanMember + " - Oficial del clan " + clan.compname;
			} else {
				clanTitle = clanMember + " - Miembro del clan " + clan.compname;
			}
		} else {
			clanTitle = clan.compname;
		}
		var medalsClan = '';
		if (clan.medals) {
			for (var u in clan.medals) {
				medalsClan += '<img id="' + u + '" src="' + encodeURI(clan.medals[u].logo) + '" width="32" title="' + Tools.escapeHTML(clan.medals[u].desc) + '" />&nbsp;&nbsp;';
			}
		}
		this.sendReplyBox(
			'<div class="fichaclan">' +
			'<h4><center><p> <br />' + Tools.escapeHTML(clanTitle) + '</center></h4><hr width="90%" />' +
			'<table width="90%" border="0" align="center"><tr><td width="180" rowspan="2"><div align="center"><img src="' + encodeURI(clan.logo) +
			'" width="160" height="160" /></div></td><td height="64" align="left" valign="middle"><span class="lemaclan">'+ Tools.escapeHTML(clan.lema) +
			'</span></td> </tr>  <tr>    <td align="left" valign="middle"><strong>Sala Propia</strong>: ' + salaClanSource +
			' <p style="font-style: normal;font-size: 16px;"><strong>Puntuación</strong>:&nbsp;' + clan.rating +
			' (' + clan.wins + ' Victorias, ' + clan.losses + ' Derrotas, ' + clan.draws + ' Empates)<br />' +
			' </p> <p style="font-style: normal;font-size: 16px;">&nbsp;' + medalsClan +
			'</p></td>  </tr></table></div>'
		);
	},

	setlemaclan: function (target) {
		if (!this.can('clans')) return false;
		var params = target.split(',');
		if (!params || params.length !== 2) return this.sendReply("Usage: /setlemaclan clan, lema");

		if (!Clans.setLema(params[0], params[1]))
			this.sendReply("El clan no existe o el lema es mayor de 80 caracteres.");
		else {
			this.sendReply("El nuevo lema del clan " + params[0] + " ha sido establecido con éxito.");
		}
	},

	setlogoclan: function (target) {
		if (!this.can('clans')) return false;
		var params = target.split(',');
		if (!params || params.length !== 2) return this.sendReply("Usage: /setlogoclan clan, logo");

		if (!Clans.setLogo(params[0], params[1]))
			this.sendReply("El clan no existe o el link del logo es mayor de 120 caracteres.");
		else {
			this.sendReply("El nuevo logo del clan " + params[0] + " ha sido establecido con éxito.");
		}
	},

	settituloclan: function (target) {
		if (!this.can('clans')) return false;
		var params = target.split(',');
		if (!params || params.length !== 2) return this.sendReply("Usage: /settitleclan clan, titulo");

		if (!Clans.setCompname(params[0], params[1]))
			this.sendReply("El clan no existe o el título es mayor de 80 caracteres.");
		else {
			this.sendReply("El nuevo titulo del clan " + params[0] + " ha sido establecido con éxito.");
		}
	},

	setrankclan: function (target) {
		if (!this.can('clans')) return false;
		var params = target.split(',');
		if (!params || params.length !== 2) return this.sendReply("Usage: /setrankclan clan, valor");

		if (!Clans.setRanking(params[0], params[1]))
			this.sendReply("El clan no existe o el valor no es válido.");
		else {
			this.sendReply("El nuevo rank para el clan " + params[0] + " ha sido establecido con éxito.");
		}
	},

	setgxeclan: function (target) {
		if (!this.can('clans')) return false;
		var params = target.split(',');
		if (!params || params.length !== 4) return this.sendReply("Usage: /setgxeclan clan, wins, losses, ties");

		if (!Clans.setGxe(params[0], params[1], params[2], params[3]))
			this.sendReply("El clan no existe o el valor no es válido.");
		else {
			this.sendReply("El nuevo GXE para el clan " + params[0] + " ha sido establecido con éxito.");
		}
	},

	setsalaclan: function (target) {
		if (!this.can('clans')) return false;
		var params = target.split(',');
		if (!params || params.length !== 2) return this.sendReply("Usage: /setsalaclan clan, sala");

		if (!Clans.setSala(params[0], params[1]))
			this.sendReply("El clan no existe o el nombre de la sala es mayor de 80 caracteres.");
		else {
			this.sendReply("La nueva sala del clan " + params[0] + " ha sido establecida con éxito.");
		}
	},
	
	giveclanmedal: function (target) {
		if (!this.can('clans')) return false;
		var params = target.split(',');
		if (!params || params.length !== 4) return this.sendReply("Usage: /giveclanmedal clan, medallaId, imagen, desc");

		if (!Clans.addMedal(params[0], params[1], params[2], params[3]))
			this.sendReply("El clan no existe o alguno de los datos no es correcto");
		else {
			this.sendReply("Has entegado una medalla al clan " + params[0]);
		}
	},
	
	removeclanmedal: function (target) {
		if (!this.can('clans')) return false;
		var params = target.split(',');
		if (!params || params.length !== 2) return this.sendReply("Usage: /removeclanmedal clan, medallaId");

		if (!Clans.deleteMedal(params[0], params[1]))
			this.sendReply("El clan no existe o no podeía dicha medalla");
		else {
			this.sendReply("Has quitado una medalla al clan " + params[0]);
		}
	},

	lemaclan: function (target, room, user) {
		var permisionClan = false;
		if (!target) return this.sendReply("Debe especificar un lema.");
		var clanUser = Clans.findClanFromMember(user.name);
		if (clanUser) {
			var clanUserid = toId(clanUser);
			var iduserwrit = toId(user.name);
			var perminsionvalue = Clans.authMember(clanUserid, iduserwrit);
			if (perminsionvalue === 3) permisionClan = true;
			if (!permisionClan && !this.can('clans')) return false;
		} else {
			return false;
		}
		var claninfo = Clans.getElementalData (clanUser);
		if (room && room.id === toId(claninfo.sala)) {
			if (!Clans.setLema(clanUser, target))
				this.sendReply("El lema es mayor de 80 caracteres.");
			else {
				this.addModCommand("Un nuevo lema para el clan " + clanUser + " ha sido establecido por " + user.name);
			}
		} else {
			this.sendReply("Este comando solo puede ser usado en la sala del clan.");
		}
	},

	logoclan: function (target, room, user) {
		var permisionClan = false;
		if (!target) return this.sendReply("Debe especificar un logo.");
		var clanUser = Clans.findClanFromMember(user.name);
		if (clanUser) {
			var clanUserid = toId(clanUser);
			var iduserwrit = toId(user.name);
			var perminsionvalue = Clans.authMember(clanUserid, iduserwrit);
			if (perminsionvalue === 3) permisionClan = true;
			if (!permisionClan && !this.can('clans')) return false;
		} else {
			return false;
		}
		var claninfo = Clans.getElementalData (clanUser);
		if (room && room.id === toId(claninfo.sala)) {
			if (!Clans.setLogo(clanUser, target))
				this.sendReply("El logo es mayor de 120 caracteres.");
			else {
				this.addModCommand("Un nuevo logotipo para el clan " + clanUser + " ha sido establecido por " + user.name);
			}
		} else {
			this.sendReply("Este comando solo puede ser usado en la sala del clan.");
		}
	},

	llamarmiembros: 'fjg',
	fjg: function (target, room, user) {
		var permisionClan = false;
		var clanUser = Clans.findClanFromMember(user.name);
		if (clanUser) {
			var clanUserid = toId(clanUser);
			var iduserwrit = toId(user.name);
			var perminsionvalue = Clans.authMember(clanUserid, iduserwrit);
			if (perminsionvalue === 2 || perminsionvalue === 3) permisionClan = true;
			if (!permisionClan && !this.can('clans')) return false;
		} else {
			return false;
		}
		var claninfo = Clans.getElementalData (clanUser);
		if (room && room.id === toId(claninfo.sala)) {
			var clanMembers = Clans.getMembers(clanUser);
			var targetUser;
			for (var i = 0; i < clanMembers.length; ++i) {
				if (!room.users[toId(clanMembers[i])]) {
					targetUser = Users.get(clanMembers[i])
					if (targetUser && targetUser.connected) {
						targetUser.joinRoom(room.id);
						targetUser.popup('Has sido llamado a la sala ' + claninfo.sala.trim() + ' por ' + user.name + '.');
					}
				}
			}
			this.addModCommand("Los miembros del clan " + clanUser + " han sido llamados a la sala " + toId(claninfo.sala) + ' por ' + user.name + '.');
		} else {
			this.sendReply("Este comando solo puede ser usado en la sala del clan.");
		}
	},

	añadirmiembro: function (target) {
		if (!this.can('clans')) return false;
		var params = target.split(',');
		if (params.length !== 2) return this.sendReply("Usage: /addclanmember clan, member");

		var user = Users.getExact(params[1]);
		if (!user || !user.connected) return this.sendReply("El usuario " + params[1] + " no está conectado.");

		if (!Clans.addMember(params[0], params[1]))
			this.sendReply("No se pudo añadir al usuario dentro del clan. El clan existe o el usuario esta en otro clan?");
		else {
			this.sendReply("El usuario " + user.name + " ha sido añadido con éxito al clan.");
		}
	},

	clanleader: 'liderclan',
	liderclan: function (target, room, user) {
		if (!this.can('clans')) return false;
		var params = target.split(',');
		if (!params) return this.sendReply("Usage: /liderclan member");

		var userk = Users.getExact(params[0]);
		if (!userk || !userk.connected) return this.sendReply("El usuario " + params[0] + " no existe o no está disponible.");

		if (!Clans.addLeader(params[0]))
			this.sendReply("El usuario no existe, no pertenece a ningún clan o ya era líder de su clan.");
		else {
			var clanUser = Clans.findClanFromMember(params[0]);
			this.sendReply("El usuario " + userk.name + " ha sido nombrado correctamente líder del clan " + clanUser + ".");
			userk.popup(user.name + " te ha nombrado Líder del clan " + clanUser + ".\nUtiliza el comando /ayudaclan para más información.");
		}
	},

	clanoficial: 'oficialclan',
	oficialclan: function (target, room, user) {
		var permisionClan = false;
		var params = target.split(',');
		if (!params) {
				return this.sendReply("Usage: /oficialclan member");
		}
		var clanUser = Clans.findClanFromMember(user.name);
		var clanTarget = Clans.findClanFromMember(params[0]);
		if (clanUser) {
			var clanUserid = toId(clanUser);
			var userb = toId(params[0]);
			var iduserwrit = toId(user.name);
			var perminsionValue = Clans.authMember(clanUserid, iduserwrit);
			if ((perminsionValue === 2 || perminsionValue === 3) && clanTarget === clanUser) permisionClan = true;
		}
		if (!permisionClan && !this.can('clans')) return;
		var userk = Users.getExact(params[0]);
		if (!userk || !userk.connected) return this.sendReply("Usuario: " + params[0] + " no existe o no está disponible.");
		if (clanTarget) {
			var clanId = toId(clanTarget);
			var userId = toId(params[0]);
			if ((Clans.authMember(clanId, userId) > 2 && !this.can('clans')) || (Clans.authMember(clanId, userId) === 2 && perminsionValue < 3 && !this.can('clans'))) return false;
		}
		if (!Clans.addOficial(params[0]))
			this.sendReply("El usuario no existe, no pertenece a ningún clan o ya era oficial de su clan.");
		else {
			this.sendReply("Usuario: " + userk.name + " nombrado correctamente oficial del clan " + clanTarget + ".");
			userk.popup(user.name + " te ha nombrado Oficial del clan " + clanTarget + ".\nUtiliza el comando /ayudaclan para más información.");
		}
	},
	
	clansubleader: 'subliderclan',
	subliderclan: function (target, room, user) {
		var permisionClan = false;
		var params = target.split(',');
		if (!params) {
				return this.sendReply("Usage: /subliderclan member");
		}
		var clanUser = Clans.findClanFromMember(user.name);
		var clanTarget = Clans.findClanFromMember(params[0]);
		if (clanUser) {
			var clanUserid = toId(clanUser);
			var userb = toId(params[0]);
			var iduserwrit = toId(user.name);
			var perminsionValue = Clans.authMember(clanUserid, iduserwrit);
			if (perminsionValue === 3 && clanTarget === clanUser) permisionClan = true;
		}
		if (!permisionClan && !this.can('clans')) return;
		var userk = Users.getExact(params[0]);
		if (!userk || !userk.connected) return this.sendReply("Usuario: " + params[0] + " no existe o no está disponible.");
		if (clanTarget) {
			var clanId = toId(clanTarget);
			var userId = toId(params[0]);
			if ((Clans.authMember(clanId, userId) > 2 && !this.can('clans')) || (Clans.authMember(clanId, userId) === 2 && perminsionValue < 3 && !this.can('clans'))) return false;
		}
		if (!Clans.addSubLeader(params[0]))
			this.sendReply("El usuario no existe, no pertenece a ningún clan o ya era sub-lider de su clan.");
		else {
			this.sendReply("Usuario: " + userk.name + " nombrado correctamente sub-lider del clan " + clanTarget + ".");
			userk.popup(user.name + " te ha nombrado Sub-Lider del clan " + clanTarget + ".\nUtiliza el comando /ayudaclan para más información.");
		}
	},

	degradarclan: 'declanauth',
	demoteclan: 'declanauth',
	declanauth: function (target, room, user) {
		var permisionClan = false;
		var params = target.split(',');
		if (!params) {
			return this.sendReply("Usage: /demoteclan member");
		}
		var clanUser = Clans.findClanFromMember(user.name);
		var clanTarget = Clans.findClanFromMember(params[0]);
		if (clanUser) {
			var clanUserid = toId(clanUser);
			var userb = toId(params[0]);
			var iduserwrit = toId(user.name);
			var perminsionValue = Clans.authMember(clanUserid, iduserwrit);
			if (perminsionValue >= 2 && clanTarget === clanUser) permisionClan = true;
		}
		if (!permisionClan && !this.can('clans')) return;
		var userk = Users.getExact(params[0]);
		if (!clanTarget) {
			return this.sendReply("El usuario no existe o no pertenece a ningún clan.");
		} else {
			var clanId = toId(clanTarget);
			var userId = toId(params[0]);
			if ((Clans.authMember(clanId, userId) > 2 && !this.can('clans')) || (Clans.authMember(clanId, userId) === 2 && perminsionValue < 3 && !this.can('clans'))) return false;
		}
		if (!Clans.deleteLeader(params[0])) {
			if (!Clans.deleteOficial(params[0])) {
				this.sendReply("El usuario no poseía ninguna autoridad dentro del clan.");
			} else {
				if (!userk || !userk.connected) {
					this.addModCommand(params[0] + " ha sido degradado de rango en " + clanTarget + " por " + user.name);
				} else {
					this.addModCommand(userk.name + " ha sido degradado de rango en " + clanTarget + " por " + user.name);
				}
			}
		} else {
			var oficialDemote = Clans.deleteOficial(params[0]);
			if (!userk || !userk.connected) {
				this.addModCommand(params[0] + " ha sido degradado de rango en " + clanTarget + " por " + user.name);
			} else {
				this.addModCommand(userk.name + " ha sido degradado de rango en " + clanTarget + " por " + user.name);
			}
		}
	},

	invitarclan: function (target, room, user) {
		var permisionClan = false;
		var clanUser = Clans.findClanFromMember(user.name);
		if (clanUser) {
			var clanUserid = toId(clanUser);
			var iduserwrit = toId(user.name);
			var permisionValue = Clans.authMember(clanUserid, iduserwrit);
			if (permisionValue > 0) permisionClan = true;
		}
		if (!permisionClan) return this.sendReply("/invitarclan - Acceso denegado");
		var params = target.split(',');
		if (!params) return this.sendReply("Usage: /invitarclan user");
		var userk = Users.getExact(params[0]);
		if (!userk || !userk.connected) return this.sendReply("Usuario: " + params[0] + " no existe o no está disponible.");
		if (!Clans.addInvite(clanUser, params[0]))
			this.sendReply("No se pudo invitar al usuario. ¿No existe, ya está invitado o está en otro clan?");
		else {
			clanUser = Clans.findClanFromMember(user.name);
			userk.popup(user.name + " te ha invitado a unirte al clan " + clanUser + ".\nPara unirte al clan escribe en el chat /aceptarclan " + clanUser);
			room.addRaw(userk.name + " ha sido invitado a unirse al clan " + clanUser + " por " + user.name);
		}
	},
	aceptarclan: function (target, room, user) {
		var clanUser = Clans.findClanFromMember(user.name);
		if (clanUser) {
			return this.sendReply("Ya perteneces a un clan. No te puedes unir a otro.");
		}
		var params = target.split(',');
		if (!params) return this.sendReply("Usage: /aceptarclan clan");
		var clanpropio = Clans.getClanName(params[0]);
		if (!clanpropio) return this.sendReply("El clan no existe o no está disponible.");

		if (!Clans.aceptInvite(params[0], user.name))
			this.sendReply("El clan no existe o no has sido invitado a este.");
		else {
			this.sendReply("Te has unido correctamente al clan" + clanpropio);
		}
	},

	removermiembro: function (target) {
		if (!this.can('clans')) return false;
		var params = target.split(',');
		if (params.length !== 2) return this.sendReply("Usage: /removeclanmember clan, member");
		if (!Clans.removeMember(params[0], params[1]))
			this.sendReply("No se puede remover al usuario del clan. El clan existe o el usuario ya ha sido removido anteriormente?");
		else {
			this.sendReply("El usuario " + params[1] + " ha sido removido del clan.");
		}
	},

	expulsarclan: function (target, room, user) {
		var permisionClan = false;
		var params = target.split(',');
		if (!params) {
				return this.sendReply("Usage: /expulsarclan member");
		}
		var clanUser = Clans.findClanFromMember(user.name);
		var clanTarget = Clans.findClanFromMember(params[0]);
		if (clanUser) {
			var clanUserid = toId(clanUser);
			var userb = toId(params[0]);
			var iduserwrit = toId(user.name);
			var perminsionValue = Clans.authMember(clanUserid, iduserwrit);
			if (perminsionValue >= 2 && clanTarget === clanUser) permisionClan = true;
		}
		if (!permisionClan && !this.can('clans')) return;
		var currentWar = War.findClan(clanTarget);
		if (currentWar) {
			var currentWarParticipants = War.getTourData(currentWar);
			if (currentWarParticipants.teamAMembers[toId(params[0])] || currentWarParticipants.teamBMembers[toId(params[0])]) return this.sendReply("No puedes expulsar del clan si el miembro estaba participando en una war.");
		}
		var userk = Users.getExact(params[0]);
		if (!clanTarget) {
			return this.sendReply("El usuario no existe o no pertenece a ningún clan.");
		} else {
			var clanId = toId(clanTarget);
			var userId = toId(params[0]);
			if ((Clans.authMember(clanId, userId) > 2 && !this.can('clans')) || (Clans.authMember(clanId, userId) === 2 && perminsionValue < 3 && !this.can('clans'))) return false;
		}
		if (!Clans.removeMember(clanTarget, params[0])) {
			this.sendReply("El usuario no pudo ser expulsado del clan.");
		} else {
			if (!userk || !userk.connected) {
				this.addModCommand(params[0] + " ha sido expulsado del clan " + clanTarget + " por " + user.name);
			} else {
				this.addModCommand(userk.name + " ha sido expulsado del clan " + clanTarget + " por " + user.name);
			}
		}
	},

	 salirdelclan: 'abandonarclan',
	 clanleave: 'abandonarclan',
	 abandonarclan: function (target, room, user) {
		var clanUser = Clans.findClanFromMember(user.name);
		if (!clanUser) {
			return this.sendReply("No perteneces a ningún clan.");
		}
		var currentWar = War.findClan(clanUser);
		if (currentWar) {
			var currentWarParticipants = War.getTourData(currentWar);
			if (currentWarParticipants.teamAMembers[toId(user.name)] || currentWarParticipants.teamBMembers[toId(user.name)]) return this.sendReply("No puedes salir del clan si estabas participando en una war.");
		}
		if (!Clans.removeMember(clanUser, user.name)) {
			 this.sendReply("Error al intentar salir del clan.");
		} else {
			this.sendReply("Has salido del clan" + clanUser);
		}
	},


	//new war system
	resetclanranking: function (target, room, user) {
		if (!this.can('clans')) return false;
		if (room.id !== 'staff') return this.sendReply("Este comando solo puede ser usado en la sala Staff");
		Clans.resetClansRank();
		this.addModCommand(user.name + " ha reiniciado el ranking de clanes.");
	},
	
	resetwarlog: function (target, room, user) {
		if (!this.can('clans')) return false;
		if (room.id !== 'staff') return this.sendReply("Este comando solo puede ser usado en la sala Staff");
		Clans.resetWarLog();
		this.addModCommand(user.name + " ha borrado todos los warlogs.");
	},
	
	pendingwars: 'wars',
	wars: function (target, room, user) {
		this.parse("/war search");
	},

	viewwar: 'vw',
	warstatus: 'vw',
	vw: function (target, room, user) {
		this.parse("/war round");
	},
	
	endwar: function (target, room, user) {
		this.parse("/war end");
	},
	
	warlog: function (target, room, user) {
		var autoclan = false;
		if (!target) autoclan = true;
		if (!this.canBroadcast()) return false;
		var clan = Clans.getRating(target);
		if (!clan) {
			target = Clans.findClanFromMember(target);
			if (target)
				clan = Clans.getRating(target);
		}
		if (!clan && autoclan) {
			target = Clans.findClanFromMember(user.name);
			if (target)
				clan = Clans.getRating(target);
		}
		if (!clan) {
			this.sendReply("El clan especificado no existe o no está disponible.");
			return;
		}
		var f = new Date();
		var dateWar = f.getDate() + '-' + f.getMonth() + ' ' + f.getHours() + 'h';
		this.sendReply(
			"|raw| <center><big><big><b>Últimas guerras del clan " + Tools.escapeHTML(Clans.getClanName(target)) + "</b></big></big> <br /><br />" + Clans.getWarLogTable(target) + '<br /> Fecha del servidor: ' + dateWar + '</center>'
		);
	},
	
	cerrarsalaclan: 'closeclanroom',
	closeclanroom: function (target, room, user) {
		var permisionClan = false;
		var clanRoom = Clans.findClanFromRoom(room.id);
		if (!clanRoom) return this.sendReply("Esta no es una sala de Clan.");
		var clanUser = Clans.findClanFromMember(user.name);
		if (clanUser && toId(clanRoom) === toId(clanUser)) {
			var clanUserid = toId(clanUser);
			var iduserwrit = toId(user.name);
			var perminsionvalue = Clans.authMember(clanUserid, iduserwrit);
			if (perminsionvalue >= 2) permisionClan = true;
			
		} 
		if (!permisionClan && !this.can('clans')) return false;
		if (!Clans.closeRoom(room.id, clanRoom))
			this.sendReply("Error al intentar cerrar la sala. Es posible que ya esté cerrada.");
		else {
			this.addModCommand("Esta sala ha sido cerrada a quienes no sean miembros de " + clanRoom + " por " + user.name);
		}
	},
	
	abrirsalaclan: 'openclanroom',
	openclanroom: function (target, room, user) {
		var permisionClan = false;
		var clanRoom = Clans.findClanFromRoom(room.id);
		if (!clanRoom) return this.sendReply("Esta no es una sala de Clan.");
		var clanUser = Clans.findClanFromMember(user.name);
		if (clanUser && toId(clanRoom) === toId(clanUser)) {
			var clanUserid = toId(clanUser);
			var iduserwrit = toId(user.name);
			var perminsionvalue = Clans.authMember(clanUserid, iduserwrit);
			if (perminsionvalue >= 2) permisionClan = true;
			
		} 
		if (!permisionClan && !this.can('clans')) return false;
		if (!Clans.openRoom(room.id, clanRoom))
			this.sendReply("Error al intentar abrir la sala. Es posible que ya esté abierta.");
		else {
			this.addModCommand("Esta sala ha sido abierta a todos los usuarios por " + user.name);
		}
	},
	
	kickall: function (target, room, user, connection) {
		if (!this.can('makeroom')) return false;
		var targetUser;
		for (var f in room.users) {
			targetUser = Users.getExact(room.users[f]);
			if (!targetUser) {
				delete room.users[f];
			} else {
				targetUser.leaveRoom(room.id);
			}
		}
		room.userCount = 0;
		this.addModCommand("" + user.name + " has kicked all users from room " + room.id + '.');
		setTimeout(function () {user.joinRoom(room.id);}, 2000);
	}
};
