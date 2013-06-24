
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'profile';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var signUpButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	signUpButton.click = function signUpButton_click (event)// @startlock
	{// @endlock
		// Add your code here
//				alert("validation profile");	
				debugger;
//		var mydate = bodyComponent_signUpobj.dnaiss;
//		var thedate = formatDate(mydate, {locale: "fr"});
//		bodyComponent_signUpobj.dnaiss = thedate;			
//		crmUtil.profileUp(bodyComponent_profileObj);
//		crmUtil.signUp($comp.sources.signUpobj);
		// contrôle avant validation si ok envoi mail confirmation

	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_signUpButton", "click", signUpButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
