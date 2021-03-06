// Dom7
var $ = Dom7;

$('.open-alert').on('click', function() {
    app.dialog.alert('Hola Mario');
});

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
    theme = document.location.search.split('theme=')[1].split('&')[0];
}

//let url = 'http://www.apichalupa.local';
let url = 'https://chapi.cperezni.com';
let basetimeLeft = 15; //Segundos para pasar a otra pregunta!
let game_id = 0;
let prev_challenge = 0;
let preloader = null;
let answer = null;
let score_id = null;
let question_id = null;
let gameLive = null;
let waiting = null;
let gauge = null;
let info_game = null;
let timeLeft = basetimeLeft;
let progress = null;

// Init App
let app = new Framework7({
    id: 'io.framework7.testapp',
    root: '#app',
    theme: theme,   
    dialog: {
        title: 'TecnoChalupa',
        buttonOk: 'Ok',
        buttonCancel: 'Cancelar',
        progressTitle : 'Cargando ... ',
        autoFocus: !0,
        usernamePlaceholder	: 'Nombre',
        passwordPlaceholder	: 'Código del juego',
      },
    data: function() {
        return {
            user: {
                firstName: 'John',
                lastName: 'Doe',
            },
        };
    },
    on: {
        smartSelectClose : function (a){
            let self = this;
            let score = 1;
            score_id = a.getValue();
            self.request({
                url: url + '/scores/' + score_id,
                data: {score, question_id},
                dataType: 'json',
                contentType: "application/json",
                method: 'PUT',
                success: function (res, status, xhr) {
                },
                error: function (xhr, status) {

                }
            });
        }
    },
    methods: {
        sendDataPartner: function (score) {

        },
        /* ESTE METODO ES INVOCADO DESDE EL INDEX (SALIR) */
        salir: function() {
            app.dialog.confirm('¿Quiere salir de la aplicación?', 'Cerrar TecnoChalupa', function() {
                navigator.app.clearHistory();
                navigator.app.exitApp();
            });

        },
        playMusic: function() {
            var self = this;
            audioPrueba.play();
        },
        muteMusic: function() {
            var self = this;
            audioPrueba.pause();
        },

        yourName: function(){
                  app.dialog.prompt('What is your name?', function(name) {
                    app.dialog.confirm('Are you sure that your name is ' + name + '?', function() {
                        app.dialog.alert('Ok, your name is ' + name);
                    });
                });
        
        }

    },
    routes: routes,
    popup: {
        closeOnEscape: true,
    },
    sheet: {
        closeOnEscape: true,
    },
    popover: {
        closeOnEscape: true,
    },
    actions: {
        closeOnEscape: true,
    },
    vi: {
        placementId: 'pltd4o7ibb9rc653x14',
    },
});

Framework7.request.setup({
    headers: {
      //'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    }
});

