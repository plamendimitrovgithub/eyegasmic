export default (userColorsObject) => {

    const defaultColors = {
        blue: { primaryFG: 'rgb(54, 130, 175)', primaryBG: 'rgb(196, 230, 251)', secondaryFG: 'rgb(155, 210, 242)', secondaryBG: 'rgb(234, 244, 250)' },
        green: { primaryFG: 'green', primaryBG: 'rgb(213, 232, 184)', secondaryFG: 'rgb(142, 191, 142)', secondaryBG: 'rgb(239, 249, 225)' },
        orange: { primaryFG: 'rgb(163, 116, 32)', primaryBG: 'moccasin', secondaryFG: 'orange', secondaryBG: 'papayawhip' },
        pink: { primaryFG: 'rgb(170, 83, 111)', primaryBG: 'lightpink', secondaryFG: 'rgb(246, 162, 177)', secondaryBG: 'rgb(255, 232, 237)' },
    }


    function PrettyConsole(userColors) {
        this.colors = userColors || defaultColors;
        this.shape = this.makeShape();

        // populate the object with function-properties named after the colors-object's properties
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
     * This function creates dynamically a function-property for every property of the color-object.
     *
     * The purpose is to populate PrettyConsole with formatting functions, which the user can "define"
     */
    PrettyConsole.prototype.makeColorFunctions = function () {
        this.getColors().forEach((color) => {
            this[color] = function (tag, shape) {
                // the binding to console is needed so that the right "place of calling" is displayed (file:lineNumber)
                return console.log.bind(console, ...this.makeFormatting(tag, color, shape));
            };
        });
    };

    PrettyConsole.prototype.makeShape = function (shapeName) {
        switch (shapeName) {
            case 'round': { return 'padding: 0.2rem 1rem; border-radius: 4px'; }
            case 'edge': { return ' padding: 0.2rem 1rem; '; }
            default: { return 'padding: 0.2rem 1rem; border-radius: 4px'; }
        };
    };

    /**
     * Returns an array with all the parameters needed for coloring the tag.
     * All the array elements are then spread as paramaters of console.log.
     *
     * This approach makes it possible to generate multiple formattings like
     * console.log('%c tag %c timestamp' , formatsForTag, formatsForTimestamp, ...thingsToBeLogged);
     */
    PrettyConsole.prototype.makeFormatting = function (tag, color, shape) {
        return [`%c${tag}`, this.makeColor(color) + (!!shape ? this.makeShape(shape) : this.getShape())];
    };

    /**
     * Sets permanently the default shape for PrettyConsole. This way only the tag
     * should be entered, which saves typing.
     */
    PrettyConsole.prototype.setShape = function (shapeName) {
        this.shape = this.makeShape(shapeName);
    };

    /**
     * Gets the currently set default shape
     */
    PrettyConsole.prototype.getShape = function () {
        return this.shape;
    };

    /**
     * Prints out all the avaliable color-functions
     */
    PrettyConsole.prototype.help = function () {
        this.getColors().forEach((color) => {
            this[color](color)(`pretty.${color}(${color})('some', 'other', window, 'parameters)`);
        });
    };

    return new PrettyConsole(userColorsObject);
}