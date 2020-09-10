import Delete from './delete';
import Get from './read';
import Write from './write';

class Core {
    constructor() {
        this.remover = new Delete();
        this.getter = new Get();
        this.writer = new Write();
    }
}
export default Core;