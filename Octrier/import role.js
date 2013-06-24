 var log = "Count Equipe-before: " + ds.ListeEquipiers.length;
function importUsers(){
    var theFile = File(application.getFolder("path") + 'Import/' + 'role.txt');
        // getFolder() returns the project's folder
    var theStream = TextStream(theFile, "read",-2);
        // use TextStream() to get the contents of the text file
    var columns;
    while (!theStream.end()){
            // up to the end of the file
        columns = theStream.read("\n").split('\t');
            // get the contents and put them in an array
        var oneUser = new ds.ListeEquipiers({
            // create an entity in the User datastore class
            equip : columns[0],
  //          ville : columns[1] 
            // assign a login/password by default
        });
        oneUser.save();     // save the user
    }
    theStream.close();
       // close the connection with the file
}
 // Call the function
importUsers ();

log += " / Count Equipe-after: " + ds.ListeEquipiers.length;
var nbapres = ds.ListeEquipiers.length;

