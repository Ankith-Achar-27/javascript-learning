       // Here product is Object
        // name and price are property
        const product = {
            name: 'socks',
            price: 1090
        };
        console.log(product);
        console.log(product.name);
        console.log(product.price);

        product.name = 'cotton socks';  // change the value
        console.log(product);

        // we can add new property to object
        product.newProperty = true;
        console.log(product);

        //delete the property
        delete product.newProperty;
        console.log(product);


        const product2 = {
            name: 'shirt',// name is  variable
            'delivery-time': '1 day', //'delivery-time' is string
            rating: { // nested objects
                stars: 4.5,
                count: 87
            },
            fun: function fun1() {
                console.log('function inside object');
            }
        };
        console.log(product2);
        console.log(product2['name']); // [] bracket notation same as dot notation
        console.log(product2['delivery-time']);

        console.log(product2.rating.count);
        product2.fun(); //runs fun:

        // convert js object ==> json {using JSON.stringify(js-obj)}
        // stringify is method of json object
        // convert product2 into json
        console.log(JSON.stringify(product2));

        // convert json ==> js object {using JSON.parse(js-string)}
        const jsonString = JSON.stringify(product2);
        console.log(JSON.parse(jsonString));


        //   Auto-Boxing
        // a special property of js
        // wraps string in an objects automatically
        console.log('hello'.length);
        console.log('hello'.toUpperCase());

        // Objects are References

        const object1 = {
            message: 'hello'
        }

        // copy by reference
        const object2 = object1; //only reference of object1 is assigned

        object1.message = 'Good Job!';
        console.log(object1);

        const object3 = {
            message: 'Good job!'
        };
        console.log(object3 === object1); // false different refernce
        console.log(object2 === object1); // true same refernce

        const object4 = {
            message: 'Good job!',
            price: 799
        };

        //const message = object4.message; //same as below
        const { message, price } = object4; //deconstructing took the property message
        // out of the object4 and saved in message

        console.log(message);
        console.log(price);

        const object5 = {
            // short hand property
            // message: message  assign message of another object
            // same as the above
            message,

            /* method: function function5() {
                 console.log('method');
             } */

            // Instead of defining function we can use like above
            // shorthand method syntax
            method() {
                console.log('method');
            }
        };

        console.log(object5);
        object5.method();
