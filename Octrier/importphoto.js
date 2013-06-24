 /*       myuser = new ds.User({
            firstName: randomData.firstName,
            lastName: lastName,
            gender: randomData.gender,
            manager: manager,
            title: title,
            salary: salary,
            birthDate: new Date(randomInteger(1950, 1991), randomInteger(0, 11), randomInteger(1, 28)),
            company: company
        });
        employee.save();*/
        // select a random picture based on the employee ID
/*        photoName = '000' + ((employee.ID % 150) + 1);
        photoName = photoName.substr(photoName.length - 3);
        employee.photo = photoPrefix[employee.gender] + photoName + '.jpg';
        employee.save();*/
var myuser = ds.User.find("nom == essai1");
myuser.photo =  File(application.getFolder("path") + 'Modules/Photos/' + 'Man_001.jpg');
myuser.save();