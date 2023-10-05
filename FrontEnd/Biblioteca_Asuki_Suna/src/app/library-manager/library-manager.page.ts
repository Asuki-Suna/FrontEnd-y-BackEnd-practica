import { Component, OnInit } from '@angular/core';
import { LibraryServicesService } from '../services/library-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library-manager',
  templateUrl: './library-manager.page.html',
  styleUrls: ['./library-manager.page.scss'],
})
export class LibraryManagerPage implements OnInit {

  books: any = []
  titleID!: string;
  authorID!: any;
  genreID!: any;

  constructor(private libraryService: LibraryServicesService, private router: Router) { }

  clickBack(){
    this.getAll()
    this.router.navigateByUrl("/library")
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.libraryService.getAll().subscribe(response => {
      this.books = response;
      console.log(this.books)
    });
  }

  addBook(){
    let book = {
      title: this.titleID,
      author: this.authorID,
      genre: this.genreID
    }

    this.libraryService.add(book).subscribe(response => {
      console.log("Book added");
      this.getAll()
    })
  }

  onClickDelete(id:number){
    console.log("alguito")
    console.log(id)
    this.libraryService.remove(id).subscribe(resp => {
      console.log("se borro");
      this.getAll()
    })
  }

  onClickUpdate(id:number){
    let book = {
      title: this.titleID,
      author: this.authorID,
      genre: this.genreID
    }
    console.log(id)
    console.log(this.titleID)
    console.log(this.authorID)
    console.log(this.genreID)
    this.libraryService.update(id,book).subscribe(resp => {
      console.log("Book update");
      this.getAll()
  })
}
  
}
