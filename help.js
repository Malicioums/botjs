module.export = (client, message) => {
if (message.content === PREFIX + "help") {
		message.delete(message.author)
            message.channel.send("> Réponse envoyé, regardé vos messages privés")
            message.member.send({
            embed: {
                color: 0x0e0e0e,
                title: `**•.,¸¸,.••.,¸¸,.•¯ ΉΣᄂP ¯•.,¸¸,.••.,¸¸,.•**`,
                description: "\n\n``Préfixe :`` **A+**\n\n**__•.,¸¸,.••.,¸¸,.••.,¸¸,.••.,¸¸,.••.,¸¸,.••.,¸¸,.•__**",
                fields: [
                    {
                    name: "\n**__modération :__**",
                    value: "\n> ``ban.user``, ``kick.user``, ``supp.message``, ``info.reaction.role``, ``info.Welcome.member``, ``info.Goodbye.member``"
                    },
                    {
                    name: "\n**__Fun, Gaming__**",
                    value: "\n> ``Start.Lg.Game``, ``Start.rp.Game``, ``info.Lg.Game``, ``info.rp.Game``"
                    },
                    {
                    name: "\n**__Role play__**",
                    value: "> ``info.rolls``, ``info.bag``, ``info.shop``, ``info.quete``, ``info.faim``, ``info.soif``, ``info.dashboard.member``, ``info.monster.spawn``, ``sys.atk/def/healt/speed``, ``sys.nourriture``, ``sys.fiche``"
                    },
                    {
                    name: "\n**__Outils__**",
                    value: "> ``sys.xp``, ``info.blacklist``, ``translate.commands``"
                    },
                    {
                    name: "\n***__Soutenir Aɱαƚҽɾαʂυ GΛПG__***",
                    value: "\n> ``lien.site``, ``lien.utip``, ``lien.support``"
                 	}
                ],
                footer: {
                    text: `by Aɱαƚҽɾαʂυ GΛПG`
                }
            }
        })
    }
});