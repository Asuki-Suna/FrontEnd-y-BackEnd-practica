package com.joel.library.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joel.library.entity.dao.IBookDao;
import com.joel.library.entity.models.Book;

@Service
public class BookServiceImpl implements IBookService{

	@Autowired
	private IBookDao bookDao;
	
	@Override
	public List<Book> getAll(){
		return (List<Book>) bookDao.findAll();
	}

	@Override
	public Book get(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void add(Book library) {
	bookDao.save(library);
		
	}

	@Override
	public void modify(Book library, long id) {
		bookDao.findById(id).ifPresent((x)->{
			library.setId(id);
			bookDao.save(library);
		});
		
	}

	@Override
	public void delete(long id) {
		bookDao.deleteById(id);
		
	}
}