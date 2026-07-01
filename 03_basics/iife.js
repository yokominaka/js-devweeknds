(function chai(){
    //named iife(immediately invoked function expression)
    console.log(`db connected 1 `);
})();

( () => {
    console.log(`db connected 2`);
})();

( (name) => {
    console.log(`db connected 3 ${name}`);
})(`hamza`);