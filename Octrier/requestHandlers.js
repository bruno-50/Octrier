﻿//Request Handlers//*** Best Pratice ***function exportDataClass(request, response) {	response.contentType = 'text/csv'; //Let the browser know we want it to save our results to a file.	var columns = [], exportDataClassName = "", classNames = [], 	curClass, dataclassCollection, currentDataclass, exportData = "";		columns = request.url.split("/");	exportDataClassName = columns[2];		for (var dataClassName in ds.dataClasses) { 		classNames.push (dataClassName); // get all the dataclass names.	}		//If the request is for a valid dataclass then export the data.	var classNameIndex = classNames.indexOf(exportDataClassName);	if (classNameIndex !== -1) {		currentDataclass = ds.dataClasses[exportDataClassName];				dataclassCollection = currentDataclass.all();		dataclassCollection.forEach(function(theEntity) {			for (attr in theEntity) {				if (currentDataclass[attr].type === "string") { //Only export string attributes for our example.					exportData +=  theEntity[attr] + "\t";				}				}			exportData = exportData.substring(0, exportData.length -2); //remove the last tab.			exportData += "\n"; //add a line feed.		}); //end dataclassCollection.forEach	} //(classNameIndex !== -1)		return exportData; //send our csv file to the browser. :-)}//end *** Best Pratice ***//*** Anti-pattern ***//Export Leads function exportLeads(request, response) {	response.contentType = 'text/csv';	var exportData = "",		leads = ds.Lead.all();	leads.orderBy("lastName");	leads.forEach(function (lead) {		exportData +=  lead.firstName + "\t" + lead.lastName + "\t" + lead.title + "\n";	});	return exportData;}function exportContacts(request, response) {	response.contentType = 'text/csv';	var exportData = "",		contacts = ds.Contact.all();	contacts.orderBy("lastName");	contacts.forEach(function (contact) {		exportData +=  contact.firstName + "\t" + contact.lastName + "\t" + contact.title + "\n";	});	return exportData;}function exportAccounts(request, response) {	response.contentType = 'text/csv';	var exportData = "",		accounts = ds.Account.all();	accounts.orderBy("name");	accounts.forEach(function (account) {		exportData +=  account.name + "\t" + account.billingCity + "\t" + account.phone + "\n";	});	return exportData;}//end *** Anti-pattern ***