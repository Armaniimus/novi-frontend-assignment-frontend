class Globals {
    __reloadNr = 0; 
    __token = '';
    __accountLvl = 0;
    __reloadFunction = null;

    setToken(token) {
        this.__token = token;
    };

    getToken() {
        return this.__token;
    }

    setAccountLvl(accountLvl) {
        if (accountLvl >= 0 && accountLvl <= 2) {
            this.__accountLvl = accountLvl;
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