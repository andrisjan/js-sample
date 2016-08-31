var DepositModule = (function (){
    var pub = {};
    var _depositFormModel = new Model();

    pub.showDepositSection = function () {
        console.log("show deposit section: ");

        var form =
            '<table border="1">' +
                '<tr>' +
                    '<td>Name</td>' +
                    '<td> <input type="text" id="person_name" /> </td>' +
                '</tr>' +
                '<tr>' +
                    '<td>Deposit amount</td>' +
                    '<td> <input type="text" id="deposit_amount" /> </td>' +
                '</tr>' +
            '</table>';
        $('#deposit_container').append(form);
    };

    pub.processForm = function(){
        _depositFormModel.setPersonName('John');
        _depositFormModel.setAmount(453);
    };

    return pub;

})();