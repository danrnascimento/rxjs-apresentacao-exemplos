import { Observable } from 'rxjs';

// Promise

const promise = new Promise((resolve) => {
    console.log("Promise iniciada");
    resolve(true);
});


// Observable

const observable = new Observable((subscriber) => {
    console.log("Observable iniciada");
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
    subscriber.next(5);

    setTimeout(() => {
        subscriber.next(true);
    }, 5000);
});

promise.then((result) => console.log("Promise emitiu: ", result));
observable.subscribe((result) => console.log("Observable emitiu: ", result))


