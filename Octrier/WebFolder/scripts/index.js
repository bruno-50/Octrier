

WAF.onAfterInit = function onAfterInit() {

// @region namespaceDeclaration
	var menuItem8 = {};	// @menuItem
	var menuItem7 = {};	// @menuItem
	var menuItem6 = {};	// @menuItem
	var menuItem5 = {};	// @menuItem
	var signUpButton = {};	// @button
	var menuItem4 = {};	// @menuItem
	var menuItem3 = {};	// @menuItem
	
	var loginButton = {};	// @button
	var logoutButton = {};	// @button

	var details = {};	// @menuItem
	var accueil = {};	// @menuItem
	var documentEvent = {};	// @document
// @endregion

// eventHandlers
//			$('#logout').hide();

	accueil.click = function accueil_click (event)
	{
$$('bodyComponent').loadComponent({path: '/accueil.waComponent'});
$('#moncompte').removeClass("active");
$('#accueil').addClass("active");
};

	moncompte.click = function moncompte_click (event)
	{
$$('bodyComponent').loadComponent({path: '/compte.waComponent'});
$('#accueil').removeClass("active");
$('#moncompte').addClass("active");
};
  
/*	menuItem8.click = function menuItem8_click (event)
	{
		$$('bodyComponent').loadComponent({path: '/underConstruction.waComponent'});
		$$('sideBarComponent').loadComponent({path: '/sideBar.waComponent', userData: {menuItem: "home"}});
		waf.widgets.menuBar1.crmSetSelectedMenuItem('menuItem8');
	};

	menuItem7.click = function menuItem7_click (event)
	{
		$$('bodyComponent').loadComponent({path: '/activity.waComponent'});
		$$('sideBarComponent').loadComponent({path: '/sideBar.waComponent', userData: {menuItem: "home"}});
		waf.widgets.menuBar1.crmSetSelectedMenuItem('menuItem7');
	};

	menuItem6.click = function menuItem6_click (event)
	{
		$$('bodyComponent').loadComponent({path: '/underConstruction.waComponent'});
		$$('sideBarComponent').loadComponent({path: '/sideBar.waComponent', userData: {menuItem: "home"}});
		waf.widgets.menuBar1.crmSetSelectedMenuItem('menuItem6');
	};

	menuItem5.click = function menuItem5_click (event)
	{
		$$('bodyComponent').loadComponent({path: '/underConstruction.waComponent'});
		$$('sideBarComponent').loadComponent({path: '/sideBar.waComponent', userData: {menuItem: "home"}});
		waf.widgets.menuBar1.crmSetSelectedMenuItem('menuItem5');
	};*/

	signUpButton.click = function signUpButton_click (event)
	{
		//Sign Up
		//*** Best Pratice ***
		// Use a local datasource object and bind it to the sign up input fields.
		// This will make it easy to change your interface without having to make a change to 
		// the signUp() function.
		alert("signup index.js");
//		debugger;
		crmUtil.signUp(signUpObj);
		
		//*** Anti-pattern ***
		//Don't assign the value directly from the input fields.
		/*
		var mySignUpObj = {
			name: $$('inputUsername').getValue(),
			email: $$('inputEmailAddress').getValue(),
			password: $$('iputPassword').getValue(),
			verifyPassword: $$('inputVerifyPassword').getValue()
		};
		
		crmUtil.signUp(mySignUpObj);
		*/
		//end *** Anti-pattern ***
	};

/*	menuItem4.click = function menuItem4_click (event)
	{
		//Contacts
		$$('bodyComponent').loadComponent({path: '/contacts.waComponent'});
		$$('sideBarComponent').loadComponent({path: '/sideBar.waComponent', userData: {menuItem: "contacts"}});
		//crmUtil.menuBarKeepHighlight('menuBar1', 'menuItem4');
		waf.widgets.menuBar1.crmSetSelectedMenuItem('menuItem4');
	};
*/
/*	menuItem3.click = function menuItem3_click (event)
	{
		//Accounts
		$$('bodyComponent').loadComponent({path: '/accounts.waComponent'});
//		$$('sideBarComponent').loadComponent({path: '/sideBar.waComponent', userData: {menuItem: "accounts"}});
		//crmUtil.menuBarKeepHighlight('menuBar1', 'menuItem3');
//		waf.widgets.menuBar1.crmSetSelectedMenuItem('menuItem3');
	};

	menuItem2.click = function menuItem2_click (event)
	{
		//Leads
//		$$('bodyComponent').loadComponent({path: '/leads.waComponent'});
		$$('bodyComponent').removeComponent();
//		$$('sideBarComponent').loadComponent({path: '/sideBar.waComponent', userData: {menuItem: "leads"}});
		//crmUtil.menuBarKeepHighlight('menuBar1', 'menuItem2');
//		waf.widgets.menuBar1.crmSetSelectedMenuItem('menuItem2');
	};

	menuItem1.click = function menuItem1_click (event)
	{
		//Home
		$$('bodyComponent').loadComponent({path: '/accueil.waComponent'});
//		$$('sideBarComponent').loadComponent({path: '/sideBar.waComponent', userData: {menuItem: "home"}});
		//crmUtil.menuBarKeepHighlight('menuBar1', 'menuItem1');
//		waf.widgets.menuBar1.crmSetSelectedMenuItem('menuItem1');
	};*/
		function toggleLogin(toggle) {
//			debugger;
$('#loginNameTextField').val("");
$('#loginPasswordTextField').val("");

		if (toggle == "logout") {
			$('#moncompte').hide();
			$('#logout').hide();
			$('#login').show();
$$('bodyComponent').loadComponent({path: '/accueil.waComponent'});
		} else {
			$('#moncompte').show();
$('#logoutMsg').replaceWith("<h1 class="+"status"+" id="+"logoutMsg"+">Bienvenue " + waf.directory.currentUser().fullName +"</h1>"); 
$('#logoutMsg').css("font-size","24px");	
			$('#login').hide();
			$('#logout').show();
$$('bodyComponent').loadComponent({path: '/details.waComponent'});
$('#accueil').removeClass("active");
		}
	}

	function signIn() {
		if (waf.directory.loginByPassword($('#loginNameTextField').val(), $('#loginPasswordTextField').val())) {
			//Our user signed in successfully.
/*			$$(errorMsg).setValue("");
			$('#loginNameTextField').focus();*/
			toggleLogin("login");
/*$$('bodyComponent').loadComponent({path: '/details.waComponent'});
//			waf.widgets.bodyComponent.loadComponent({path: '/details.waComponent'}); 
//			$$('sideBarComponent').loadComponent({path: '/sideBar.waComponent', userData: {menuItem: "home"}}); 
			//crmUtil.menuBarKeepHighlight('menuBar1', 'menuItem1');
//			waf.widgets.menuBar1.crmSetSelectedMenuItem('menuItem1');
			
			//Create the Event Handler for the Recent Items.
//			crmUtil.setRecentItemsEventHandler();
			//Create Quick Add Return Key Event Handler.
/*			crmUtil.setQuickAddAccountReturnKey();
			crmUtil.setQuickAddContactReturnKey();
			crmUtil.setQuickAddLeadReturnKey();
*/			
			//Load the recent items into our recent items container.
/*			crmUtil.loadRecentItems('recentItemsBodyContainer');
			
			waf.sources.account.all();
			waf.sources.contact.all();
			waf.sources.lead.query("converted == false");
			waf.sources.activity.all();
*/			
		} else {
			
			$('#errorMsg').attr("data-content","Pseudo ou Mot de Passe invalide");
			$('#loginNameTextField').focus();
			$('#errorMsg').popover('show');
			setTimeout(function() { $('#errorMsg').popover('hide');}, 5000);
//			$$(statusMsg).setValue("");
		}
		
		
	}

//$('#loginButton').click(function() {
	loginButton.click = function loginButton_click (event)	{
		signIn();
	};

//$('#logoutButton').click(function() {
	logoutButton.click = function logoutButton_click (event)	{
//			alert("déconnexion index.js");
		if (WAF.directory.logout()) {
//			alert("déconnexion index.js");
//			$$("signUpMessage").setValue("");
//			$('#headerContainerBackground').css('background', 'white');
//			$$("signUpContainer").show(); //show
//			$$("bodyContainer").hide(); //hide
			//sessionCurrentUser = waf.directory.currentUser(); // Set the current user to default.
			//Load the recent items into our recent items container.
			//crmUtil.loadRecentItems('recentItemsBodyContainer');
//			$('#recentItemsBodyContainer').html('');
//$$('bodyComponent').loadComponent({path: '/accueil.waComponent'});
//			waf.widgets.bodyComponent.loadComponent("accueil.waComponent");
			toggleLogin("logout");
			
/*			waf.sources.account.setEntityCollection();
			waf.sources.contact.setEntityCollection();
			waf.sources.lead.setEntityCollection();
			waf.sources.activity.setEntityCollection();*/
		}
	};

	documentEvent.onLoad = function documentEvent_onLoad (event)
	{
		if (waf.directory.currentUser() === null) { //WAF.directory.currentUser().fullName === "default guest"
			//No user is signed in.
//			alert("pas d'utilisateur connecté");
			toggleLogin("logout");

//			$('#loginContainerRef').show(200, function() {$$(loginNameTextField).focus();}); //show
//			$('#logoutContainerRef').hide(); //hide
		} else {
			//We have a user signed in.
//			alert("Bienvenue " + waf.directory.currentUser().nom); 	
			toggleLogin("login");
//			$('#loginContainerRef').hide(); //hide
//			$('#LogoutContainerRef').show(); //show
		}
		
		//Make return key trigger login when user name or password input fields have focus.
		$('#loginNameTextField' + '#loginPasswordTextField').live('keyup', function (e) {
	   		if ( e.keyCode == 13 ){
	   			signIn();
	    	}
		});
//debugger;
		//Let's make sure we load the owner with the Lead, Contact, and Account.
/*		waf.sources.lead.declareDependencies("owner");
		waf.sources.contact.declareDependencies("owner");
		waf.sources.account.declareDependencies("owner");
		waf.sources.activity.declareDependencies("owner");
		
		waf.widgets.menuBar1.crmGetSelectedMenuItem = function() {
			//Laurent: This function will allow me to determine which menuItem of menubar1 is highlighted.
			// Even if I navigate to another section without the user clicking on the menubar.
			return this.$domNode.children('li').index(this.$domNode.children('.crm-menuSelected2'));
		};
		
		waf.widgets.menuBar1.crmSetSelectedMenuItem = function(menuItem) {
			this.$domNode.find('div').removeClass('crm-menuSelected');//unhighlight all other menuitems div.
			this.$domNode.children('li').removeClass('crm-menuSelected2'); //unmark list item containers.
			this.$domNode.find('#' + menuItem + ' div').addClass('crm-menuSelected'); //highlight the selected menuitem div.
			this.$domNode.find('#' + menuItem).addClass('crm-menuSelected2'); //mark the selected menuitem container.
		};
		
		//Move our signup section into place.
		$("#signUpContainer").css("top", "80px");
		$("#signUpContainer").css("left", "0px");
		
		if (WAF.directory.currentUser() === null) {
			$$("signUpContainer").show(); //show
			$$("bodyContainer").hide(); //hide
			
		} else {
			$$("signUpContainer").hide(); //hide
			$$("bodyContainer").show(); //show	
		} //end - if (WAF.directory.currentUser() === null)
*/
	};//fin documentEvent.onLoad

// @region eventManager
/*	WAF.addListener("menuItem8", "click", menuItem8.click, "WAF");
	WAF.addListener("menuItem7", "click", menuItem7.click, "WAF");
	WAF.addListener("menuItem6", "click", menuItem6.click, "WAF");
	WAF.addListener("menuItem5", "click", menuItem5.click, "WAF");
	WAF.addListener("menuItem4", "click", menuItem4.click, "WAF");
	WAF.addListener("menuItem3", "click", menuItem3.click, "WAF");*/
	WAF.addListener("signUpButton", "click", signUpButton.click, "WAF");
	WAF.addListener("loginButton", "click", loginButton.click, "WAF");
	WAF.addListener("logoutButton", "click", logoutButton.click, "WAF");
	WAF.addListener("details", "click", details.click, "WAF");
	WAF.addListener("moncompte", "click", moncompte.click, "WAF");
	WAF.addListener("accueil", "click", accueil.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};


/*$('#accueil').click(function() {
$('#bodyComponent').fadeIn("slow");
$('#result').remove();
$('#accueil').addClass("active");
});
  
$('#details').click(function() {
$('#bodyComponent').after('<div id="result" style="margin-top: 60px;"></div>');	
$('#result').load('/details.waComponent/details.html');
$('#bodyComponent').fadeOut("slow");
$('#accueil').removeClass("active");
});
    
$('#inscription').click(function() {
$('#bodyComponent').after('<div id="result" style="margin-top: 60px;"></div>');	
$('#result').load('/profile.waComponent/profile.html');
$('#bodyComponent').fadeOut("slow");
$('#accueil').removeClass("active");
});

$('#loginButton').click(function(){
$('#example').popover('toggle');	
});
});*/