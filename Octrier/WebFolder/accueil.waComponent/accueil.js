
(function Component (id) {// @lock

// Add the code that needs to be shared between components here


function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'acceuil';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$comp.sources.varsign.nom = false;
	$comp.sources.varsign.prenom = false;
	$comp.sources.varsign.email = false;
	$comp.sources.varsign.pseudo = false;
	$comp.sources.varsign.passwd = false;

	// @region namespaceDeclaration// @startlock
	var textEmail = {};	// @textField
	var textPrenom = {};	// @textField
	var textNom = {};	// @textField
	var textVerify = {};	// @textField
	var textPseudo = {};	// @textField
	var signUpbutton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock


	textEmail.change = function textEmail_change (event)// @startlock
	{// @endlock
		var mytext = $$(getHtmlId('textEmail')).getValue();
		var mylabel = $$(getHtmlId('textEmail')).getLabel();
		if(mytext.length>9){
			$comp.sources.varsign.email = true;
			mylabel.setTextColor("#00ff00");
			}
		else {
			$comp.sources.varsign.email = false;
			mylabel.setTextColor("red");			
			}
	};// @lock

	textPrenom.change = function textPrenom_change (event)// @startlock
	{// @endlock
		var mytext = $$(getHtmlId('textPrenom')).getValue();
		var mylabel = $$(getHtmlId('textPrenom')).getLabel();
		if(mytext.length>2){
			$comp.sources.varsign.prenom = true;
			mylabel.setTextColor("#00ff00");
			}
		else {
			$comp.sources.varsign.prenom = false;
			mylabel.setTextColor("red");			
			}
	};// @lock

	textNom.change = function textNom_change (event)// @startlock
	{// @endlock
		var mytext = $$(getHtmlId('textNom')).getValue();
		var mylabel = $$(getHtmlId('textNom')).getLabel();
		if(mytext.length>2){
			$comp.sources.varsign.nom = true;
			mylabel.setTextColor("#00ff00");
			}
		else {
			$comp.sources.varsign.nom = false;
			mylabel.setTextColor("red");			
			}
	};// @lock
	
	

	textVerify.change = function textVerify_change (event)// @startlock
	{// @endlock
		var mytext = $$(getHtmlId('textPasswd')).getValue();
		$comp.sources.varsign.passwd = false;
		var mylabel = $$(getHtmlId('textVerify')).getLabel();
		var mylabel1 = $$(getHtmlId('textPasswd')).getLabel();
				
		if(mytext == ($$(getHtmlId('textVerify')).getValue()) && mytext.length > 7)
		{
		$comp.sources.varsign.passwd = true;
		mylabel.setTextColor("#00ff00");
		mylabel1.setTextColor("#00ff00")
		}		
		else 	{
		$comp.sources.varsign.passwd = false;
			if(mytext.length < 8)$$(getHtmlId('errsignmsg')).setValue("Votre Mot de passe doit comporter au minimum 7 caractères et un chiffre");
			else $$(getHtmlId('errsignmsg')).setValue("Mot de passe et confirmation différents");
		$$(getHtmlId('textPasswd')).setValue("");
		mylabel1.setTextColor("red");		
		$$(getHtmlId('errsignmsg')).show();
		setTimeout(function() { $$(getHtmlId('errsignmsg')).hide();}, 3000);
		$$(getHtmlId('textPasswd')).focus();
		}
	};// @lock

	textPseudo.change = function textPseudo_change (event)// @startlock
	{// @endlock
		var mytext = $$(getHtmlId('textPseudo')).getValue();
		var mylabel = $$(getHtmlId('textPseudo')).getLabel();
		$comp.sources.varsign.pseudo = false;		
		if(mytext.length < 5){
		$$(getHtmlId('errsignmsg')).setValue("Vous Pseudo doit comporter au minimum 5 caractères");
			}
		else {
				ds.User.query("pseudo = :1", mytext , { onSuccess:function(event) {
        		var myCollection = event.entityCollection;
				$comp.sources.user.setEntityCollection(myCollection);
				if(myCollection.length){
				$$(getHtmlId('errsignmsg')).setValue("Ce Pseudo est déjà utilisé");
				$$(getHtmlId('textPseudo')).setValue("");
				}
				else {
					$comp.sources.varsign.pseudo = true;
					mylabel.setTextColor("#00ff00");
					$$(getHtmlId('errsignmsg')).setValue("");
//					alert($comp.sources.varsign.pseudo);
					return;
					}
			}
		 });
	}
		mylabel.setTextColor("red");
		$$(getHtmlId('textPseudo')).focus();
		$$(getHtmlId('errsignmsg')).show();
		setTimeout(function() { $$(getHtmlId('errsignmsg')).hide();}, 3000);

	};// @lock

	signUpbutton.click = function signUpbutton_click (event)// @startlock
	{// @endlock
		var err = 0;
		if(!$comp.sources.varsign.email) err= 3;
		if(!$comp.sources.varsign.prenom) err= 2;
		if(!$comp.sources.varsign.nom) err= 1;
		if(!err && $comp.sources.varsign.pseudo && $comp.sources.varsign.passwd){
//			alert($comp.sources.signUpobj.nom);
		crmUtil.signUp(bodyComponent_signUpobj);
								
//		crmUtil.signUp(bodyComponent_signUpobj);
			}
		else {
		switch (err) {
			case 3 : 
				$$(getHtmlId('errsignmsg')).setValue("Vous devez saisir votre adresse mail");
				break;
			case 2 :
				$$(getHtmlId('errsignmsg')).setValue("Vous devez saisir votre Prénom");
				break;
			case 1 :
				$$(getHtmlId('errsignmsg')).setValue("Vous devez saisir votre Nom");
				break;
				}
			$$(getHtmlId('errsignmsg')).show();
			setTimeout(function() { $$(getHtmlId('errsignmsg')).hide();}, 3000);
			}
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_textEmail", "change", textEmail.change, "WAF");
	WAF.addListener(this.id + "_textPrenom", "change", textPrenom.change, "WAF");
	WAF.addListener(this.id + "_textNom", "change", textNom.change, "WAF");
	WAF.addListener(this.id + "_textVerify", "change", textVerify.change, "WAF");
	WAF.addListener(this.id + "_textPseudo", "change", textPseudo.change, "WAF");
	WAF.addListener(this.id + "_signUpbutton", "click", signUpbutton.click, "WAF");
	// @endregion// @endlock

	};// @lock

$('#bodyComponent_details').click(function() {
//$('#details').click(function() {
//	alert("détails");
$$('bodyComponent').loadComponent({path: '/details.waComponent'});
$('#accueil').removeClass("active");
});	
 // Slideshow 4
      $("#bodyComponent_slider4").responsiveSlides({
//$$(getHtmlId('slider4')).responsiveSlides({
        auto: true,
        pager: false,
        nav: false,
        speed: 500,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });


}// @startlock
return constructor;
})();// @endlock
