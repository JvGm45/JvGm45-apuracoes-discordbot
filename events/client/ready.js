const { Message } = require("discord.js");
const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    /**
     * @param {Client} client 
     */
    async execute(client) {

        const { default: axios } = require('axios');

        const logData = async () => {
            const response = await axios("https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json").then(res => res.data)
            const apuracoes = response.cand.map(cand => ({ name: cand.nm, votos: cand.vap, porcentagem: cand.pvap }));
            const porcentagemUrna = response.pst
            // console.log(apuracoes);

          let embedEleicoes = new Discord.MessageEmbed()
                                  
            function progressBar(progress, maxProgress, size) {
                const progressGiveaway = Math.round((size * progress) / maxProgress)
                const progressEmpty = size - progressGiveaway;

                let progressText
                const progressEmptyText = `<:gray_square:1026579481332305990>`.repeat(progressEmpty)

                if (apuracoes[0].name === "LULA") {
                    progressText = `\<:red_square:1026582654486855730>`.repeat(progressGiveaway)
                } 
                if (apuracoes[0].name === "JAIR BOLSONARO") {
                    progressText = `\<:green_square:1026579685926248588>`.repeat(progressGiveaway);
                }
                
                return progressText + progressEmptyText
            }

            function progressBar2(progress, maxProgress, size) {
                const progressGiveaway2 = Math.round((size * progress) / maxProgress)
                const progressEmpty2 = size - progressGiveaway2;

                let progressText2
                const progressEmptyText2 = `<:gray_square:1026579481332305990>`.repeat(progressEmpty2)

                if (apuracoes[1].name === "LULA") {
                    progressText2 = `\<:red_square:1026582654486855730>`.repeat(progressGiveaway2)
                }
                if (apuracoes[1].name === "JAIR BOLSONARO") {
                    progressText2 = `\<:green_square:1026579685926248588>`.repeat(progressGiveaway2);
                }

                return progressText2 + progressEmptyText2
            }

            function progressBarUrnas(progress, maxProgress, size) {
                const progressGiveaway = Math.round((size * progress) / maxProgress)
                const progressEmpty = size - progressGiveaway;

                let progressText = `\<:blue_square:1026588234517598300>`.repeat(progressGiveaway);

                const progressEmptyText = `<:gray_square:1026579481332305990>`.repeat(progressEmpty)

                return progressText + progressEmptyText
            }

            response.pst = parseFloat(response.pst.replace(',','.'));

            embedEleicoes.addField(`Urnas apuradas: ${response.pst}%` ,`${progressBarUrnas(response.pst, 100, 9)}`)

            apuracoes[0].porcentagem = parseFloat(apuracoes[0].porcentagem.replace(',','.'));

            embedEleicoes.addField(`${apuracoes[0].name} ${apuracoes[0].porcentagem}%`, `${progressBar(apuracoes[0].porcentagem, 52, 9)}`)

            apuracoes[1].porcentagem = parseFloat(apuracoes[1].porcentagem.replace(',','.'));

            embedEleicoes.addField(`${apuracoes[1].name} ${apuracoes[1].porcentagem}%`, `${progressBar2(apuracoes[1].porcentagem, 52, 9)}`)

            embedEleicoes.addField(`⠀⠀⠀⠀⠀⠀`, `⠀⠀⠀`, true)
            embedEleicoes.addField(`${apuracoes[0].name}`, `\`${apuracoes[0].votos} Votos\``, true)
            embedEleicoes.addField(`${apuracoes[1].name}`, `\`${apuracoes[1].votos} Votos\``, true)

            embedEleicoes.setThumbnail('https://imagens.ebc.com.br/2VRaCDHU3frnk-OX0MFQ1E80iMY=/754x0/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/eleicoes-1170x700-destaque-materia_2022-08-08.jpg?itok=2fHTvTJh')
            embedEleicoes.setTitle("Apuração em tempo real eleições 2022.")
            embedEleicoes.setColor('#FFFF')

            if (apuracoes[0].name === "LULA") {
                embedEleicoes.setColor('#dd002f')
            }
            if (apuracoes[0].name === "JAIR BOLSONARO") {
                embedEleicoes.setColor('#018001')
            }

            embedEleicoes.setImage('https://www.infomoney.com.br/wp-content/uploads/2022/08/lula-bolsonaro-eleicoes-2022-pesquisas-eleitorais-1.jpg?quality=70')

        const canal2 = client.channels.cache.get("1035584467810664508");
          let mensagem = await canal2.send({embeds: [embedEleicoes]})
          await new Promise(r => setTimeout(r, 30000))
          await mensagem.delete()

            setTimeout(logData, 100);
          }

        logData();

        const logData2 = async () => {
            const response = await axios("https://resultados.tse.jus.br/oficial/ele2022/547/dados-simplificados/sp/sp-c0003-e000547-r.json").then(res => res.data)
            const apuracoes = response.cand.map(cand => ({ name: cand.nm, votos: cand.vap, porcentagem: cand.pvap }));
            const porcentagemUrna = response.pst
            // console.log(apuracoes);
          const canal3 = client.channels.cache.get("678254019554050112");
        
          let embedEleicoes2 = new Discord.MessageEmbed()
                                  
            function progressBar(progress, maxProgress, size) {
                const progressGiveaway = Math.round((size * progress) / maxProgress)
                const progressEmpty = size - progressGiveaway;

                let progressText
                const progressEmptyText = `<:gray_square:1026579481332305990>`.repeat(progressEmpty)

                if (apuracoes[0].name === "FERNANDO HADDAD") {
                    progressText = `\<:red_square:1026582654486855730>`.repeat(progressGiveaway)
                } 
                if (apuracoes[0].name === "TARCÍSIO") {
                    progressText = `\<:green_square:1026579685926248588>`.repeat(progressGiveaway);
                }
                
                return progressText + progressEmptyText
            }

            function progressBar2(progress, maxProgress, size) {
                const progressGiveaway2 = Math.round((size * progress) / maxProgress)
                const progressEmpty2 = size - progressGiveaway2;

                let progressText2
                const progressEmptyText2 = `<:gray_square:1026579481332305990>`.repeat(progressEmpty2)

                if (apuracoes[1].name === "FERNANDO HADDAD") {
                    progressText2 = `\<:red_square:1026582654486855730>`.repeat(progressGiveaway2)
                }
                if (apuracoes[1].name === "TARCÍSIO") {
                    progressText2 = `\<:green_square:1026579685926248588>`.repeat(progressGiveaway2);
                }

                return progressText2 + progressEmptyText2
            }

            function progressBarUrnas(progress, maxProgress, size) {
                const progressGiveaway = Math.round((size * progress) / maxProgress)
                const progressEmpty = size - progressGiveaway;

                let progressText = `\<:blue_square:1026588234517598300>`.repeat(progressGiveaway);

                const progressEmptyText = `<:gray_square:1026579481332305990>`.repeat(progressEmpty)

                return progressText + progressEmptyText
            }

            response.pst = parseFloat(response.pst.replace(',','.'));

            embedEleicoes2.addField(`Urnas apuradas: ${response.pst}%` ,`${progressBarUrnas(response.pst, 100, 9)}`)

            apuracoes[0].porcentagem = parseFloat(apuracoes[0].porcentagem.replace(',','.'));

            embedEleicoes2.addField(`${apuracoes[0].name} ${apuracoes[0].porcentagem}%`, `${progressBar(apuracoes[0].porcentagem, 52, 9)}`)

            apuracoes[1].porcentagem = parseFloat(apuracoes[1].porcentagem.replace(',','.'));

            embedEleicoes2.addField(`${apuracoes[1].name} ${apuracoes[1].porcentagem}%`, `${progressBar2(apuracoes[1].porcentagem, 52, 9)}`)

            embedEleicoes2.addField(`⠀⠀⠀⠀⠀⠀`, `⠀⠀⠀`, true)
            embedEleicoes2.addField(`${apuracoes[0].name}`, `\`${apuracoes[0].votos} Votos\``, true)
            embedEleicoes2.addField(`${apuracoes[1].name}`, `\`${apuracoes[1].votos} Votos\``, true)

            embedEleicoes2.setThumbnail('https://imagens.ebc.com.br/2VRaCDHU3frnk-OX0MFQ1E80iMY=/754x0/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/eleicoes-1170x700-destaque-materia_2022-08-08.jpg?itok=2fHTvTJh')
            embedEleicoes2.setTitle("Apuração em tempo real eleições 2022.")
            embedEleicoes2.setColor('#FFFF')

            if (apuracoes[0].name === "FERNANDO HADDAD") {
                embedEleicoes2.setColor('#dd002f')
            }
            if (apuracoes[0].name === "TARCÍSIO") {
                embedEleicoes2.setColor('#018001')
            }

            embedEleicoes2.setImage('https://imagens.ebc.com.br/gnY1mynmDauqzj7RHU3iGOPrYmc=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/tarcisio_haddad_02.10.2022.jpg?itok=_PcsiGav')

            const canalgovsp = client.channels.cache.get("1035584793477398548");
          let mensagem2 = await canalgovsp.send({embeds: [embedEleicoes2]})
          await new Promise(r => setTimeout(r, 30000))
          await mensagem2.delete()

            setTimeout(logData2, 100);
          }

        logData2();

        const logData3 = async () => {
            const response = await axios("https://resultados.tse.jus.br/oficial/ele2022/547/dados-simplificados/ba/ba-c0003-e000547-r.json").then(res => res.data)
            const apuracoes = response.cand.map(cand => ({ name: cand.nm, votos: cand.vap, porcentagem: cand.pvap }));
            const porcentagemUrna = response.pst
            // console.log(apuracoes);

          let embedEleicoes3 = new Discord.MessageEmbed()
                                  
            function progressBar(progress, maxProgress, size) {
                const progressGiveaway = Math.round((size * progress) / maxProgress)
                const progressEmpty = size - progressGiveaway;

                let progressText
                const progressEmptyText = `<:gray_square:1026579481332305990>`.repeat(progressEmpty)

                if (apuracoes[0].name === "JERÔNIMO") {
                    progressText = `\<:red_square:1026582654486855730>`.repeat(progressGiveaway)
                } 
                if (apuracoes[0].name === "ACM NETO") {
                    progressText = `\<:green_square:1026579685926248588>`.repeat(progressGiveaway);
                }
                
                return progressText + progressEmptyText
            }

            function progressBar2(progress, maxProgress, size) {
                const progressGiveaway2 = Math.round((size * progress) / maxProgress)
                const progressEmpty2 = size - progressGiveaway2;

                let progressText2
                const progressEmptyText2 = `<:gray_square:1026579481332305990>`.repeat(progressEmpty2)

                if (apuracoes[1].name === "JERÔNIMO") {
                    progressText2 = `\<:red_square:1026582654486855730>`.repeat(progressGiveaway2)
                }
                if (apuracoes[1].name === "ACM NETO") {
                    progressText2 = `\<:green_square:1026579685926248588>`.repeat(progressGiveaway2);
                }

                return progressText2 + progressEmptyText2
            }

            function progressBarUrnas(progress, maxProgress, size) {
                const progressGiveaway = Math.round((size * progress) / maxProgress)
                const progressEmpty = size - progressGiveaway;

                let progressText = `\<:blue_square:1026588234517598300>`.repeat(progressGiveaway);

                const progressEmptyText = `<:gray_square:1026579481332305990>`.repeat(progressEmpty)

                return progressText + progressEmptyText
            }

            response.pst = parseFloat(response.pst.replace(',','.'));

            embedEleicoes3.addField(`Urnas apuradas: ${response.pst}%` ,`${progressBarUrnas(response.pst, 100, 9)}`)

            apuracoes[0].porcentagem = parseFloat(apuracoes[0].porcentagem.replace(',','.'));

            embedEleicoes3.addField(`${apuracoes[0].name} ${apuracoes[0].porcentagem}%`, `${progressBar(apuracoes[0].porcentagem, 52, 9)}`)

            apuracoes[1].porcentagem = parseFloat(apuracoes[1].porcentagem.replace(',','.'));

            embedEleicoes3.addField(`${apuracoes[1].name} ${apuracoes[1].porcentagem}%`, `${progressBar2(apuracoes[1].porcentagem, 52, 9)}`)

            embedEleicoes3.addField(`⠀⠀⠀⠀⠀⠀`, `⠀⠀⠀`, true)
            embedEleicoes3.addField(`${apuracoes[0].name}`, `\`${apuracoes[0].votos} Votos\``, true)
            embedEleicoes3.addField(`${apuracoes[1].name}`, `\`${apuracoes[1].votos} Votos\``, true)

            embedEleicoes3.setThumbnail('https://imagens.ebc.com.br/2VRaCDHU3frnk-OX0MFQ1E80iMY=/754x0/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/eleicoes-1170x700-destaque-materia_2022-08-08.jpg?itok=2fHTvTJh')
            embedEleicoes3.setTitle("Apuração em tempo real eleições 2022.")
            embedEleicoes3.setColor('#FFFF')


            if (apuracoes[0].name === "JERÔNIMO") {
                embedEleicoes3.setColor('#dd002f')
            }
            if (apuracoes[0].name === "ACM NETO") {
                embedEleicoes3.setColor('#254aa5')
            }

            embedEleicoes3.setImage('https://www.infomoney.com.br/wp-content/uploads/2022/09/acm-jeronimo.jpg?resize=916%2C515&quality=50&strip=all')

        const canalgovba = client.channels.cache.get("1035584865061589123");
          let mensagem3 = await canalgovba.send({embeds: [embedEleicoes3]})
          await new Promise(r => setTimeout(r, 30000))
          await mensagem3.delete()

            setTimeout(logData3, 100);
          }

        logData3();

        console.log(`[LOG] ${client.user.tag} Tá online!!\n[LOG] Bot tá em ${client.guilds.cache.size} servidores\n[LOG] Com ${client.users.cache.size} membros`);
    }
}
