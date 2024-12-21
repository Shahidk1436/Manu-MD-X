//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    𝗠iss you dear.. life.                                                 //
//                                                                                                      //
//                                         Ｖ：7.0                                                       //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : Miss you dear..life.
//  * @author : M_Shahid
//  * @youtube : https://www.youtube.com/@ManulOfficialTech
//  * @description : Manu-MD ,A Multi-functional whatsapp user bot.
//*
//*
//base by M_Shahid
//GitHub: @shahidk1436
//WhatsApp: +923318794921
//   * Created By Github: shahidk1436
//    
// 
//
//

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Manu-MD&udsQxbJL#GkO8hzoJOBD5kZ3Kr46d8Li4jiCyErkat2UEB0Fw87o",
};
