class Compare {
    compare = (var1, var2) => {
        if (var1 === undefined || var2 === undefined) {
            return false;

        } else if ( this._isObject(var1) && this._isObject(var2) ) {
            return this._obj(var1, var2);

        } else if ( Array.isArray(var1) && Array.isArray(var2) ) {
            return this._arr(var1, var2);
            
        } else if ( this._isObject(var1) || this._isObject(var2) ) {
            return false;    

        } else if ( Array.isArray(var1) || Array.isArray(var2) ) {
            return false;
        
        } else {
            return var1 === var2;
        }
    }

    _isObject = (obj) => {
        return Object.prototype.toString.call(obj) === '[object Object]';
    };
    
    _arr = (arr1, arr2) => {
        if (arr1.length !== arr2.length) {
            return false;
        }
    
        for (let i = 0; i < arr1.length; i++) {
            const child1 = arr1[i];
            const child2 = arr2[i];

            if (this.compare(child1, child2) === false) {
                return false;
            }
        }
    
        return true;
    }
    
    _obj = (obj1, obj2) => {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) {
            return false;
        }
    
        for(let i=0; i<keys1.length; i++) {
            const child1 = obj1[keys1[i]];
            const child2 = obj2[keys1[i]];

            if (this.compare(child1, child2) === false) {
                return false;
            }
        }
    
        return true;
    }
}

export default new Compare();