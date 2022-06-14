import HandleCookie from './HandleCookie';

class Globals {
    __HandleCookie = HandleCookie;
    __reloadNr = 0; 
    __token = '';
    __accountLvl = 0;
    __reloadFunction = null;
    __urlVars = {}

    pageConst = "/projectFiles/projecten/novi-frontend";

    setToken(token) {
        this.__token = token;
        this.__HandleCookie.set('token', token);
    };

    getToken() {
        return this.__token;
    }

    setUrlVars(urlVars) {
        this.__urlVars = urlVars;
    }

    getUrlVars() {
        return this.__urlVars;
    }

    setAccountLvl(accountLvl) {
        accountLvl = Math.floor(accountLvl);
        if (accountLvl >= 0 && accountLvl <= 2 && accountLvl !== '') {    
            this.__accountLvl = accountLvl;
            this.__HandleCookie.set('accountLvl', accountLvl);
        } else {
            console.error('tried to set a invalid accountLvl');
        }
    }

    getAccountLvl() {
        return this.__accountLvl
    }

    reload() {
        if (typeof this.reloadFunction === 'function') {
            this.__reloadNr++;
            this.reloadFunction(this.__reloadNr);
        } else {
            console.error('tried to reload without having a reload function');
        }
    }

    setReloadFunc(func) {
        this.reloadFunction = func;
    }
}

export default new Globals();