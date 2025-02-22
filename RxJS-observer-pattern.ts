import { Observable } from 'rxjs';

// Create an observable that emits a number every second until it reaches 15.
const myObservable = new Observable(subscriber => {
  let count = 1;
  const intervalId = setInterval(() => {
    subscriber.next(count);
    if (count === 15) {
      subscriber.complete();
      clearInterval(intervalId);
    }
    count++;
  }, 1000);

  return () => {
    console.log('Unsubscribing...');
    clearInterval(intervalId);
  };
});

console.log('Subscriptions started...');

const subscription1 = myObservable.subscribe({
  next: (value) => {
    console.log('Observer 1:', value);
    if (value === 5) {
      console.log('Observer 1 unsubscribing at value:', value);
      subscription1.unsubscribe();
    }
  },
  error: (err) => console.error('Observer 1 error:', err),
  complete: () => console.log('Observer 1 completed!')
});

const subscription2 = myObservable.subscribe({
  next: (value) => console.log('Observer 2 :', value),
  error: (err) => console.error('Observer 2 an error:', err),
  complete: () => console.log('Observer 2 completed!')
});
