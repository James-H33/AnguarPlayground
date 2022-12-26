import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LazyRenderService {
  private state$ = new BehaviorSubject<any>({});
  private observer;

  constructor() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;

        const id = target.getAttribute('data-id') as string;
        this.updateState(id, isIntersecting);
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    this.observer = observer;
  }

  public watch() {
    return this.state$.asObservable();
  }

  public observe(element: any) {
    this.observer.observe(element);
  }

  public unobserve(element: HTMLElement) {
    this.observer.unobserve(element);
  }

  private updateState(id: string, value: boolean) {
    const current = this.state$.getValue();

    this.state$.next({
      ...current,
      [id]: value
    });
  }
}
