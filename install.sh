#!/bin/bash
# ==================================================================== #
NameApplications="Manokwari-Theme-Installer [MTI]"
Version="0.1.2"
Creator="Aris Winardi"
eMail="ariswinardy@gmail.com"
Forked="Blankon Manokwari Theme Changer Script | Ari Effendi | arieffendi@gmail.com"
License="GPLv3"
# ==================================================================== #
PWD=($(pwd))

function backup {
	if [ ! -d "$PWD/backup" ]; then
		mkdir "$PWD/backup"
	fi
	
	a="`date '+%F-%T'`" 
	b="$PWD/backup/$a"
	mkdir $b

	
	echo "Backup old theme to $b..."
	cp -rf /usr/lib/manokwari/system/* "$b"
	sudo rm -R /usr/lib/manokwari/system/* 
}
function install {
	echo "List of avaiable theme"
	echo ""

	FILE=($(ls theme/ | grep manokwari))

	for i in ${FILE[*]}; do
		echo " $(($COUNT+1)) $i"
		let COUNT++;
	done

	# Get file index =======================================================
	echo ""
	echo -n "Insert number of theme to install: "
	read index

	echo -n "Want backup old theme [Y/n]: "

	read backup

	if [[ ${FILE[$index-1]} != "" ]]; then
		# Backup old theme  ================================================
		if [[ $backup == "y" && $backup != "" ]]; then
			backup
		fi

		# Install new theme ================================================
		echo "Install new theme..."

		sudo cp -R $PWD/theme/${FILE[$index-1]}/* /usr/lib/manokwari/system/
		#cp -R $PWD/theme/${FILE[$index-1]}/* $PWD/contoh-install/

	
	fi
	
	# require ===============================
	echo "Install require for manokwari theme .... "
	ada=($(dpkg --get-selections | grep moc ))
	libnotify=($(dpkg --get-selections | grep libnotify-bin))
	mocptitle=($(ls /usr/local/bin | grep mocptitle))
	
	
	if [ !  "$ada" ]; then
		echo " Installing moc .... "
		sudo apt-get install moc
	fi
	
	if [ !  "$libnotify" ]; then
		echo " Installing libnotify-bin .... "
		sudo apt-get install libnotify-bin
	fi
	
	if [ ! "$mocptitle" ]; then
		echo " Installing mocptitle .... "
		sudo cp "$PWD/requirement/mocptitle" /usr/local/bin/mocptitle
	fi
	
	
		echo "Restart manokwari..."
		killall manokwari
		
	echo "Succes Install Manokwari theme..."
}
function restore {
	echo "List of avaiable restore "
	echo ""

	FILE=($(ls backup/ ))

	for i in ${FILE[*]}; do
		echo " $(($COUNT+1)) $i"
		let COUNT++;
	done

	# Get file index =======================================================
	echo ""
	echo -n "Insert number of theme to restore: "
	read index

	if [[ ${FILE[$index-1]} != "" ]]; then
		# Backup old theme  ================================================
		

		# Install new theme ================================================
		echo "Restore theme..."

		sudo cp -R $PWD/backup/${FILE[$index-1]}/* usr/lib/manokwari/system/
		#cp -R $PWD/backup/${FILE[$index-1]}/* $PWD/contoh-restore/

		echo "Restart manokwari..."
		killall manokwari
	fi

	echo "Succes restore Manokwari theme..."
}


function menu {
	echo "=================================================================="
	echo "  $NameApplications | $Version"
	echo "  $Creator | $eMail"
	echo "------------------------------------------------------------------"
	echo "You can use following function"
	echo ""
	echo " 1 Install new manokwari theme"
	echo " 2 Backup manokwari theme"
	echo " 3 Restore manokwari theme"
	echo ""
	echo " Q Quit"
	echo ""
}

menu
echo -n "Enter option number and press [ENTER]: "
read option	

case $option in
	1)
		install
		;;
	2)
		backup
		;;
	3)
		restore
		;;
	q|Q)
		exit
		;;
	esac

echo -n	"Press [ENTER] to quit..."
read end
