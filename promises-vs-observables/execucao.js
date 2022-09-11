import { Observable, Subject } from 'rxjs';

// Promise

const promise = new Promise((resolve) => {
    console.log("Promise iniciada");
    resolve(true);
});


// Observable

const observable = new Observable((subscriber) => {
    console.log("Observable iniciada");
    subscriber.next(true);
});


setTimeout(() => {
    promise.then((result) => console.log("Promise emitiu: ", result));
    observable.subscribe((result) => console.log("Observable emitiu: ", result))
}, 5000);

