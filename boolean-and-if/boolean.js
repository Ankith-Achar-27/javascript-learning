        console.log(3 > 5);
        console.log(5 == '5.00'); // returns true as but it is false as '5.00' is string
        console.log(5 === '5.00'); // returns false in programming we use this

        if (false) {
            console.log('Hello');
        }
        else {
            console.log('Else');
        }

        const age = 15;

        if (age >= 16) {
            console.log('You can drive..');
        }
        else if (age >= 14) {
            console.log('Almost there');
        }
        else {
            console.log('You can\'t drive..');
        }

        console.log(true && true);
        console.log(0.2 >= 0 && 0.2 < 1 / 3);

        // truthy and falsy values

        // falsy values -> false , 0 , '' , nan , undefined , null
        // truthy values -> everything else

         if (0) {
            console.log('falsy');
        }
        if (5) {
            console.log('truthy')
        }
        if (!0) {
            console.log('truthy')
        }

        // Nan => Not a number
        console.log(5 / 'hello'); // returns NaN

        // Undefined => when a variable is declared but not assigned a value
        let a;
        console.log(a); // returns undefined
