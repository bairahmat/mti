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

//music
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function MusicStart(){
	Utils.run_command("sed -i 's/repeat=TRUE//g' ~/.config/audacious/config"); //remove repeat
	Utils.run_command("sed -i 's/shuffle=TRUE//g' ~/.config/audacious/config"); //remove shuffle
}
//function MusicTitle(){
	//Utils.run_command("musictitle");	
	//sleep(100);
//}
//function MusicStatus($A){
	//Utils.run_command("notify-send --icon=audio-x-generic --expire-time=3000 'Music on Console' '"+$A+"'");
//}
function MusicPlay(){Utils.run_command("audacious -p");}
function MusicStop(){Utils.run_command("audacious -s");}
function MusicForward(){Utils.run_command("audacious -f");}
function MusicBackward(){Utils.run_command("audacious -r");}
function MusicPause(){Utils.run_command("audacious -u");}
function MusicOpen(){Utils.run_command("audacious");}
function MusicRepeat(){Utils.run_command("audtool --playlist-repeat-toggle");}
function MusicShuffle(){Utils.run_command("audtool --playlist-shuffle-toggle");}

$(document).ready(function() {
	$('#repeat').click(function(){
		if($('#repeat').hasClass("selected")){ $('#repeat').removeClass("selected");}
		else{$('#repeat').addClass("selected");}
	});
	$('#shuffle').click(function(){
		if($('#shuffle').hasClass("selected")){ $('#shuffle').removeClass("selected");}
		else{$('#shuffle').addClass("selected");}
	});
	$('#pause').click(function(){
		if($('#pause').hasClass("selected")){ $('#pause').removeClass("selected");}
		else{$('#pause').addClass("selected");}
	});
	
	// Hide menu
	var $zindex = 0;
	$('#thumb-1').click(function() {
		var $menu = $('#music');
			if ($menu.is(':visible')) {
				$menu.animate({top: -($menu.outerHeight() + 10)}, function() {
					$menu.hide();
					});
			}
			else {
				$zindex=$zindex + 1;
				$menu.show().css("z-index",$zindex);
				$menu.show().css("top", -($menu.outerHeight() + 10)).animate({top: 24});
			}
	});
	$('#thumb-2').click(function() {
		var $menu = $('#system_settings');
            if ($menu.is(':visible')) {
                $menu.animate({right: -($menu.outerWidth() + 10)}, function() {
                    $menu.hide();
                });
            }
            else {
				$zindex=$zindex + 1;
				$menu.show().css("z-index",$zindex);
				$menu.show().css("right", -($menu.outerWidth() + 10)).animate({right: 30});
			}
	});
	$('#thumb-3').click(function() {
		var $menu = $('#sosmed');
            if ($menu.is(':visible')) {
                $menu.animate({right: -($menu.outerWidth() + 10)}, function() {
                    $menu.hide();
                });
            }
            else {
				$zindex=$zindex + 1;
				$menu.show().css("z-index",$zindex);
				$menu.show().css("right", -($menu.outerWidth() + 10)).animate({right: 30});
			}
	});
});
