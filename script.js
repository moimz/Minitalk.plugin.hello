/**
 * 이 파일은 미니톡 자동인사 플러그인의 일부입니다. (https://www.minitalk.io)
 *
 * 미니톡 접속시 자동으로 환영메시지를 보여줍니다.
 * 
 * @file /plugins/hello/script.js
 * @author Arzz (arzz@arzz.com)
 * @license MIT License
 * @version 1.0.0
 * @modified 2021. 1. 24.
 */
if (Minitalk === undefined) return;

Minitalk.on("connect",function(minitalk,channel,user) {
	Minitalk.ui.printSystemMessage("plugin",user.nickname + "님, " + channel.title + " 채널에 접속하신 것을 환영합니다.");
});