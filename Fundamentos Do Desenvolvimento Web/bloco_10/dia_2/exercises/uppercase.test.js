const uppercase = require('./uppercase')

test('frase "bom dia tryber!" deve transformar-se em "BOM DIA TRYBER!"', done => {
    uppercase("bom dia tryber!", (str) => {
        expect(str).toEqual('BOM DIA TRYBER!');
        done();
    });
});