import { Observable,share } from 'rxjs';

// Observable

const observable = new Observable((subscriber) => {
    console.log("Observable iniciada");
    const interval = setInterval(() => {
        console.log("tic")
        subscriber.next(true);
        subscriber.error(true);
        subscriber.complete(true);
    }, 1000);

    return () => {
        clearInterval(interval)
    };
}).pipe(share());



const subscription = observable.subscribe((result) => console.log("Observable 1 emitiu: ", result));
const subscription2 = observable.subscribe({
    next: () => {},
    error: () => {},
    complete: () => {}
});


setTimeout(() => {
    subscription.unsubscribe();
}, 10000);

setTimeout(() => {
    subscription2.unsubscribe();
}, 15000);
