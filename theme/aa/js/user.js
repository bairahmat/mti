var userAccountIsSetup = false;
var UserAccount = UserAccount || (function() {
    return {
        getIconFile: function() { return "user-icon.png" },
        getRealName: function() { return "Atias Wanggai" },
        getHostName: function() { return "manokwari" }
    }
});
var setupUserAccount = function() {

        var e = $("#userAccount");
        e.css("bottom", "0px");
        e.find("img").attr("src", userAccount.getIconFile());
        e.find("h1").text(userAccount.getRealName());
        e.find("span").text(userAccount.getHostName());

        if (userAccountIsSetup) 
            return;

        e.on("click", function() {
            Utils.run_desktop("/usr/share/applications/gnome-user-accounts-panel.desktop");
        });
        userAccountIsSetup = true;
    }
var menu = (function() {
  
    var userAccount = new UserAccount();
    var prepareShow = function() {
        setupUserAccount();
        $("#first").css("left", "0px");
    }
    var prepareHide = function() {
        changePage($("#first"), {
            transition: "none"
        });
        hidePopup();
        $("#first").addClass("ui-animation-slide");
        var e = $("#userAccount");
        e.css("bottom", -e.height());
        $("#first").css("left", "-" + window.outerWidth + "px");
    }
    var setup = function() {

        $("body").keydown(handleKeyDown);
        setupUserAccount();
    }
    
    

})();
