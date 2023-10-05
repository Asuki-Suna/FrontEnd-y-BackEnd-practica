package com.joel.library.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.joel.library.entity.models.Book;

public interface IBookDao extends CrudRepository<Book, Long>{

}
