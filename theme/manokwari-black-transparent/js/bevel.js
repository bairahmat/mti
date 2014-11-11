function RunBlankOnLinux() {
	Utils.run_command("exo-open --launch WebBrowser %u http://blankonlinux.or.id");
}
function RunDevBlankOnLinux() {
	Utils.run_command("exo-open --launch WebBrowser %u http://dev.blankonlinux.or.id");
}
function RunFacebook() {
	Utils.run_command("exo-open --launch WebBrowser %u https://www.facebook.com/");
}
function RunTwitter() {
	Utils.run_command("exo-open --launch WebBrowser %u https://twitter.com/");
}
//mocp
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function MocpStart(){
	Utils.run_command("mocp -S");
	Utils.run_command("mocp -u s");
	Utils.run_command("mocp -u r");
}
function MocpTitle(){
	sleep(100);
	Utils.run_command("mocptitle");
}

function MocpBackward(){Utils.run_command("mocp -r");MocpTitle();}
function MocpPause(){Utils.run_command("mocp -G");MocpTitle();}
function MocpPlay(){
	if(Utils.run_command("mocp -S") == false){
		Utils.run_command("mocp -S");
		Utils.run_command("mocp -p");
	}
	else{Utils.run_command("mocp -p");}
	
	MocpTitle();
}
function MocpStop(){Utils.run_command("mocp -s");sleep(1);MocpTitle();}
function MocpForward(){Utils.run_command("mocp -f");sleep(1);MocpTitle();}
function MocpRepeat(){Utils.run_command("mocp -t r");}
function MocpShuffle(){Utils.run_command("mocp -t s");}
function MocpOpen(){Utils.run_command("gnome-terminal -e mocp");}

$(document).ready(function() {
	$('#mocp').on('click', '#repeat', function(){
		if($('#repeat').hasClass("selected")){ $('#repeat').removeClass("selected");}
		else{$('#repeat').addClass("selected");}
	});
	$('#mocp').on('click', '#shuffle', function(){
		if($('#shuffle').hasClass("selected")){ $('#shuffle').removeClass("selected");}
		else{$('#shuffle').addClass("selected");}
	});
	
});



// gnome control center

function RunWallpaper() {
	Utils.run_command("gnome-control-center background");
}
function RunAccount() {
	Utils.run_command("gnome-control-center user-accounts");
}
function RunSound() {
	Utils.run_command("gnome-control-center sound");
}
function RunInfo() {
	Utils.run_command("gnome-control-center info");
}
function RunBluetooth() {
	Utils.run_command("gnome-control-center bluetooth");
}
function RunRegional() {
	Utils.run_command("gnome-control-center region");
}
function RunKeyboard() {
	Utils.run_command("gnome-control-center keyboard");
}
function RunPower() {
	Utils.run_command("gnome-control-center power");
}
function RunDate() {
	Utils.run_command("gnome-control-center datetime");
}
function RunDisplay() {
	Utils.run_command("gnome-control-center display");
}
function RunMouse() {
	Utils.run_command("gnome-control-center mouse");
}
function RunNetwork() {
	Utils.run_command("gnome-control-center network");
}
function RunOnline() {
	Utils.run_command("gnome-control-center online-accounts");
}
function RunPrinter() {
	Utils.run_command("gnome-control-center printers");
}
function RunShare() {
	Utils.run_command("gnome-control-center sharing");
}
