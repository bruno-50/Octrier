// A simple log for the output
 var log = "Count ville-before: " + ds.CodePostal.length;
  // Main function
//var nbEnregistrements = ds.CodePostal.length;
ds.CodePostal.remove();
function resetAllAutoSequences(){         //datastore class method
    for (var e in ds.dataClasses){     //cycle through all classes in ds
        var theClass = ds.dataClasses[e];     //get a reference to a class
        var maxID = theClass.all().max('ID');     //find the largest value
        theClass.setAutoSequenceNumber(maxID + 1);     //reset the auto sequence
    }
}
resetAllAutoSequences();  
 // Log result
log += " / Count ville-after: " + ds.CodePostal.length;
var nbapres = ds.CodePostal.length;
