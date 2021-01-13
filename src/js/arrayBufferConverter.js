import encoding from 'text-encoding';


export default class ArrayBufferConverter {
    constructor() {
        this.buffer = '';
    }

    load(buffer) {
        this.buffer = buffer;
    }

    toString() {
        const decoder = new encoding.TextDecoder();
        return decoder.decode(this.buffer);
    }

  }