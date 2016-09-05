import assert from 'assert';
import {parseUSFXFile} from '../src/usfx';
import path from 'path';


describe('Test USFX Parser', function() {
    it('can parse asv', function() {
        this.timeout(5000);
        assert(parseUSFXFile !== undefined, 'usfx import broken; is undefined');
        const bible = parseUSFXFile(path.resolve(__dirname, 'asv.xml'));
        assert(bible.books.length === 66);
    });

    it('can get verse text', function() {
        this.timeout(5000);
        const bible = parseUSFXFile(path.resolve(__dirname, 'asv.xml'));

    });

});
