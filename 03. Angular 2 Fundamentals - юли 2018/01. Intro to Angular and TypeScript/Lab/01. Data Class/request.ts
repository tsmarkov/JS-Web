class HttpRequest {
    public method: string;
    public uri: string;
    public version: string;
    public message: string;
    public response: string;
    public fulfilled: boolean;

    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

let myData = new HttpRequest('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);
