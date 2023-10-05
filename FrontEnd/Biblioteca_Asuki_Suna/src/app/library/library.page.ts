import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryServicesService } from '../services/library-services.service';


@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

  books: any = []

  constructor(private libraryService: LibraryServicesService, private router: Router) { }

  onClick() {
    this.getAll()
    this.router.navigateByUrl("/library-manager")
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

}
