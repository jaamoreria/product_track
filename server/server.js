const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const validCodes = require('../server/validCodes');

const codeList = ['P9FK0U5V40', 'LHHR57JEQB', '5UFXCIPPC2', 'OU86HZQZL2', 'FY9AR8PIEW']

server.post('/code-authentication/v2/batch', (_request, result, next) => {
    let response = [];
    console.log(_request.body);
    if (_request && _request.body) {
        _request.body.codes?.forEach(requestCode => {
            if (codeList.includes(requestCode)) {
                response.push(validCodes.getValidCodes.find(validCodes => validCodes.code === requestCode));
            } else {
                const invalidCode = validCodes.getInvalidCodes;
                invalidCode.code = requestCode;
                response.push(invalidCode);
            }
        });

        return result.status(200).send(response);
    }

    return result.status(400).send(response);
});

server.listen(3000, () => {
    console.log('Server up: port 3000');
});