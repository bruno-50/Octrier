// A simple log for the output
 var log = "Count ville-before: " + ds.CodePostal.length;
 
  // Main function
 function doImportEmpsAndComps () {
     /*   The doc. to import is in the solution folder, in a subfolder
         named "Import". We load the full document in one shot  (loadText)
         and split it in an array (one line = one element).
     */
     var lines = loadText( ds.getModelFolder().path + "Import/code_postaux.txt" ).split("\n");
       /*   Declare the variable that will hold the columns of each line.
           We know the columns will be:
            columns[0]   Ville
            columns[1]   Code postal
            columns[2]   First name
            columns[3]   Salary
     */ 
   var columns = [];
       // Now, loop for each entry in the array 
lines.forEach( function(oneLine) { 
      // Get the columns for current line 
columns = oneLine.split("\t");   
 
      // Get the company. Create it if needed.
      var theComp = ds.CodePostal.find("Code = :1 and ville = :2", columns[0], columns[1]);
      if(theComp == null) { // Not found => create it
           theComp = new ds.CodePostal({
            Code : columns[0],
            ville : columns[1] 
         });
         // Save it 
         theComp.save();
           }  
      // Get the employee. Create it if needed.
/*       var theEmp = ds.CodePostal.find("ville = :1 and firstName = :2", columns[1], columns[2]);
      if(theEmp == null) {
         theEmp = new ds.Employee( {
            lastName    : columns[1],
            firstName    : columns[2],
            salary   : columns[3],
            company   : theComp // This is how you bind two entities with Wakanda!
         });
      } else {
         theEmp.salary = columns[3],
         theEmp.company = theComp;
      }
        theEmp.save();*/
     });
 }
 // Call the function
doImportEmpsAndComps ();
  
 // Log result
log += " / Count ville-after: " + ds.CodePostal.length;
var nbapres = ds.CodePostal.length;