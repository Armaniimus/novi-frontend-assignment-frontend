import Globals from './Globals';

class HandleCookie {
    init() {
        const token = this.__getCookie("token");
        const accountLvl = this.__getCookie("accountLvl");

        Globals.setToken(token);
        if (accountLvl >= 0 && accountLvl<= 2 && accountLvl !== '') {
            Globals.setAccountLvl(accountLvl);
        }
    }

    check() {
        if (this.get("token") === '') {
            return false;
        } 
        
        if (this.get('accountLvl') === '') {
            return false;
        }
        return true;
    }

    set(param, value) {
        if (param === undefined) {
            console.error('cant access a undefined cookie param');
        } else if (value === undefined) {
            console.error('cant write a cookie param with a undefined value');
        } else {
            this.__setCookie(param, value, 365);
        }
    }

    get(param) {
        if (param === undefined) {
            console.error('cant access a undefined cookie param');
        } else {
            this.__getCookie(param);
        }
    }

    getAll() {
        return document.cookie;
    }

    destroyCookie() {
        this.__setCookie('token', '', -2);
        this.__setCookie('accountLvl', '', -2);
    }

    __setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

    __getCookie(cname) {
        const name = cname + "=";
        const ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }
}

export default new HandleCookie();