//

const __failLog = (response) => {
    if (response.data !== undefined) {
        console.log('Apicall soft fail', response.data);
    } else {
        console.log('Api critical failure ', response.data);
    }
}

export const HandleApiError = response => {
    if (response.data !== undefined && response.data.auth === 'failed') {
        console.log('auth failed');
        console.log('returning app to a loggedout state');

        const navEvent = new PopStateEvent('popstate');
        window.history.pushState({}, '', '/logout');
        window.dispatchEvent(navEvent);
    } else {
        __failLog(response);
    }
}

export const HandleLoginError = response => {
    if (response.data !== undefined && response.data.auth === 'failed') {
        console.log('auth failed', response.data.messages);

    } else {
        __failLog(response);
    }
}