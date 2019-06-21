let funcionario = { email: 'abc@abc.com' };

let funcionarioProxy = new Proxy(funcionario, {
    get(target, prop, receiver) {
        console.log('Armadilha aqui');
        target.email = `**${target.email}**`;
        return Reflect.get(target, prop, receiver);
    }
});

console.log(funcionarioProxy.email);
