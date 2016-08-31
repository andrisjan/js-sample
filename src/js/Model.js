var Model = (function (){
    var pub = {};

    var name = '';
    var amount = 0;

    pub.setPersonName = function(name) {
            this.name = name;
            $('#person_name').val(this.name);
    };

    pub.setAmount = function(amount){
            this.amount = amount;
            $('#deposit_amount').val(this.amount);
    };



    return pub;

});