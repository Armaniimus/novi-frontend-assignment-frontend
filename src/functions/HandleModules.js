export default class HandleModules {
    styles = null;
    
    constructor(styles) {
        this.styles = styles;
    }

    get(className) {
        if (className === undefined) {
            console.error('no className was given')
        } else if (this.styles !== null) {
            let classNames = '';
            const classArray = className.split(' ');
            for (let i=0; i<classArray.length; i++) {
                const styleName = this.styles[classArray[i]];
                if (styleName !== undefined) {
                    classNames += ' ' + styleName;
                }
            }

            return classNames;
        } else {
            console.error('HandleModules.init needs to be called before Handle.retrieve can be uses')
        }
    }
}