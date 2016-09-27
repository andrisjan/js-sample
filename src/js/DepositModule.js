var DepositModule = (function (){
    var pub = {};
    var _depositFormModel = new Model();

    pub.showDepositSection = function () {
        console.log("show deposit section: ");
        var form = $('#sample-template').html();
        var button = $('#sample-sub-template').html();

        $('#deposit_container').append(form);
    };

    pub.processForm = function(){
        _depositFormModel.init();
        _depositFormModel.setPersonName('John');
        _depositFormModel.setAmount(453);
        var colors = ['red', 'gree', 'blue', 'white'];
        _depositFormModel.setFavColors(colors);
    };

    pub.getAmount = function(){
        console.log('amount: ' + _depositFormModel.getAmount());
    };

    pub.getSelectedColor = function(){
        console.log('selectedColor: ' + JSON.stringify(_depositFormModel.getSelectedColor()));
    };

    return pub;

})();