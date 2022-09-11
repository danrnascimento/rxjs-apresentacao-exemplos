import { Observable, share } from 'rxjs';

// Promise

const promise = new Promise((resolve) => {
    console.log("Promise iniciada");
    setTimeout(() => {
        resolve(true);
    }, 7000);
});


// Observable

const observable = new Observable((subscriber) => {
    console.log("Observable iniciada");
    setTimeout(() => {
        subscriber.next(true);
    }, 7000);
});

// Observable compartilhado

const shared = new Observable((subscriber) => {
    console.log("Shared iniciado");
    setTimeout(() => {
        subscriber.next(true);
    }, 7000);
}).pipe(share());

// promise.then((result) => console.log("Promise emitiu: ", result));
// observable.subscribe((result) => console.log("Observable emitiu: ", result));
// shared.subscribe((result) => console.log("Shared emitiu: ", result));

setTimeout(() => {
    // promise.then((result) => console.log("Promise emitiu: ", result));
    // observable.subscribe((result) => console.log("Observable emitiu: ", result))
    // shared.subscribe((result) => console.log("Shared emitiu: ", result));
}, 5000);

// setTimeout(() => {
//     promise.then((result) => console.log("Promise emitiu: ", result));
//     observable.subscribe((result) => console.log("Observable emitiu: ", result))
// }, 10000);

