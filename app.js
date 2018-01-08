/*
 * app.js
 * Script to run a chat bot on Twitch
 *
 * Brendan Voelz
 * 7 January 2018
 */

// Dependencies
var tmi     = require("tmi.js");
var request = require('request');

// Options for tmi.js library
var options = {
        options : {
                debug : true,
        },
        connection : {
                cluster : "aws",
                reconnect : true,
        },
        identity : {
                username : "volsbot",
                password : "oauth:2dn814adr4e3v8bdyjy1hywet5uf3n",
        },
        channels : [
                "brendangaming",
        ],
};

// Main function call
var client = new tmi.client(options);
client.connect();

/* Main logic */

// New connection
client.on('connected', function(address, port) {
        client.action('brendangaming', 'Hello world! I am alive!');
});

// Handle chat commands
client.on('chat', function(channel, user, message, self) {
        // Print the current EST time
        if (message == '!time') {
                var date        = new Date();
                var currentTime = date.toString();
                client.action('brendangaming', currentTime);
        }
        // TODO: Print the current world record time for SMO
        else if (message == '!wr') {
                client.action('brendangaming', 'Current world record for Super Mario Odyssey Any% is: 1h 05m 14s by nedeahS');
        }
        // Print my current personal best
        else if (message == '!pb') {
                client.action('brendangaming', 'Current PB for Super Mario Odyssey Any% is: coming soon...');
        }

});