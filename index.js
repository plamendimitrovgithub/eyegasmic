export default () => {

    function PrettyConsole() {
        this.colors = {
            blue: { primaryFG: 'rgb(54, 130, 175)', primaryBG: 'rgb(196, 230, 251)', secondaryFG: 'rgb(155, 210, 242)', secondaryBG: 'rgb(234, 244, 250)' },
            green: { primaryFG: 'green', primaryBG: 'rgb(213, 232, 184)', secondaryFG: 'rgb(142, 191, 142)', secondaryBG: 'rgb(239, 249, 225)' },
            orange: { primaryFG: 'rgb(163, 116, 32)', primaryBG: 'moccasin', secondaryFG: 'orange', secondaryBG: 'papayawhip' },
            pink: { primaryFG: 'rgb(170, 83, 111)', primaryBG: 'lightpink', secondaryFG: 'rgb(246, 162, 177)', secondaryBG: 'rgb(255, 232, 237)' },
        }
        this.shape = 'padding: 0.2rem 1rem; border-radius: 4px';
        this.makeColorFunctions();
    }

    PrettyConsole.prototype.makeColor = function (palette) {
        const color = this.colors[palette];
        return ` color: ${color.primaryFG}; background-color: ${color.primaryBG}; `;
    };

    PrettyConsole.prototype.getColors = function () {
        return Object.keys(this.colors);
    };

    /**
     * Populating the console object with color-functions for every color of the colors-object
     */
    PrettyConsole.prototype.makeColorFunctions = function () {
        this.getColors().forEach((color) => {
            this[color] = function (tag) {
                return console.log.bind(console, `%c${tag}`, this.makeColor(color) + this.shape);
            };
        });
    };

    PrettyConsole.prototype.help = function () {
        this.getColors().forEach((color) => {
            this[color](color)(`pretty.${color}(${color})('pretty.${color}(${color})(arbitrary additional parameters')`);
        });
    };

    return new PrettyConsole();
}

// module.exports = initiatePretty;
// export  initiatePretty;

// const pretty = initiatePretty();
// pretty.help();