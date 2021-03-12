class PluginCreateUUID {

    static formatOptions = {
        full: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        onlyChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        onlyNumbers: '0123456789'
    }

    constructor(options) {
        this.format = PluginCreateUUID.formatOptions[options.format] || PluginCreateUUID.formatOptions.full;
        this.number = (options.number < 65) ? options.number : 12 || 12;
        this.generate(this.format);
    }

    generate(format) {
        let uuid = '';
        for(let i = 0; i < this.number; i ++) {
            uuid += format.charAt(Math.floor(Math.random() * (format.length)));
        }
        return this.format = uuid;
        uuid = null;
    }

    render(el) {
        if (el) {
            document.querySelector(el).textContent = this.format;
        } 
    }

}