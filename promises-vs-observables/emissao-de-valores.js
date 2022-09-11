import { Observable } from 'rxjs';

// Promise

const promise = new Promise((resolve) => {
    let i = 0;
    setInterval(() => {
        resolve(i++);
    }, 1000);
});

promise.then((result) => console.log("Promise emitiu: ", result));

// Observable

const observable = new Observable((subscriber) => {
    let i = 0;
    setInterval(() => {
        subscriber.next(i++);
    }, 1000);
});

observable.subscribe((result) => console.log("Observable emitiu: ", result))