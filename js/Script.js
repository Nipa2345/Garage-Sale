/*
    The function formSubmit() is called when the form "myform" is submitted by User.
    It should run some validations and show the output.
*/
function formSubmit() {

    // Fetch all the Values
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    var CardNumber = document.getElementById('cardNumber').value;
    var ExpiryMonth = document.getElementById('expiryMonth').value;
    var ExpiryYear = document.getElementById('expiryYear').value;
    var Table = document.getElementById('table').value;
    var Chair = document.getElementById('chair').value;
    var Speaker = document.getElementById('speaker').value;
    var Lamp = document.getElementById('lamp').value;
    var Fan = document.getElementById('fan').value;

    // To store all  errors and output at the end
    var errors = '';

    //Validation for Name, Email, Credit Card Number, ExpiryMonth and ExpiryYear
    //Name
    if (Name == '') {
        // show the errors
        errors += `Name is required <br>`;
    }
    else {
        // clear errors
        document.getElementById('errors').innerHTML = '';
    }

    //Email with specific format like: asfdasfd@laksjflsaf.com
    var EmailRegex = /^[a-zA-z0-9\.]{1,50}[\@][a-zA-z0-9\-]{1,60}[\.][a-zA-z]{2,3}$/;
    if (!EmailRegex.test(Email) || Email == '') {
        // concatenate error to error output
        errors += `Email should be in  correct format. <br>`;
    }

    //Credit CardNumber with specific format like this: xxxx-xxxx-xxxx-xxxx
    var CardRegex = /^[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
    if (!CardRegex.test(CardNumber) || CardNumber == '') {
        errors += `Card Number should be in correct format. <br>`;
    }
    
    //ExpiryMonth with specific format like this: MMM
    var ExpiryMonthRegex = /^[A-Z][A-Z][A-Z]$/;
    if (!ExpiryMonthRegex.test(ExpiryMonth) || ExpiryMonth == '') {
        errors += `Expiry Month should be in correct format. <br>`;
    }

    //ExpiryYear with specific format like this: yyyy
    var ExpiryYearRegex = /^[0-9][0-9][0-9][0-9]$/;
    if (!ExpiryYearRegex.test(ExpiryYear) || ExpiryYear == '') {
        errors += `Expiry Year should be in correct format. <br>`;
    }

    //Validation for All Items and Items should be in a number only.
    if (isNaN(Table)) {
        errors += `Quantity of Table should be a number <br>`;
    }
    if (isNaN(Chair)) {
        errors += `Quantity of Chair should be a number <br>`;
    }
    if (isNaN(Speaker)) {
        errors += `Quantity of Speaker should be a number <br>`;
    }
    if (isNaN(Lamp)) {
        errors += `Quantity of Lamp should be a number <br>`;
    }
    if (isNaN(Fan)) {
        errors += `Quantity of Fan should be a number <br>`;
    }

    // This is for an Errors and It will checks if errors is not empty
    if (errors != '') {       
        
        document.getElementById('errors').innerHTML = errors;
        document.getElementById('formResult').innerHTML = '';
    }
    else 
    {
        document.getElementById('errors').innerHTML = '';

        //Only the last 4 digits of the credit card
        var fourdigit = CardNumber.substr(-4);

        // Output:
        var myOutput = `Thank you! <br>`;
        myOutput += `-------------Receipt-------------<br>
                    Name                : ${Name} <br>
                    Eamil               : ${Email} <br>
                    Credit CardNumber   : **** **** **** ${fourdigit} <br><br>
        `;

        //Calculations
        var Cost = 0; 
        var tableCost = 20;
        var chairCost = 15;
        var speakerCost = 20;
        var lampCost = 10;
        var fanCost = 10;

        if (Table != '') {
            Cost += Table * tableCost;
            myOutput += `Table &nbsp &nbsp &nbsp = ${Table} * $${tableCost} = $${Table * tableCost} <br>`     
        }
        if (Chair != '') {
            Cost += Chair * chairCost;
            myOutput += `Chair &nbsp &nbsp &nbsp = ${Chair} * $${chairCost} = $${Chair * chairCost} <br>`
        }
        if (Speaker != '') {
            Cost += Speaker * speakerCost;
            myOutput += `Speaker &nbsp= ${Speaker} * $${speakerCost} = $${Speaker * speakerCost} <br>`
        }
        if (Lamp != '') {
            Cost += Lamp * lampCost;
            myOutput += `Lamp &nbsp &nbsp &nbsp= ${Lamp} * $${lampCost} = $${Lamp * lampCost} <br>`
        }
        if (Fan != '') {
            Cost += Fan * fanCost;
            myOutput += `Fan &nbsp &nbsp &nbsp &nbsp = ${Fan} * $${fanCost} = $${Fan * fanCost} <br>`
        }
       
        /* Calculation the donation amount based on the total purchase the Item.*/ 
        var tenPercentValue = Cost * 0.1;
        var donation = 0;
         
        if (tenPercentValue > 10) {
            totalCost = Cost + tenPercentValue;
            donation = tenPercentValue;
            myOutput += `Donation: &nbsp Max: &nbsp $${donation.toFixed(2)} <br>`;  
        }
        else {
            donation = 10;
            myOutput += `Donation: &nbsp Min: &nbsp $${donation.toFixed(2)} <br>`;  
        }
        totalCost = Cost + donation;
        myOutput += `TotalCost: &nbsp &nbsp &nbsp &nbsp &nbsp  $${totalCost.toFixed(2)} <br>`;
        document.getElementById('formResult').innerHTML = myOutput;
    }
    return false;
}


