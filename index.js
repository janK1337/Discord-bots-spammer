/*
Author: PawelekDev
Discord: Pawełekk#2237
Github: github.com/PawelekDev

03.08.2020
*/
const Discord = require('discord.js')
const fs = require('fs');
try {
    fs.readFile("./ustawienia.json", "utf8", (err, json) => {
    const ustawienia = JSON.parse(json);
    const tokeny = fs.readFileSync('tokeny.txt', 'UTF-8');
    const ll = tokeny.split(/\r?\n/);
    ll.forEach((token) => {
        const client = new Discord.Client()
        client.on('ready', () => {
            console.log('Zalogowano jako ' + client.user.tag)
            client.user.setActivity(ustawienia.status);
            client.on('message',async message => {
            if (message.content === ustawienia.komenda) {
            for (let x=0; x<100; x++) {
                message.channel.send(ustawienia.tresc)
            }
     
        }
    }
        )})  
        client.login(token).catch(e => console.log("Podałeś błędny token!"))

}
    )}
    )} catch (err) {
        console.error(err);
    }
    
        