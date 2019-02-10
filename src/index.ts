function f() {
    console.log('f(): evaluated');

    console.log('===========');
    console.log('===========');

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('target', target);

        console.log('===========');
        console.log('===========');

        console.log('propertyKey', propertyKey);

        console.log('===========');
        console.log('===========');

        console.log('descriptor', descriptor);

        console.log('===========');
        console.log('===========');

        console.log('f(): called');
    }
}

class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @f()
    print(): void {
        console.log(this.name);
    }
}

const user = new User('Andrew');
user.print();
