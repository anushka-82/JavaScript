(function chai() {
    //named IIFE
    console.log("DB connected");
}) ();

((name) => {
    //unamed IIFE
    console.log(`DB connected 2 ${name}`);
}) ('ANu')


