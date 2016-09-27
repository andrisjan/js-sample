var Model = (function (){
    var pub = {};

    var _name_text = '';
    var _amount_text = '';
    var _colors_dropdown = [];

    pub.init = function(){
        $('#person_name').on('input',function(){ // change paste keyup
            _name_text = $(this).val()
        });
        $('#deposit_amount').on('input',function(){ // change paste keyup
            _amount_text = $(this).val()
            console.log('amount: ' + _amount_text);
        });
        $('#fav_color').on('change', function() {
            _colors_dropdown = [];
            for (var colK in _colors_dropdown){
                if (_colors_dropdown[colK].key === $(this).val()){
                    _colors_dropdown[colK].selected = true;}
                else{
                    _colors_dropdown[colK].selected = false;}
            }
            console.log('_colors_dropdown: ' + JSON.stringify(_colors_dropdown));
        });
    };

    pub.setPersonName = function(name) {
        _name_text = name;
        $('#person_name').val(_name_text);
    };
    pub.setAmount = function(amount){
        _amount_text = amount;
        $('#deposit_amount').val(_amount_text);
    };
    pub.setFavColors = function(colors){
        for(var colKey in colors){
            var selColor = {
                key: colKey,
                val: colors[colKey],
                selected: false
            };
            _colors_dropdown.push(selColor);
            $('#fav_color').append($('<option/>', {
                value: selColor.key,
                text : selColor.val
            }));
        }
    };
    pub.getSelectedColor = function(){
        for (var colK in _colors_dropdown){
            if (_colors_dropdown[colK].selected === true){
                return _colors_dropdown[colK];
            }
        }
    };
    pub.getAmount = function(){
        return _amount_text;
    };



    return pub;

});