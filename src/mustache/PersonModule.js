var PersonModule = (function (){
    var pub = {};

    var _modelPersonList = {
        persons: []
    };

    var _modelNewPerson = {
        name: {
            value: '',
            class: ''
        },
        hair: {
            value: '',
            checked: ''
        },
        colors: [
            {id: '1', text: 'Red'},
            {id: '2', text: 'Blue'},
            {id: '3', text: 'Green', selected: 'selected'},
        ],
        selectedColor: ''
    };

    pub.init = function(){
        _modelPersonList.persons = [
            {name: 'Luke', surname: 'Dart'},
            {name: 'John', age: 43}
        ];
        createPersonList();
    };

    function createPersonList() {
        var personTemplate = $('#person-list-template').html();
        var rendered = Mustache.render(personTemplate, _modelPersonList);
        $('#container').empty().append(rendered);
        $('#add-new-person').bind('click', createNewPersonForm);
    }


    function createNewPersonForm(){
        var newPersonTemplate = $('#new-person-template').html();
        var rendered = Mustache.render(newPersonTemplate, _modelNewPerson);
        $('#container').empty().append(rendered);
        $('#go-back-to-list').bind('click', createPersonList);
        $('#create-new-person').bind('click', createNewPerson);
    }

    function createNewPerson(){
        _modelNewPerson.name.value = $('#person-name').val();
        _modelNewPerson.hair.value = $('#person-has-hair').is(':checked');
        _modelNewPerson.selectedColor =  $('#color-select').val();

        for (var c in _modelNewPerson.colors){
            var color = _modelNewPerson.colors[c];
            if (color.id === _modelNewPerson.selectedColor){
                color.selected = 'selected';
            }
            else {
                color.selected = '';
            }
        }

        if (_modelNewPerson.hair.value){
            _modelNewPerson.hair.checked = 'checked';
        }
        if (_modelNewPerson.name.value.length > 5){
            _modelNewPerson['name'].class = 'alert';
            createNewPersonForm();
        }
        else if (!_modelNewPerson.hair.value){
            alert('You must have hair!');
        }
        else{
            _modelPersonList.persons.push(
                {name: _modelNewPerson.name.value}
            );
            createPersonList();
        }
    }


    return pub;

})();