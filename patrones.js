// Implementación del patrón Singleton para el reproductor de música
const MusicPlayer = (function() {
    let instance;

    function createInstance() {
        let isPlaying = false;
        let currentSong = null;

        return {
            play: function(song) {
                if (!isPlaying) {
                    currentSong = song;
                    isPlaying = true;
                    console.log("Reproduciendo: " + song);
                } else {
                    console.log("Ya se está reproduciendo una canción.");
                }
            },
            pause: function() {
                if (isPlaying) {
                    isPlaying = false;
                    console.log("Pausa.");
                } else {
                    console.log("No hay ninguna canción reproduciéndose.");
                }
            },
            stop: function() {
                if (isPlaying) {
                    isPlaying = false;
                    currentSong = null;
                    console.log("Reproductor detenido.");
                } else {
                    console.log("No hay ninguna canción reproduciéndose.");
                }
            }
        };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Implementación del patrón Command para manejar las acciones del usuario
class MusicCommand {
    constructor(action) {
        this.action = action;
    }

    execute() {
        this.action();
    }
}

// Implementación del patrón MVC (Modelo-Vista-Controlador)
class Model {
    constructor() {
        this.currentSong = null;
        this.isPlaying = false;
    }

    setSong(song) {
        this.currentSong = song;
    }

    play() {
        this.isPlaying = true;
        console.log("Reproduciendo: " + this.currentSong);
    }

    pause() {
        this.isPlaying = false;
        console.log("Pausa.");
    }

    stop() {
        this.isPlaying = false;
        this.currentSong = null;
        console.log("Reproductor detenido.");
    }
}

class View {
    render(message) {
        console.log(message);
    }
}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    play(song) {
        this.model.setSong(song);
        this.model.play();
        this.view.render("Reproduciendo: " + song);
    }

    pause() {
        this.model.pause();
        this.view.render("Pausa.");
    }

    stop() {
        this.model.stop();
        this.view.render("Reproductor detenido.");
    }
}

// Uso de los patrones implementados
const model = new Model();
const view = new View();
const controller = new Controller(model, view);

const playCommand = new MusicCommand(() => controller.play("Canción 1"));
const pauseCommand = new MusicCommand(() => controller.pause());
const stopCommand = new MusicCommand(() => controller.stop());

playCommand.execute();
pauseCommand.execute();
stopCommand.execute();
