package com.joel.library.entity.services;

import java.util.List;

import com.joel.library.entity.models.Book;

public interface IBookService {
	public List<Book> getAll();
	public Book get(long id);
	public void add(Book book);
	public void modify(Book book, long id);
	public void delete(long id);	
}
