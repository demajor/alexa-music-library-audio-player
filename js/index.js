'use strict';

var Alexa = require('alexa-sdk');
var constants = require('./constants');
var stateHandlers = require('./stateHandlers');
var audioEventHandlers = require('./audioEventHandlers');
// var ua = require('universal-analytics');
// var express = require('express');
// var app = express();

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.appId = constants.appId;
    alexa.dynamoDBTableName = constants.dynamoDBTableName;
    alexa.registerHandlers(
        stateHandlers.startModeIntentHandlers,
        stateHandlers.playModeIntentHandlers,
        stateHandlers.remoteControllerHandlers,
        stateHandlers.resumeDecisionModeIntentHandlers,
        audioEventHandlers
    );
    alexa.execute();
};

// app.intent('myIntent', {
//   'slots': {
//     'INPUTDATE': 'AMAZON.DATE'
//   },
//   'utterances': ['my utterance']
// },
//   function(req, res) {
//     var inputDate = req.slot('INPUTDATE');
//     var intentTrackingID = ua('UA-105526975-1');
//     var reprompt = 'my reprompt phrase.';

//     if (_.isEmpty(inputDate)) {
//       var prompt = 'another prompt';
//       res.say(prompt).reprompt(reprompt).shouldEndSession(false).send();
//       // blank value outcome reported to Google Analytics
//       intentTrackingID.event("invalid request","blank value").send();
//       return true;
//     } else {
//       var myHelper = new MyHelper();

//       try {
//         var myVar = myHelper.myIntent(inputDate);
//         var formattedOutput = myHelper.formatMyIntentResponse(inputDate,myVar).toString();
//         res.say(formattedOutput).send();
//         // it works and outcome is reported to Google Analytics
//         var requestedData = ("inputDate: " + inputDate + " myVar: " + myVar).toString();
//         intentTrackingID.event("success", requestedData).send();

//       } catch (error) {
//         console.log("error", error);
//         var prompt = 'Something is not functioning properly';
//         res.say(prompt).reprompt(reprompt).shouldEndSession(false).send();
//         // it fails outcome
//         intentTrackingID.event("error", error.toString()).send();
//       }
//       return false;
//     }
//   }
// );
