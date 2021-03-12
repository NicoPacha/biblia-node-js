function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function(tipoEvento , listener ) {
    this.events[tipoEvento] = this.events[tipoEvento] || [];
    this.events[tipoEvento].push(listener);
};

Emitter.prototype.emit = function(tipoEvento) {
    if (this.events[tipoEvento]) {
        this.events[tipoEvento].forEach(listener => {
            listener();
        });
    }
};

module.exports = Emitter;