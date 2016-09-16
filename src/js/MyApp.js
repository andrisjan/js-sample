var MyApp = (function () {
    var public = {};


    public.init = function(){
        $('#push-state').bind('click', perform);

        function perform(){
            console.log('Push the state!');
            var clientId = Math.random();
            window.history.pushState({}, '', '/clients/'+clientId);
        }
    };

    return public;
})();

