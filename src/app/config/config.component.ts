import { Component, OnInit } from '@angular/core';
import {catchError, retry} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpHeaderResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Patients} from '../../models/patients';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
  })
};
const option = new HttpHeaderResponse(httpOptions);

const body = {
  doc_id: '111'
};

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  constructor(private http: HttpClient) { }

  getAllPatients(url: string): Observable<any> {
    return this.http.post(url, option)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  ngOnInit(): void {
  }

}
