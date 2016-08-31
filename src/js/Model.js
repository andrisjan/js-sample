var Model = (function (){
    var pub = {};

    var name = '';
    var amount = 0;
    pub.init = function(){
        $('#deposit_amount').on('input',function(){ // change paste keyup
            amount = $(this).val()
            console.log(amount);
        });
    };

    pub.setPersonName = function(name) {
            name = name;
            $('#person_name').val(name);
    };
    pub.setAmount = function(amount){
            amount = amount;
            $('#deposit_amount').val(amount);
    };

    pub.getAmount = function(){
        return amount;
    };



    return pub;

});