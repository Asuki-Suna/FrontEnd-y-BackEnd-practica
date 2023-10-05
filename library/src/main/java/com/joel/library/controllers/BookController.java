package com.joel.library.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joel.library.entity.models.Book;
import com.joel.library.entity.services.IBookService;

@CrossOrigin(origins = "*")
@RestController
public class BookController {
	@Autowired
	private IBookService bookService;
	
	@GetMapping("/books")
	public List<Book> getAll(){
		return bookService.getAll();
	}
	
	@PostMapping("/books")
	public void addBook(Book book) {
		bookService.add(book);
	}
	
	@DeleteMapping("/books/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		System.out.println("hola");
		System.out.println(id);
		bookService.delete(id);
	}
	
	@PutMapping("/books/{id}")
	public void put(Book book, @PathVariable(value = "id") long id) {
		bookService.modify(book, id);
	}

}
