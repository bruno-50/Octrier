﻿//Contact data class methods.model.Contact = {};//*** Methodsmodel.Contact.methods = {};//Eventsmodel.Contact.events = {};model.Contact.events.onInit = function() {	var myCurrentUser = currentUser(), // we get the user of the current session.		myUser = ds.User.find("ID = :1", myCurrentUser.ID);		if ((myCurrentUser !== null) && (myUser !== null)) {//if a user is logged in.				this.owner = myUser;	}};model.Contact.events.onRestrictingQuery = function() {	var myCurrentUser = currentUser(), // we get the user of the current session.		sessionRef = currentSession(), // Get session.		result;			result = ds.Contact.createEntityCollection(); //default to empty collection.		if (sessionRef.belongsTo("Administrator")) {		result = ds.Contact.all();	} else {		result = ds.Contact.query("owner.ID = :1", myCurrentUser.ID);	}		return result;};