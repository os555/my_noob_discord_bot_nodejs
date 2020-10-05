const Discord = require('discord.js');
const client = new Discord.Client();
const whois = require('whois');
const request = require('request');
var parser = require('fast-xml-parser');
var he = require('he');
var util= require('util');
const { exec } = require('child_process');
var fs = require('fs');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
 // console.log(`Logged in as ${message.author.id}!`); to get owner id 
  // Your commands here

  // Result in: If the user's message contains

// We declare the prefix
var prefix = 'olo';
//Ignore all bots including this one	
if (message.author.bot) return;

// Help messege 
if(message.content.startsWith(prefix + "help")){
  message.channel.send(
    
    {embed: {
      color: 3447003,
      title: "OsBot Help..!!:",
      fields: [
        { name: "Command list", value: "prefix = olo \n Hi \n !roll : Roll the dice \n ຈວດ : Say ຈວດໆໆໆ \n !say : Say Messege \n !whoiss domain.com : get domain info\n !base64en : Encode base64\n !base64de : Decode base64\n !decrypt hash : Decrypt well know hashssss\n !ກິນຫຍັງດີ : To show random food menu.\n !google keyword : To show search from google ", inline: true},
       // { name: "Test 2", value: "AlsoLine1\nAlsoLine2\nAndLine3", inline: true}
      ]
    }
  }

  );
}

// The robot will answer this if a user does ?Help
if(message.content.startsWith("Hi")){
   message.channel.send("Hi "+ message.author.toString() + " ຫຳດຳ...");
};

if(message.content.includes('ໄປໃສ')){
  message.channel.send("อ๋อ..ก็ว่าจะไป    เรียนแต่งหน้า นั่งสมาธิ ดำน้ำ ปลูกปะการัง ทำอาหาร นวดสปา ปลูกป่า ดำนา ดูดิสนี่ออนไอซ์ แรลลี่ตีกอล์ฟ ล่องเรือ ส่องสัตว์ ช้อปปิ้ง ดูงิ้ว ดูละครเวที ดูคอนเสิร์ต ดินเนอร์ ทำขนม จัดดอกไม้ เที่ยวตลาดน้ำ เรียนถ่ายรูป ดูกายกรรม ชมเมืองเก่า เข้าสัมมนา ทัวร์ธรรมมะ เรียนเต้นแล้วก็ร้องเพลง");
};
// The robot will answer this if a user does ?Help
if(message.content.startsWith("ສະບາຍ")){
  message.channel.send("ສະບາຍດີ "+ message.author.toString() + " ແຂງ-ໃຫຍ່-ຍາວ-ບໍ່?");
};
// The robot will answer this if a user does ?Help
if(message.content.startsWith("ອັບດຸນ")){
  message.channel.send("ເອີ້ຍຍຍຍ...... ຖາມຫຍັງກະຕອບໄດ້...ຕອບໄດ້.....");
};
// The robot will answer this if a user does ?Help
if(message.content.startsWith("!roll")){
rolledNumber = Math.floor(Math.random() * 12) + 1;
let rollmsg = "ໝາກກະລ໋ອກຂອງ {0.author.mention} ແມ່ນ : " + rolledNumber
message.channel.send("ໝາກກະລ໋ອກຂອງ " + message.author.toString() +" ແມ່ນ : " + rolledNumber);
};

// The robot will answer this if a user type contain aord
if(message.content.includes('ຫນ້າຮັກ')){
  message.channel.send("ໂດຍຂອບໃຈຂ້ອຍຫນ້າຮັກຢູ່ແລ້ວ.... ອິອິ ^^");
};

//I wanna be a Hacker
if(message.content.includes('!ຢາກເປັນHacker')){
  message.channel.send("ເລີ່ມຕົ້ນດ້ວຍການອ່ານບົດຄວາມນີ້ເດີ້ https://medium.com/laohacker/%E0%BA%81%E0%BB%89%E0%BA%B2%E0%BA%A7%E0%BA%97%E0%BA%B3%E0%BA%AD%E0%BA%B4%E0%BA%94%E0%BA%AA%E0%BA%B9%E0%BB%88%E0%BA%81%E0%BA%B2%E0%BA%99%E0%BB%80%E0%BA%9B%E0%BA%B1%E0%BA%99%E0%BA%99%E0%BA%B1%E0%BA%81%E0%BB%80%E0%BA%88%E0%BA%B2%E0%BA%B0%E0%BA%A5%E0%BA%B0%E0%BA%9A%E0%BA%BB%E0%BA%9A-eccd420bd22f");
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Allow owner only to command 
if(message.author.id !== '502784280917966848') return;

//Detect the echo command
if (message.content.startsWith('!say ')){
		
  var echoMsg = message.content.split('!say ')[1];
  message.channel.send(echoMsg);
} 
var cmd = message.content
switch(cmd) {
  // !ping
  case 'ping':
  message.channel.send("ປ໋ອງ.");
  break;
  case 'command':
  message.channel.send("ສັ່ງຫຍັງລຸງ ຈັດມາ.");
  break;
  case 'ຈວດ':
  message.channel.send("ຈ້ວດ ຈ້ວດ ຈ້ວດ.");
  break;
  case 'hack':
  message.channel.send("ໃສ ໃສ? ໃຜຢາກຖືກແຮັກ ບອກມາໄວໄວໄວໄວ.");
  break;
  case 'ດີຫລາຍ':
  message.channel.send("ໂດຍໆໆ ດີໆໆໆ.");
  break;
  case 'roll':
      rolledNumber = Math.floor(Math.random() * 12) + 1;
      message.channel.send("ໝາກກະລ໋ອກ : " + rolledNumber);    
  break;

  // and case
}

//Encoding Base64
if (message.content.startsWith('!base64en ')){
  var input = message.content.split('!base64en ')[1];
   message.channel.send(Buffer.from(input).toString('base64'));
} 

//Decoding Base64
if (message.content.startsWith('!base64de ')){
  var input = message.content.split('!base64de ')[1];
   message.channel.send(Buffer.from(input, 'base64').toString('ascii'));

} 

// End mean Loops
});

client.login("YOUR_TOKEN_AUTH_HERE");
