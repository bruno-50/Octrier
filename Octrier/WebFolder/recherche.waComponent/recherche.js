
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'compte';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		$$(getHtmlId('checkEquipe')).check();
		$$(getHtmlId('checkEquipier')).clear();
		$$(getHtmlId('checkVille')).check();
		$$(getHtmlId('checDept')).clear();

	// @region namespaceDeclaration// @startlock
	var buttonRecherche = {};	// @button
	var checkSectActiv = {};	// @checkbox
	var checDept = {};	// @checkbox
	var checkVille = {};	// @checkbox
	var checkEquipier = {};	// @checkbox
	var checkEquipe = {};	// @checkbox
	var listeEquipiers = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	buttonRecherche.click = function buttonRecherche_click (event)// @startlock
	{// @endlock
		var theEquipier = '';
		var theDept = '';
		var msgRecherche = '';

		if($comp.sources.recherchobj.parequipe)
		{
				alert("recherche par équipe");
		//receherche dans la base équipe
		}
		else { //recherche par équipier dans la base user
			theEquipier = $comp.sources.recherchobj.equipier;
			if( theEquipier == null){
				$$(getHtmlId('msgRecherche')).setValue("Erreur : Vous n'avez pas sélectionné d'équipier");
				$$(getHtmlId('msgRecherche')).show();
				setTimeout(function() { $$(getHtmlId('msgRecherche')).hide();}, 3000);				
				return;
				}
		if($comp.sources.recherchobj.parville){
			theDept = $comp.sources.recherchobj.ville;
			if( theDept == null){
				$$(getHtmlId('msgRecherche')).setValue("Erreur : Vous devez sélectionner une ville");
				$$(getHtmlId('msgRecherche')).show();
				setTimeout(function() { $$(getHtmlId('msgRecherche')).hide();}, 3000);				
				return;
				}
			queryStr = "equipier = :1 and ville = :2";
			}
		else { //recherche par département
			theDept = $comp.sources.recherchobj.dept;
			if( theDept == null){
				$$(getHtmlId('msgRecherche')).setValue("Erreur : Vous devez saisir un Département");
				$$(getHtmlId('msgRecherche')).show();
				setTimeout(function() { $$(getHtmlId('msgRecherche')).hide();}, 3000);				
				return;
				}
			theDept = theDept + "*";
			queryStr = "equipier = :1 and codePost = :2";
			}
//	debugger;
			$$(getHtmlId('listeEquipiers')).hide();
			$$(getHtmlId('detailEquipier')).hide();
			ds.User.query(queryStr,theEquipier, theDept, { onSuccess:function(event) {
        		var myCollection = event.entityCollection;
				$comp.sources.user.setEntityCollection(myCollection);
				if(myCollection.length){
					$$(getHtmlId('listeEquipiers')).show();
					$$(getHtmlId('detailEquipier')).show();
				}
				else {
				$$(getHtmlId('msgRecherche')).setValue("Désolé aucun résultat suivant vos critères de recherche");
				$$(getHtmlId('msgRecherche')).show();
				setTimeout(function() { $$(getHtmlId('msgRecherche')).hide();}, 3000);
				}				
			}
		 });
	}
	
				
			
//var theGuy = ds.Employee.find("name = :1 and age > :2", theName, theAge);

	};// @lock

	checkSectActiv.click = function checkSectActiv_click (event)// @startlock
	{// @endlock
		if($$(getHtmlId('checkSectActiv')).getValue())
		$$(getHtmlId('comboactiv')).hide();
		else
		$$(getHtmlId('comboactiv')).show();		
	};// @lock

	checDept.click = function checDept_click (event)// @startlock
	{// @endlock
		if($$(getHtmlId('checDept')).getValue())
		{
		$$(getHtmlId('textDept')).hide();
		$$(getHtmlId('comboparville')).show();
		$$(getHtmlId('checkVille')).check();
		}
		else {
		$$(getHtmlId('comboparville')).hide();
		$$(getHtmlId('checkVille')).clear();
		$$(getHtmlId('textDept')).show();
		}
	};// @lock

	checkVille.click = function checkVille_click (event)// @startlock
	{// @endlock
		if($$(getHtmlId('checkVille')).getValue()){
		$$(getHtmlId('comboparville')).hide();
		$$(getHtmlId('textDept')).show();
		$$(getHtmlId('checDept')).check();
		}		
		else {
		$$(getHtmlId('textDept')).hide();
		$$(getHtmlId('checDept')).clear();
		$$(getHtmlId('comboparville')).show();
			}
	};// @lock

	checkEquipier.click = function checkEquipier_click (event)// @startlock
	{// @endlock
//		alert($$('bodyComponent_checkEquipier').getValue());
		if($$(getHtmlId('checkEquipier')).getValue())
		{
		$$(getHtmlId('comboequipier')).hide();
		$$(getHtmlId('checkEquipe')).check();
		}
		else {
		$$(getHtmlId('comboequipier')).show();
		$$(getHtmlId('checkEquipe')).clear();
		}
	};// @lock

	checkEquipe.click = function checkEquipe_click (event)// @startlock
	{// @endlock
		if($$(getHtmlId('checkEquipe')).getValue()){
		$$(getHtmlId('comboequipier')).show();
		$$(getHtmlId('checkEquipier')).check();
		}		
		else {
		$$(getHtmlId('comboequipier')).hide();
		$$(getHtmlId('checkEquipier')).clear();		
			}

	};// @lock

	listeEquipiers.onRowDblClick = function listeEquipiers_onRowDblClick (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	listeEquipiers.onRowClick = function listeEquipiers_onRowClick (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_listeEquipiers", "onRowDblClick", listeEquipiers.onRowDblClick, "WAF");
	WAF.addListener(this.id + "_buttonRecherche", "click", buttonRecherche.click, "WAF");
	WAF.addListener(this.id + "_checkSectActiv", "click", checkSectActiv.click, "WAF");
	WAF.addListener(this.id + "_checDept", "click", checDept.click, "WAF");
	WAF.addListener(this.id + "_checkVille", "click", checkVille.click, "WAF");
	WAF.addListener(this.id + "_checkEquipier", "click", checkEquipier.click, "WAF");
	WAF.addListener(this.id + "_checkEquipe", "click", checkEquipe.click, "WAF");
	WAF.addListener(this.id + "_listeEquipiers", "onRowClick", listeEquipiers.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
