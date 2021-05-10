function Uploader() {

    this.read = function (inputid, formid, labelid) {
        file = document.getElementById(inputid).files[0];
        filereader = new FileReader();
        filereader.onload = function (event) {
            try {
                table = JSON.parse(event.target.result);
            }
            catch {
                alert("The file you are trying to upload don't\nfollow the standard JSON formatting!!");
                document.getElementById(formid).reset();
                updater.write(inputid, labelid);
                return;
            }
            if(typeof table.length == "undefined") {
                alert("Sorry! we don't accept the table\nformat you are trying to upload!!");
                document.getElementById(formid).reset();
                updater.write(inputid, labelid);
                return;
            }
            for(let i = 0; i < table.length; i++) {
                if(typeof table[i].length == "number") {
                    alert("Sorry! we don't accept the table\nformat you are trying to upload!!");
                    document.getElementById(formid).reset();
                    updater.write(inputid, labelid);
                    return;
                }
                if(Object.keys(table[i]).length != 4) {
                    alert("Sorry! we don't accept the table\nformat you are trying to upload!!");
                    document.getElementById(formid).reset();
                    updater.write(inputid, labelid);
                    return;
                }
                if((!Number.isInteger(table[i].userId)) || (table[i].userId <= 0)) {
                    alert("Sorry! we don't accept the table\nformat you are trying to upload!!");
                    document.getElementById(formid).reset();
                    updater.write(inputid, labelid);
                    return;
                }
                if((!Number.isInteger(table[i].id)) || (table[i].id <= 0)) {
                    alert("Sorry! we don't accept the table\nformat you are trying to upload!!");
                    document.getElementById(formid).reset();
                    updater.write(inputid, labelid);
                    return;
                }
                if(typeof table[i].title != "string") {
                    alert("Sorry! we don't accept the table\nformat you are trying to upload!!");
                    document.getElementById(formid).reset();
                    updater.write(inputid, labelid);
                    return;
                }
                if(typeof table[i].body != "string") {
                    alert("Sorry! we don't accept the table\nformat you are trying to upload!!");
                    document.getElementById(formid).reset();
                    updater.write(inputid, labelid);
                    return;
                }
            }
            alert("File validation was successful!\nWe are now uploading the file!");
            document.getElementById(formid).submit();
        };
        try {
            filereader.readAsText(file);
        }
        catch {
            alert("You haven't selected any file!\nPlease select a file to upload!");
        }
    };

}

function Updater() {

    this.write = function (inputid, labelid) {
        console.log('it works!!');
        file = document.getElementById(inputid).files[0];
        if(typeof file != 'undefined'){
            document.getElementById(labelid).innerHTML = '<a style="opacity: 0.9; color: green;"> '+ file.name +' </a>';
        }
        else {
            document.getElementById(labelid).innerHTML = '<a style="opacity: 0.8; color: red;"> Please browse to select from your computer! </a>';
        }
    };

}