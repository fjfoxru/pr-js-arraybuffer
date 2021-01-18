export default class ArrayBufferConverter {
    constructor() {
        this.buffer = '';
    }

    load(buffer) {
        this.buffer = buffer;
    }

    toString() {
        const decoder = new TextDecoder();
        return decoder.decode(this.buffer);
    }

  }
