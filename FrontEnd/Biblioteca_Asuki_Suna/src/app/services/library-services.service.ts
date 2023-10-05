import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const endPoint = 'http://localhost:8080/books';
const endPointDelete = 'http://localhost:8080/books/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LibraryServicesService {

  constructor(private httpCLient: HttpClient) { }

  getAll() {
    return this.httpCLient.get(endPoint);
  }

  add(book: any) {
    let body = new URLSearchParams();
    body.append("title", book.title)
    body.append("author", book.author)
    body.append("genre", book.genre);
    let bodyEncoded = body.toString();

    return this.httpCLient.post(endPoint, bodyEncoded, httpOptions);
  }

  remove(id: number) {
    let ruta = endPointDelete + id.toString();
    console.log(ruta)
    return this.httpCLient.delete(ruta);
  }

  update(id: number, book: any){
    let body = new URLSearchParams();
    body.append("title", book.title)
    body.append("author", book.author)
    body.append("genre", book.genre);
    let bodyEncoded = body.toString();

    return this.httpCLient.put(endPointDelete+id, bodyEncoded, httpOptions);
  }
}
