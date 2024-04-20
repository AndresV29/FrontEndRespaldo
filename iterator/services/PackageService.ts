import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, Subject, tap} from 'rxjs';
import {Package} from "../classes/Package";

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private apiUrl = 'http://localhost:8080/api/paquete/retrieveall';
  private packagesSubject = new BehaviorSubject<Package[]>([]);
  packages$ = this.packagesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getPackages();
  }

  getPackages(): void{
    this.http.get<Package[]>(this.apiUrl).subscribe(
      (initialPackages:any) => {
        this.packagesSubject.next(initialPackages.iterator);
      },
      (error) => {
        console.error('Error al obtener la lista de paquetes:', error);
      }
    );
  }

}
