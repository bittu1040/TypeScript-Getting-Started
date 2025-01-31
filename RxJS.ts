import { Observable, firstValueFrom } from 'rxjs';

const myObservable = new Observable<string>(observer => {
    console.log('Observable started');
    observer.next('First Value');
    observer.next('Second Value');
    observer.complete();
});



async function ObservableToPromise() {
    const result= await myObservable.toPromise();
    console.log("Value:", result);
}

async function convertUsingFirstValue() {
    const result = await firstValueFrom(myObservable);
    console.log('Value:', result);
}

convertUsingFirstValue();
ObservableToPromise();
