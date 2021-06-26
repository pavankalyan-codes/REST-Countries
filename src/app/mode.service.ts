import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModeService {
  mode$ = new BehaviorSubject<string>('light');

  constructor() {}
}
