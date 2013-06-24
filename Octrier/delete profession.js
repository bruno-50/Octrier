

// A simple log for the output
 var log = "Count profession-before: " + ds.Profession.length;
  // Main function
//var nbEnregistrements = ds.CodePostal.length;
ds.Profession.remove();
function resetAllAutoSequences(){         //datastore class method
    for (var e in ds.dataClasses){     //cycle through all classes in ds
        var theClass = ds.dataClasses[e];     //get a reference to a class
        var maxID = theClass.all().max('ID');     //find the largest value
        theClass.setAutoSequenceNumber(maxID + 1);     //reset the auto sequence
    }
}
resetAllAutoSequences();  
 // Log result
log += " / Count profession-after: " + ds.Profession.length;
var nbapres = ds.Profession.length;
