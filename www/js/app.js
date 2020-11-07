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

// Init App
var app = new Framework7({
    id: 'io.framework7.testapp',
    root: '#app',
    theme: theme,
    data: function() {
        return {
            user: {
                firstName: 'John',
                lastName: 'Doe',
            },
        };
    },
    methods: {
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

    /*     on:{
            pageInit: function (page) {
                var self = this;
                $('.galeria__img').click(function (e) {
                    var img = e.target.src; //se selecciona la foto a la que se hace click (target) y su ruta (src)
                    console.log(img);
                    var modal = '<div class="modal" id="modal"><img src="' + img + '" class="modal__img"><div class="modal__boton" id="modal__boton">X</div></div>';
                    $('.aver').append(modal);
                    $('#modal__boton').click(function () {
                        $('#modal').remove();
                    })
                })

                $(document).keyup(function (e) {
                    if (e.which == 27) {
                        $('#modal').remove();
                    }
                })
            
            }
        }, */

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

