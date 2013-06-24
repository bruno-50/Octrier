 var log = "Count ville-before: " + ds.CodePostal.length;
function importUsers(){
    var theFile = File(application.getFolder("path") + 'Import/' + 'code_postaux.txt');
        // getFolder() returns the project's folder
    var theStream = TextStream(theFile, "read",-2);
        // use TextStream() to get the contents of the text file
    var columns;
    while (!theStream.end()){
            // up to the end of the file
        columns = theStream.read("\n").split('\t');
            // get the contents and put them in an array
        var oneUser = new ds.CodePostal({
            // create an entity in the User datastore class
            Code : columns[0],
            ville : columns[1] 
            // assign a login/password by default
        });
        oneUser.save();     // save the user
    }
    theStream.close();
       // close the connection with the file
}
 // Call the function
importUsers ();

log += " / Count ville-after: " + ds.CodePostal.length;
var nbapres = ds.CodePostal.length;
